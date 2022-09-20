# Smart Access SDK for Typescript

## Install

`npm install @smart-consent-access/sa-sdk-ts`

## Usage

Create a .env with the following information:

SA_SERVICE_PROVIDER_PRIVATE_KEY_PATH="path_to_private_key.pem"`
SA_BASE_URL_API="https://sa.sandbox.smartconsent.se/api/v1"
SA_BASE_URL_WEB="https://sa.sandbox.smartconsent.se"
SA_SERVICE_PROVIDER_ID="your_service_provider_id"

`import SmartAccess from "@smart-consent-access/sa-sdk-ts"`
`const SA = new SmartAccess()`

Initialize instance using variables from .env

`await SA.init()`

### Classes

SA.policyEnforcement -> functions for validation and policy enforcement <br />
SA.consentSearch -> help function for searching through consent requests that have a resource <br />
SA.consentFlows -> creates and opens consent requests and consent JWTs <br />
SA.serviceProviders -> SA endpoints for service provider <br />
SA.consentRequests -> SA endpoints for consentRequests <br />
SA.consents -> SA endpoints for consents <br />
SA.actionTemplates -> SA endpoints for action templates <br />
SA.smartAccessUtils -> Utilities for working with SA like endpoint for fetching SA public key <br />

### Examples

#### Creating a consent request initialization:

```
const requestInitialization = await SA.consentFlows.createConsentRequestInitialization({
    consentServiceProviderId: string,
    requestPrincipalId: string,
    requestPrincipalName: string,
    actions: string[],
    resources: string[],
    conditions: string[],
    serviceProviderId: string,
    termsAndConditions: string,
});
```

```
const result = await SA.consentRequests.flowConsentRequestInitialize({
    requestingToken: requestInitialization.token,
});
```

#### Open a consent request initialization ticket

`const openResult = await SA.consentFlows.receiveConsentRequestInitialization(ticket);`

#### Creating a auth ticket

`await SA.consents.createAuthZTicketForConsent(consentId);`

#### Validating a auth ticket

`await SA.policyEnforcement.ticketAudit({ticket: ticket});`

#### Single party consent

```
const consentPayload: SingleProviderConsentDTO = {
  reqPrincipalName: "Service name",
  reqPrincipalId: "Service ID,
  consPrincipalName: userName,
  // The consenting principal is the users id that the service can use to find consents for the user
  consPrincipalId: userId,
  actions: SA.consentFlows.getEncodedActionStrings([]),
  resources: SA.consentFlows.getEncodedResourceStrings([]),
  conditions: []
}

// ID of the created consent request will be returned so that the complete request and consent can be fetched
const consentRequestId = await SA.consents.singleProviderConsent(consentPayload);
```
