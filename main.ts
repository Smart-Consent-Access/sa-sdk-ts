import { Configuration, createConfiguration } from "./configuration";
import {
  PromiseConsentRequestsApi as ConsentRequestsApi,
  PromiseConsentsApi as ConsentsApi,
  PromiseServiceProvidersApi as ServiceProvidersApi,
  PromiseActionTemplatesApi as ActionTemplatesApi
} from "./types/PromiseAPI";
import { ServerConfiguration } from "./servers";
import { SignJWT } from "jose";
import * as fs from "fs";
import { ConsentSearch, PolicyEnforcement, ConsentFlows, SmartAccessHelper } from "./index";
import { createPrivateKey } from "crypto";

export interface SaBaseConfig {
  saBaseUrl: string;
  serviceProviderPrivateKey: string;
  saPublicKey: string;
  serviceProviderId: string;
}

class SmartAccess {
  public policyEnforcement!: PolicyEnforcement;
  public consentSearch!: ConsentSearch;
  public consentFlows!: ConsentFlows;
  public serviceProviders!: ServiceProvidersApi;
  public consentRequests!: ConsentRequestsApi;
  public consents!: ConsentsApi;
  public actionTemplates!: ActionTemplatesApi;
  public smartAccessUtils!: SmartAccessHelper;
  private saServiceProviderId = process.env.SA_SA_SERVICE_PROVIDER_ID || "19fa2355-70f0-428d-8ee3-601773d50728";
  private saBaseUrlAPI: string = '';
  private SDKAssumedServiceProviderId: string;
  private initialized: boolean = false;

  constructor(private serviceProviderId?: string, private privateKeyPath?: string) {
    // Initialize the SA SDK with config values from ENV
    this.SDKAssumedServiceProviderId = this.serviceProviderId || process.env.SA_SERVICE_PROVIDER_ID || ""; // TODO: Must be set, no fallback
    if (!this.SDKAssumedServiceProviderId) throw new Error("No ServiceProviderId");
  }

  async init(): Promise<void> {
    if (this.initialized) {
      return;
    }
    this.saBaseUrlAPI =
      process.env.SA_BASE_URL_API || "http://localhost:3000/api/v1"; // TODO: Prod URL
    const saBaseUrlWeb = process.env.SA_BASE_URL_WEB || "http://localhost:8080"; // TODO: Prod URL
    const spPrivKey =
      process.env.SA_SERVICE_PROVIDER_PRIVATE_KEY ||
      fs
        .readFileSync(
          this.privateKeyPath ||
            process.env.SA_SERVICE_PROVIDER_PRIVATE_KEY_PATH ||
            "./config/aoPrivateKey.pem"
        )
        .toString();

    const saAuthorizationJwt = await new SignJWT({
      iss: this.SDKAssumedServiceProviderId,
      aud: "Association Orchestrator",
      kind: "API_AUTHORIZATION",
      scope: [
        "serviceprovider:info",
        "serviceprovider:flow",
        "serviceprovider:ticket",
      ],
    }).setProtectedHeader({ alg: "RS256" })
      .setIssuedAt(Math.floor(new Date().getTime() / 1000))
      .sign(createPrivateKey(spPrivKey));

    // Prepare the AO object, which is the entry-point to the SDK
    const saSdkApiConf = createConfiguration({
      baseServer: new ServerConfiguration(this.saBaseUrlAPI, {}),
      authMethods: { jwt: `Bearer ${saAuthorizationJwt}` },
    });

    const serviceProvidersApi = new ServiceProvidersApi(saSdkApiConf);

    let saPubKey: string;
    if (process.env.ENV === "test") {
      saPubKey = fs.readFileSync(process.env.TEST_SA_PUBLIC_KEY_PATH || "").toString();
    } else {
      saPubKey = await serviceProvidersApi.getServiceProvider(this.saServiceProviderId).then(res => res.publicKey) || '';
    }

    const saBaseConf: SaBaseConfig = {
      saBaseUrl: saBaseUrlWeb,
      serviceProviderPrivateKey: spPrivKey,
      saPublicKey: saPubKey,
      serviceProviderId: this.SDKAssumedServiceProviderId,
    };

    const consentRequestsApi = new ConsentRequestsApi(saSdkApiConf);

    this.policyEnforcement = new PolicyEnforcement(saBaseConf);
    this.consentSearch = new ConsentSearch();
    this.consentFlows = new ConsentFlows(saBaseConf);
    this.serviceProviders = serviceProvidersApi;
    this.consentRequests = consentRequestsApi;
    this.consents = new ConsentsApi(saSdkApiConf);
    this.actionTemplates = new ActionTemplatesApi(saSdkApiConf);
    this.smartAccessUtils = new SmartAccessHelper(saBaseConf);
    this.initialized = true;
  }

  getApiConfigWithAuth(authTicket: string): Configuration {
    return createConfiguration({
      baseServer: new ServerConfiguration(this.saBaseUrlAPI, {}),
      authMethods: { jwt: `Bearer ${authTicket}` },
    });
  }
}

export default SmartAccess;
