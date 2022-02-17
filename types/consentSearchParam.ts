export interface FetchConsentRequestForResource {
  resourceId: string;
  resourceName: string;
}

export interface Consent {
  id: string;
}

export interface ConsentRequest {
  actions: string[];
  resources: string[];
  conditions: string[];
  consents: Consent[];
}
