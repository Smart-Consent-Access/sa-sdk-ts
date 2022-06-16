# .ConsentRequestsApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteId**](ConsentRequestsApi.md#deleteId) | **DELETE** /consent_requests/{consentRequestId} | 
[**flowConsentRequestFinalize**](ConsentRequestsApi.md#flowConsentRequestFinalize) | **POST** /consent_requests/flow_consent_req_finalize | 
[**flowConsentRequestInitialize**](ConsentRequestsApi.md#flowConsentRequestInitialize) | **POST** /consent_requests/flow_consent_req_initialize | 
[**getConsentRequest**](ConsentRequestsApi.md#getConsentRequest) | **GET** /consent_requests/{consentRequestId} | 
[**getConsentRequests**](ConsentRequestsApi.md#getConsentRequests) | **GET** /consent_requests | 
[**searchConsentRequests**](ConsentRequestsApi.md#searchConsentRequests) | **POST** /consent_requests/search | 


# **deleteId**
> void deleteId()

Soft delete (set to INACTIVE) the given consent request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentRequestsApi(configuration);

let body:.ConsentRequestsApiDeleteIdRequest = {
  // string | The consent request id in UUID format
  consentRequestId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.deleteId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentRequestId** | [**string**] | The consent request id in UUID format | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**401** | Authentication failed |  -  |
**403** | Authorization failed |  -  |
**404** | Resource not found |  -  |
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **flowConsentRequestFinalize**
> ConsentRequestFinalizeUrlDTO flowConsentRequestFinalize(consentRequestFinalizeBody)

Finalize a consent request as the consenting service provider. The information about the consent request is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentRequestsApi(configuration);

let body:.ConsentRequestsApiFlowConsentRequestFinalizeRequest = {
  // ConsentRequestFinalizeBody | The signed jwt with payload of type SAConsReqFinalizeSp2ToSaJWT
  consentRequestFinalizeBody: {
    consReqFinalizeJWT: "z.AMDTMv3D3ylmgd21Z4UB7UkJSISSB623iz3DiJy.12UH1-9-kQEFkLkvyHfCdEAAg9zj5gGu-+shjbE1Eva66tk/LlJwL4CTLxzWhej2zFvhjFRboDzLsp7gf1OAK",
  },
};

apiInstance.flowConsentRequestFinalize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentRequestFinalizeBody** | **ConsentRequestFinalizeBody**| The signed jwt with payload of type SAConsReqFinalizeSp2ToSaJWT |


### Return type

**ConsentRequestFinalizeUrlDTO**

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

# **flowConsentRequestInitialize**
> ConsentRequestUrlDTO flowConsentRequestInitialize(consentRequestTokenBody)

Initialize a consent request as the requesting service provider. The information about the request is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentRequestsApi(configuration);

let body:.ConsentRequestsApiFlowConsentRequestInitializeRequest = {
  // ConsentRequestTokenBody | The signed jwt with payload of type SAConsReqInitializeSp1ToSaJWT
  consentRequestTokenBody: {
    requestingToken: "z.AMDTMv3D3ylmgd21Z4UB7UkJSISSB623iz3DiJy.12UH1-9-kQEFkLkvyHfCdEAAg9zj5gGu-+shjbE1Eva66tk/LlJwL4CTLxzWhej2zFvhjFRboDzLsp7gf1OAK",
  },
};

apiInstance.flowConsentRequestInitialize(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentRequestTokenBody** | **ConsentRequestTokenBody**| The signed jwt with payload of type SAConsReqInitializeSp1ToSaJWT |


### Return type

**ConsentRequestUrlDTO**

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

# **getConsentRequest**
> ConsentRequestSummaryDTO getConsentRequest()

Fetch information about the given consent request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentRequestsApi(configuration);

let body:.ConsentRequestsApiGetConsentRequestRequest = {
  // string | The consent request id in UUID format
  consentRequestId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.getConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentRequestId** | [**string**] | The consent request id in UUID format | defaults to undefined


### Return type

**ConsentRequestSummaryDTO**

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

# **getConsentRequests**
> Array<ConsentRequestSummaryDTO> getConsentRequests()

Fetch information about all consent requests that the caller is either the requester or consenter for

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentRequestsApi(configuration);

let body:.ConsentRequestsApiGetConsentRequestsRequest = {
  // 'for_me' | 'by_me' | Either for_me (consenter) or by_me (requester)
  direction: "for_me",
};

apiInstance.getConsentRequests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **direction** | [**&#39;for_me&#39; | &#39;by_me&#39;**]**Array<&#39;for_me&#39; &#124; &#39;by_me&#39;>** | Either for_me (consenter) or by_me (requester) | defaults to undefined


### Return type

**Array<ConsentRequestSummaryDTO>**

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
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchConsentRequests**
> PaginationResultDTOConsentRequestSearchResultDTO searchConsentRequests(searchConsentRequestsDTO)

Search for consent requests given some search parameters. See SearchConsentRequestsDTO for details on parameters. Will return a list of matching consent requests

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentRequestsApi(configuration);

let body:.ConsentRequestsApiSearchConsentRequestsRequest = {
  // SearchConsentRequestsDTO | The search parameters
  searchConsentRequestsDTO: {
    skip: 3.14,
    take: 3.14,
    searchQuery: "searchQuery_example",
    fields: {
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

apiInstance.searchConsentRequests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchConsentRequestsDTO** | **SearchConsentRequestsDTO**| The search parameters |


### Return type

**PaginationResultDTOConsentRequestSearchResultDTO**

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


