import { createConfiguration } from "./configuration";
import {
  PromiseBackofficeInternalAdminApi as BackofficeInternalAdminApi,
  PromiseConsentRequestsApi as ConsentRequestsApi,
  PromiseConsentsApi as ConsentsApi,
  PromiseServiceProvidersApi as ServiceProvidersApi,
} from "./types/PromiseAPI";
import { ServerConfiguration } from "./servers";
import { sign } from "jsonwebtoken";
import * as fs from "fs";
import { ConsentSearch, PolicyEnforcement, ConsentFlows } from "./index";
import { ConfigFileInput } from "./types/configFileInput";

class SmartAccess {
  public policyEnforcement;
  public consentSearch;
  public consentFlows;
  public serviceProviders;
  public backofficeInternalAdmin;
  public consentRequests;
  public consents;

  constructor(serviceProviderId?: string, privateKeyPath?: string) {
    // Initialize the SA SDK with config values from ENV
    const saServiceProviderId = serviceProviderId || process.env.SA_SERVICE_PROVIDER_ID || ""; // TODO: Must be set, no fallback
    if (!saServiceProviderId) throw new Error("No ServiceProviderId");

    const saBaseUrlAPI =
      process.env.SA_BASE_URL_API || "http://localhost:3000/api/v1"; // TODO: Prod URL
    const saBaseUrlWeb = process.env.SA_BASE_URL_WEB || "http://localhost:8080"; // TODO: Prod URL
    const saPrivKey =
      process.env.SA_SERVICE_PROVIDER_PRIVATE_KEY ||
      fs
        .readFileSync(
          privateKeyPath ||
            process.env.SA_SERVICE_PROVIDER_PRIVATE_KEY_PATH ||
            "./config/aoPrivateKey.pem"
        )
        .toString();
    const saPubKey =
      process.env.SA_PUBLIC_KEY ||
      fs
        .readFileSync(
          process.env.SA_PUBLIC_KEY_PATH || "./config/aoPublicKey.pem"
        )
        .toString(); // TODO: More explicit, no guessing

    const saAuthorizationJwt = sign(
      {
        iss: saServiceProviderId,
        aud: "Association Orchestrator",
        kind: "API_AUTHORIZATION",
        scope: [
          "serviceprovider:info",
          "serviceprovider:flow",
          "serviceprovider:ticket",
        ],
      },
      saPrivKey,
      { algorithm: "RS256" }
    );

    // Prepare the AO object, which is the entry-point to the SDK
    const saSdkApiConf = createConfiguration({
      baseServer: new ServerConfiguration(saBaseUrlAPI, {}),
      authMethods: { jwt: `Bearer ${saAuthorizationJwt}` },
    });

    const saBaseConf: ConfigFileInput = {
      saBaseUrl: saBaseUrlWeb,
      serviceProviderPrivateKey: saPrivKey,
      saPublicKey: saPubKey,
      serviceProviderId: saServiceProviderId,
    };

    const serviceProvidersApi = new ServiceProvidersApi(saSdkApiConf);
    const consentRequestsApi = new ConsentRequestsApi(saSdkApiConf);

    this.policyEnforcement = new PolicyEnforcement(saBaseConf);
    this.consentSearch = new ConsentSearch(consentRequestsApi, saBaseConf);
    this.consentFlows = new ConsentFlows(saBaseConf);
    this.serviceProviders = serviceProvidersApi;
    this.backofficeInternalAdmin = new BackofficeInternalAdminApi(saSdkApiConf); // TODO: Not for public use
    this.consentRequests = consentRequestsApi;
    this.consents = new ConsentsApi(saSdkApiConf);
  }
}

export default SmartAccess;
