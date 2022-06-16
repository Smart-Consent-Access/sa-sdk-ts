import { LocalizedString, ActionString, ConditionString, ResourceString } from "@smart-consent-access/sa-typings";

export interface ConsentFlowCreateOutput {
  url: string;
  token: string;
}

export interface CreateRequestInput {
  payload: any;
  typeUrl: string;
  exp?: string;
}

export interface InitiateConsentRequestInput {
  consentServiceProviderId: string;
  requestPrincipalId?: string;
  requestPrincipalName?: string;
  actions?: ActionString[];
  resources?: ResourceString[];
  conditions?: ConditionString[];
  expirationTime?: string;
  serviceProviderId?: string;
  termsAndConditions?: string;
  purpose?: LocalizedString[];
}

export interface FinalizeConsentRequestInput {
  consentRequestId: string;
  actions?: ActionString[];
  resources?: ResourceString[];
  conditions?: ConditionString[];
  expirationTime?: string;
  numAffectedUsers: number;
}

export interface InitiateConsentApprovalInput {
  consentRequestId: string;
  consentPrincipalId?: string;
  consentPrincipalName?: string;
  actions?: ActionString[];
  resources?: ResourceString[];
  conditions?: ConditionString[];
  expirationTime?: string;
}

export interface InitiateConsentRejectionInput {
  consentRequestId: string;
  consentPrincipalId?: string;
  consentPrincipalName?: string;
  actions?: ActionString[];
  resources?: ResourceString[];
  conditions?: ConditionString[];
  expirationTime?: string;
}

export interface FinalizeConsentApprovalInput {
  consentRequestId: string;
  consentId: string;
  expirationTime?: string;
}
