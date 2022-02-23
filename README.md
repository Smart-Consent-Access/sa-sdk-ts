# Smart Access SDK for Typescript

##  Install

`npm install @smart-consent-access/sa-sdk-ts`

`import SmartAccess from "@smart-consent-access/sa-sdk-ts"`

## Usage

Create a .env with the following information: 

```
SA_SERVICE_PROVIDER_PRIVATE_KEY_PATH="path_to_private_key.pem"
SA_PUBLIC_KEY_PATH="path_to_public_key.pem"
SA_BASE_URL_API="https://ao.sandbox.smartconsent.se/api/v1"
SA_BASE_URL_WEB="https://ao.sandbox.smartconsent.se"
SA_SERVICE_PROVIDER_ID="your_service_provider_id"
```

`const SA = new SmartAccess()`

### Classes

SA.policyEnforcement -> functions for validation and policy enforcement

SA.consentSearch -> help function for searching for consents and consent requests

SA.consentFlows ->  creates and opens consent requests and consent JWTs

SA.serviceProviders -> SA endpoints for service provider

SA.consentRequests -> SA endpoints for consentRequests

SA.consents -> SA endpoints for consents

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
