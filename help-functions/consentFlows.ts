import {
  SAConsReqInitializeSp1ToSaJWT,
  SAConsReqFinalizeSp2ToSaJWT,
  ReceivedSAConsReqInitialization,
  SAConsApprovalFinalizeSp1ToSaJWT,
  SAConsApprovalInitializeSp2ToSaJWT,
  SAConsReqInitializeSaToSp2JWT,
  SAConsReqFinalizeSaToSp1JWT,
  SAConsApprovalInitializeSaToSp1JWT,
  SAConsApprovalFinalizeSaToSp2JWT,
  ReceivedSAConsInitialization,
  ReceivedSAConsReqFinalization,
  ResourceString,
  ActionString,
  ConditionString,
  Expression,
} from "@smart-consent-access/sa-typings";
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
  InitiateConsentRejectionInput,
} from "../types/consentFlowsInput";
import { ConfigFileInput } from "../types/configFileInput";

// Summary: Contains the JWT creations for {Initiate/Finalize} of Consent{Request/Approval}

export class ConsentFlows {
  public constructor(private config: ConfigFileInput) {}

  public async createConsentRequestInitialization(
    input: InitiateConsentRequestInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<SAConsReqInitializeSp1ToSaJWT> = {
      goal: "INITIATE",
      type: "CONSENT_REQUEST",
      kind: "FLOW",
      scope: ["serviceprovider:flow"],
      reqServiceProviderId:
        input.serviceProviderId || this.config.serviceProviderId,
      consServiceProviderId: input.consentServiceProviderId,
      reqPrincipalId: input.requestPrincipalId,
      reqPrincipalName: input.requestPrincipalName,
      actions: this.combineActionsInput(input.actions ?? []),
      resources: this.combineResourceInput(input.resources ?? []),
      conditions: this.combineConditionsInput(input.conditions ?? []),
      termsAndConditions: input.termsAndConditions || "",
      purpose: input.purpose || [],
    };

    return await this.createToken({
      payload: consReqJwtPayload,
      typeUrl: "/consent_request/initialize?reqToken=",
      exp: input.expirationTime,
    });
  }

  public async createConsentRequestFinalization(
    input: FinalizeConsentRequestInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<SAConsReqFinalizeSp2ToSaJWT> = {
      goal: "FINALIZE",
      type: "CONSENT_REQUEST",
      kind: "FLOW",
      scope: ["serviceprovider:flow"],
      consReqId: input.consentRequestId,
      actions: this.combineActionsInput(input.actions ?? []),
      resources: this.combineResourceInput(input.resources ?? []),
      conditions: this.combineConditionsInput(input.conditions ?? []),
      numAffectedUsers: input.numAffectedUsers,
    };

    return await this.createToken({
      payload: consReqJwtPayload,
      typeUrl: "/consent_request/finalize?approvalToken=",
      exp: input.expirationTime,
    });
  }

  public async createConsentApprovalInitialization(
    input: InitiateConsentApprovalInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<SAConsApprovalInitializeSp2ToSaJWT> = {
      goal: "INITIATE",
      type: "CONSENT_APPROVAL",
      kind: "FLOW",
      scope: ["serviceprovider:flow"],
      consReqId: input.consentRequestId,
      consPrincipalId: input.consentPrincipalId,
      consPrincipalName: input.consentPrincipalName,
      actions: this.combineActionsInput(input.actions ?? []),
      resources: this.combineResourceInput(input.resources ?? []),
      conditions: this.combineConditionsInput(input.conditions ?? []),
    };

    return await this.createToken({
      payload: consReqJwtPayload,
      typeUrl: "/consent_approval/initialize?approvalToken=",
      exp: input.expirationTime,
    });
  }

  public async createConsentRejectionInitialization(
    input: InitiateConsentRejectionInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<SAConsApprovalInitializeSp2ToSaJWT> = {
      goal: "INITIATE",
      type: "CONSENT_REJECTION",
      kind: "FLOW",
      scope: ["serviceprovider:flow"],
      consReqId: input.consentRequestId,
      consPrincipalId: input.consentPrincipalId,
      consPrincipalName: input.consentPrincipalName,
      actions: this.combineActionsInput(input.actions ?? []),
      resources: this.combineResourceInput(input.resources ?? []),
      conditions: this.combineConditionsInput(input.conditions ?? []),
    };

    return await this.createToken({
      payload: consReqJwtPayload,
      typeUrl: "/consent_approval/initialize?approvalToken=",
      exp: input.expirationTime,
    });
  }

  public async createConsentApprovalFinalization(
    input: FinalizeConsentApprovalInput
  ): Promise<ConsentFlowCreateOutput> {
    const consReqJwtPayload: Partial<SAConsApprovalFinalizeSp1ToSaJWT> = {
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
      exp: input.expirationTime,
    });
  }

  public async receiveConsentRequestInitialization(
    requestTicket: string
  ): Promise<ReceivedSAConsReqInitialization> {
    const ticket = await jwtVerify(
      requestTicket,
      createPublicKey(this.config.saPublicKey)
    );
    const data = <SAConsReqInitializeSaToSp2JWT>(<any>ticket.payload);

    const actionString = this.getActionStringFormat(data.actions);
    const conditionString = this.getConditionStringFormat(data.conditions);
    const resourceString = this.getResourceStringFormat(data.resources);

    data.resources = data.resources.map((r) => decodeURIComponent(r));
    data.conditions = data.conditions.map((c) => decodeURIComponent(c));

    return {
      ticket: data,
      actionString: actionString,
      conditionString: conditionString,
      resourceString: resourceString,
    };
  }

  public async receiveConsentRequestFinalization(
    requestTicket: string
  ): Promise<ReceivedSAConsReqFinalization> {
    const ticket = await jwtVerify(
      requestTicket,
      createPublicKey(this.config.saPublicKey)
    );
    const data = <SAConsReqFinalizeSaToSp1JWT>(<any>ticket.payload);

    const actionString = this.getActionStringFormat(data.actions);
    const conditionString = this.getConditionStringFormat(data.conditions);
    const resourceString = this.getResourceStringFormat(data.resources);

    data.resources = data.resources.map((r) => decodeURIComponent(r));
    data.conditions = data.conditions.map((c) => decodeURIComponent(c));

    return {
      ticket: data,
      actionString: actionString,
      conditionString: conditionString,
      resourceString: resourceString,
    };
  }

  public async receiveConsentApprovalInitialization(
    requestTicket: string
  ): Promise<ReceivedSAConsInitialization> {
    const ticket = await jwtVerify(
      requestTicket,
      createPublicKey(this.config.saPublicKey)
    );
    const data = <SAConsApprovalInitializeSaToSp1JWT>(<any>ticket.payload);

    const actionString = this.getActionStringFormat(data.actions);
    const conditionString = this.getConditionStringFormat(data.conditions);
    const resourceString = this.getResourceStringFormat(data.resources);

    data.resources = data.resources.map((r) => decodeURIComponent(r));
    data.conditions = data.conditions.map((c) => decodeURIComponent(c));

    return {
      ticket: data,
      actionString: actionString,
      conditionString: conditionString,
      resourceString: resourceString,
    };
  }

  public async receiveConsentApprovalFinalization(
    requestTicket: string
  ): Promise<SAConsApprovalFinalizeSaToSp2JWT> {
    const ticket = await jwtVerify(
      requestTicket,
      createPublicKey(this.config.saPublicKey)
    );
    return <SAConsApprovalFinalizeSaToSp2JWT>(<any>ticket.payload);
  }

  private async createToken(
    input: CreateRequestInput
  ): Promise<ConsentFlowCreateOutput> {
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

  private combineActionsInput(
    input: ActionString[]
  ): string[] {
    return input.map((i) => {
      return `${i.tenant}:${i.system}/${i.actionName}`;
    });
  }

  private combineResourceInput(
    input: ResourceString[]
  ): string[] {
    const result = input.map((i) => {
      let resourceString = `${i.tenant}:${i.system}`;
      const mappedResources = i.resourceTags.map(
        (r) => `/${r.key}=${encodeURIComponent(r.value)}`
      );
      return resourceString.concat(mappedResources.join(""));
    });

    return result;
  }

  private combineConditionsInput(
    input: ConditionString[]
  ): string[] {
    return input.map((i) => {
      return `${i.tenant}:${i.system}/${i.expression.key}=${encodeURIComponent(i.expression.value)}`;
    });
  }

  public getActionStringFormat(entityString: string[]): ActionString[] {
    return entityString.map((action) => {
      const tenantParts = action.split(":");
      const tenant = tenantParts.length === 2 ? tenantParts[0] : undefined;
      if (!tenant) {
        throw new Error(
          "Incorrect format when trying to parse tenant in action string"
        );
      }

      const systemParts = tenantParts[1].split("/");
      const system = systemParts.length === 2 ? systemParts[0] : undefined;
      if (!system) {
        throw new Error(
          "Incorrect format when trying to parse system in action string"
        );
      }

      const actionName = systemParts[1];
      if (!actionName || actionName === "") {
        throw new Error(
          "Incorrect format when trying to parse action name"
        );
      }

      return {
        tenant,
        system,
        actionName: actionName,
      };
    });
  }

  public getResourceStringFormat(entityString: string[]): ResourceString[] {
    return entityString.map((resource) => {
      let tenantParts: string[] = resource.split(":");
      const tenant = tenantParts.length >= 2 ? tenantParts[0] : undefined;
      if (!tenant) {
        throw new Error(
          "Incorrect format when trying to parse tenant in resource string"
        );
      }

      // Some resources includes : in value (timeofday, date), if so then use the whole string after the first :
      const systemParts =
        tenantParts.length > 2
          ? resource.slice(resource.indexOf(":") + 1).split("/")
          : tenantParts[1].split("/");
      const system = systemParts.length >= 2 ? systemParts[0] : undefined;
      if (!system) {
        throw new Error(
          "Incorrect format when trying to parse system in resource string"
        );
      }

      // Resources often includes several tags separated by /, so use the whole string after the first /
      const allTagParts =
        systemParts.length > 2
          ? resource.slice(resource.indexOf("/") + 1).split("/")
          : [systemParts[1]];
      const resourceTags: Expression[] = allTagParts.map((tag, i) => {
        const tagParts = tag.split("=");
        const tagName = tagParts.length === 2 ? tagParts[0] : undefined;
        if (!tagName || tagName === "") {
          throw new Error(
            `Incorrect format when trying to parse tag key ${i} in resource string`
          );
        }
        const tagValue = decodeURIComponent(tagParts[1]);
        if (!tagValue || tagValue === "") {
          throw new Error(
            `Incorrect format when trying to parse tag value ${i} in resource string`
          );
        }

        return { key: tagName, value: tagValue };
      });

      return {
        tenant,
        system,
        resourceTags,
      };
    });
  }

  public getConditionStringFormat(entityString: string[]): ConditionString[] {
    return entityString.map((condition) => {
      let tenantParts = condition.split(":");
      const tenant = tenantParts.length >= 2 ? tenantParts[0] : undefined;
      if (!tenant) {
        throw new Error("Incorrect format when trying to parse tenant in condition");
      }

      // Some conditions includes : in value (timeofday), if so then use the whole string after the first :
      const systemParts =
        tenantParts.length > 2
          ? condition.slice(condition.indexOf(":") + 1).split("/")
          : tenantParts[1].split("/");
      const system = systemParts.length === 2 ? systemParts[0] : undefined;
      if (!system) {
        throw new Error("Incorrect format when trying to parse system in condition");
      }

      const expressionParts = systemParts[1].split("=");
      const expressionName =
        expressionParts.length === 2 ? expressionParts[0] : undefined;
      if (!expressionName || expressionName === "") {
        throw new Error("Incorrect format when trying to parse condition key");
      }

      const expressionValue = decodeURIComponent(expressionParts[1]);
      if (!expressionValue || expressionValue === "") {
        throw new Error(
          "Incorrect format when trying to parse condition value"
        );
      }

      return {
        tenant,
        system,
        expression: { key: expressionName, value: expressionValue },
      };
    });
  }

  public getEncodedActionStrings(actionStrings: string[]): string[] {
    const validated = this.getActionStringFormat(actionStrings);
    const encoded = this.combineActionsInput(validated);
    return encoded;
  }

  public getEncodedResourceStrings(resourceStrings: string[]): string[] {
    const validated = this.getResourceStringFormat(resourceStrings);
    const encoded = this.combineResourceInput(validated);
    return encoded;
  }

  public getEncodedConditionStrings(conditionStrings: string[]): string[] {
    const validated = this.getConditionStringFormat(conditionStrings);
    const encoded = this.combineConditionsInput(validated);
    return encoded;
  }

}
