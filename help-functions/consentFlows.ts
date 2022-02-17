import {
  AHConsReqInitializeSp1ToAhJWT,
  AHConsReqFinalizeSp2ToAhJWT,
  AHConsApprovalFinalizeSp1ToAhJWT,
  AHConsApprovalInitializeSp2ToAhJWT,
  AHConsReqInitializeAhToSp2JWT,
  AHConsReqFinalizeAhToSp1JWT,
  AHConsApprovalInitializeAhToSp1JWT,
  AHConsApprovalFinalizeAhToSp2JWT,
} from "@ao/ao-typings";
import { SignJWT } from "jose";
import { createPrivateKey, createPublicKey } from "crypto";
import { jwtVerify } from "jose";
import {
  ConsentFlowCreateOutput,
  CreateRequestInput,
  InitiateConsentRequestInput,
  FinalizeConsentRequestInput,
  InitiateConsentApprovalInput,
  FinalizeConsentApprovalInput,
} from "../types/consentFlowsInput";
import { ConfigFileInput } from "../types/configFileInput";

// Summary: Contains the JWT creations for {Initiate/Finalize} of Consent{Request/Approval}

export class ConsentFlows {
  public constructor(private config: ConfigFileInput) {}

  public async createConsentRequestInitialization(
    input: InitiateConsentRequestInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<AHConsReqInitializeSp1ToAhJWT> = {
      goal: "INITIATE",
      type: "CONSENT_REQUEST",
      kind: "FLOW",
      scope: ["serviceprovider:flow"],
      reqServiceProviderId:
        input?.serviceProviderId || this.config.serviceProviderId,
      consServiceProviderId: input.consentServiceProviderId,
      reqPrincipalId: input?.requestPrincipalId,
      reqPrincipalName: input?.requestPrincipalName,
      actions: input?.actions || [],
      resources: input?.resources || [],
      conditions: input?.conditions || [],
      termsAndConditions: input?.termsAndConditions || "",
      purpose: input?.purpose || []
    };

    return await this.createToken({
      payload: consReqJwtPayload,
      typeUrl: "/consent_request/initialize?reqToken=",
      exp: input?.expirationTime,
    });
  }

  public async createConsentRequestFinalization(
    input: FinalizeConsentRequestInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<AHConsReqFinalizeSp2ToAhJWT> = {
      goal: "FINALIZE",
      type: "CONSENT_REQUEST",
      kind: "FLOW",
      scope: ["serviceprovider:flow"],
      consReqId: input.consentRequestId,
      actions: input?.actions || [],
      resources: input?.resources || [],
      conditions: input?.conditions || [],
    };

    return await this.createToken({
      payload: consReqJwtPayload,
      typeUrl: "/consent_request/finalize?approvalToken=",
      exp: input?.expirationTime,
    });
  }

  public async createConsentApprovalInitialization(
    input: InitiateConsentApprovalInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<AHConsApprovalInitializeSp2ToAhJWT> = {
      goal: "INITIATE",
      type: "CONSENT_APPROVAL",
      kind: "FLOW",
      scope: ["serviceprovider:flow"],
      consReqId: input.consentRequestId,
      consPrincipalId: input?.consentPrincipalId,
      consPrincipalName: input?.consentPrincipalName,
      actions: input?.actions || [],
      resources: input?.resources || [],
      conditions: input?.conditions || [],
    };

    return await this.createToken({
      payload: consReqJwtPayload,
      typeUrl: "/consent_approval/initialize?approvalToken=",
      exp: input?.expirationTime,
    });
  }

  public async createConsentApprovalFinalization(
    input: FinalizeConsentApprovalInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<AHConsApprovalFinalizeSp1ToAhJWT> = {
      goal: "FINALIZE",
      type: "CONSENT_APPROVAL",
      kind: "FLOW",
      scope: ["serviceprovider:flow"],
      consReqId: input.consentRequestId,
      consId: input.consentId,
    };

    return await this.createToken({
      payload: consReqJwtPayload,
      typeUrl: "/request_consent?reqToken=",
      exp: input?.expirationTime,
    });
  }

  public async receiveConsentRequestInitialization(
    requestTicket: string
  ): Promise<AHConsReqInitializeAhToSp2JWT> {
    const ticket = await jwtVerify(
      requestTicket,
      createPublicKey(this.config.saPublicKey)
    );
    return <AHConsReqInitializeAhToSp2JWT>(<any>ticket.payload);
  }

  public async receiveConsentRequestFinalization(
    requestTicket: string
  ): Promise<AHConsReqFinalizeAhToSp1JWT> {
    const ticket = await jwtVerify(
      requestTicket,
      createPublicKey(this.config.saPublicKey)
    );
    return <AHConsReqFinalizeAhToSp1JWT>(<any>ticket.payload);
  }

  public async receiveConsentApprovalInitialization(
    requestTicket: string
  ): Promise<AHConsApprovalInitializeAhToSp1JWT> {
    const ticket = await jwtVerify(
      requestTicket,
      createPublicKey(this.config.saPublicKey)
    );
    return <AHConsApprovalInitializeAhToSp1JWT>(<any>ticket.payload);
  }

  public async receiveConsentApprovalFinalization(
    requestTicket: string
  ): Promise<AHConsApprovalFinalizeAhToSp2JWT> {
    const ticket = await jwtVerify(
      requestTicket,
      createPublicKey(this.config.saPublicKey)
    );
    return <AHConsApprovalFinalizeAhToSp2JWT>(<any>ticket.payload);
  }

  private async createToken(input: CreateRequestInput): Promise<ConsentFlowCreateOutput> {
    const consentFlowToken = await new SignJWT(<any>input.payload)
      .setProtectedHeader({ alg: "RS256" })
      .setIssuer(this.config.serviceProviderId)
      .setIssuedAt(Math.floor(new Date().getTime() / 1000))
      .setAudience("Association Orchestrator")
      .setExpirationTime(input.exp || "10min")
      .sign(createPrivateKey(this.config.serviceProviderPrivateKey));

    return {
      url: `${this.config.saBaseUrl}${input.typeUrl}${encodeURIComponent(
        consentFlowToken
      )}`,
      token: consentFlowToken,
    };
  }
}
