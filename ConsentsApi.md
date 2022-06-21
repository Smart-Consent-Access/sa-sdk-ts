# .ConsentsApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthZTicketForConsent**](ConsentsApi.md#createAuthZTicketForConsent) | **GET** /consents/{consentId}/ticket | 
[**flowConsentApprovalFinalize**](ConsentsApi.md#flowConsentApprovalFinalize) | **POST** /consents/flow_consent_approval_finalize | 
[**flowConsentApprovalInitialize**](ConsentsApi.md#flowConsentApprovalInitialize) | **POST** /consents/flow_consent_approval_initialize | 
[**getConsent**](ConsentsApi.md#getConsent) | **GET** /consents/{consentId} | 
[**searchConsents**](ConsentsApi.md#searchConsents) | **POST** /consents/search | 
[**singleProviderConsent**](ConsentsApi.md#singleProviderConsent) | **POST** /consents/single_provider_consent | 


# **createAuthZTicketForConsent**
> AuthTicketDTO createAuthZTicketForConsent()

Create an authorization ticket for the given consent This ticket can be used against the consenting service provider for further integration to prove that the calling service provider is authorized

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiCreateAuthZTicketForConsentRequest = {
  // string | The consent id in UUID format
  consentId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.createAuthZTicketForConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] | The consent id in UUID format | defaults to undefined


### Return type

**AuthTicketDTO**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Authentication failed |  -  |
**403** | Authorization failed |  -  |
**404** | Resource not found |  -  |
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **flowConsentApprovalFinalize**
> ApprovalDoneUrlDTO flowConsentApprovalFinalize(consentApprovalFinalizeBody)

Finalize a consent approval as the requesting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiFlowConsentApprovalFinalizeRequest = {
  // ConsentApprovalFinalizeBody | The signed jwt with payload of type SAConsApprovalFinalizeSp1ToSaJWT
  consentApprovalFinalizeBody: {
    consApprovalFinalizeJWT: "z.AMDTMv3D3ylmgd21Z4UB7UkJSISSB623iz3DiJy.12UH1-9-kQEFkLkvyHfCdEAAg9zj5gGu-+shjbE1Eva66tk/LlJwL4CTLxzWhej2zFvhjFRboDzLsp7gf1OAK",
  },
};

apiInstance.flowConsentApprovalFinalize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentApprovalFinalizeBody** | **ConsentApprovalFinalizeBody**| The signed jwt with payload of type SAConsApprovalFinalizeSp1ToSaJWT |


### Return type

**ApprovalDoneUrlDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Authentication failed |  -  |
**403** | Authorization failed |  -  |
**404** | Resource not found |  -  |
**422** | Actions, resources or conditions are not valid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **flowConsentApprovalInitialize**
> ApprovalDoneUrlDTO flowConsentApprovalInitialize(consentApprovalInitializeBody)

Initialize a consent approval or rejection as the consenting service provider. The information about the request to approve or reject is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider. A consent request can be approved or rejected by more than one consenting principal (legal entity) by initiating more consents

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiFlowConsentApprovalInitializeRequest = {
  // ConsentApprovalInitializeBody | The signed jwt with payload of type SAConsApprovalInitializeSp2ToSaJWT
  consentApprovalInitializeBody: {
    approvalToken: "z.AMDTMv3D3ylmgd21Z4UB7UkJSISSB623iz3DiJy.12UH1-9-kQEFkLkvyHfCdEAAg9zj5gGu-+shjbE1Eva66tk/LlJwL4CTLxzWhej2zFvhjFRboDzLsp7gf1OAK",
  },
};

apiInstance.flowConsentApprovalInitialize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentApprovalInitializeBody** | **ConsentApprovalInitializeBody**| The signed jwt with payload of type SAConsApprovalInitializeSp2ToSaJWT |


### Return type

**ApprovalDoneUrlDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Authentication failed |  -  |
**403** | Authorization failed |  -  |
**404** | Resource not found |  -  |
**422** | Actions, resources or conditions are not valid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getConsent**
> ConsentDTO getConsent()

Fetch information about the given consent

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiGetConsentRequest = {
  // string | The consent id in UUID format
  consentId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.getConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] | The consent id in UUID format | defaults to undefined


### Return type

**ConsentDTO**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Authentication failed |  -  |
**403** | Authorization failed |  -  |
**404** | Resource not found |  -  |
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchConsents**
> PaginationResultDTOConsentSearchResultDTO searchConsents(searchConsentsDTO)

Search for consents (approvals) given some search parameters. See SearchConsentsDTO for details on parameters. Will return a list of matching consents

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiSearchConsentsRequest = {
  // SearchConsentsDTO | The search parameters
  searchConsentsDTO: {
    skip: 3.14,
    take: 3.14,
    searchQuery: "searchQuery_example",
    fields: {
      consentRequestId: "consentRequestId_example",
      stopCreatedAt: "stopCreatedAt_example",
      startCreatedAt: "startCreatedAt_example",
      status: "status_example",
      consServiceProviderId: "consServiceProviderId_example",
      reqServiceProviderId: "reqServiceProviderId_example",
    },
    sort: {
      status: "asc",
      updatedAt: "asc",
      createdAt: "asc",
    },
  },
};

apiInstance.searchConsents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchConsentsDTO** | **SearchConsentsDTO**| The search parameters |


### Return type

**PaginationResultDTOConsentSearchResultDTO**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Authentication failed |  -  |
**403** | Authorization failed |  -  |
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **singleProviderConsent**
> string singleProviderConsent(singleProviderConsentDTO)

Create a single provider consent. This is a complete consent approval for some action, resources and conditions, with your own serviceprovider as both requester and consenter

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiSingleProviderConsentRequest = {
  // SingleProviderConsentDTO | Info about the consent to create
  singleProviderConsentDTO: {
    reqPrincipalName: "reqPrincipalName_example",
    reqPrincipalId: "reqPrincipalId_example",
    consPrincipalName: "consPrincipalName_example",
    consPrincipalId: "consPrincipalId_example",
    actions: [
      "actions_example",
    ],
    resources: [
      "resources_example",
    ],
    conditions: [
      "conditions_example",
    ],
    termsAndConditions: "termsAndConditions_example",
    consentedAt: 3.14,
  },
};

apiInstance.singleProviderConsent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **singleProviderConsentDTO** | **SingleProviderConsentDTO**| Info about the consent to create |


### Return type

**string**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | id of the created consent request |  -  |
**401** | Authentication failed |  -  |
**403** | Authorization failed |  -  |
**404** | Resource not found |  -  |
**422** | Actions, resources or conditions are not valid |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


