# .ConsentsApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthZTicketForConsent**](ConsentsApi.md#createAuthZTicketForConsent) | **GET** /consents/{consentId}/ticket | 
[**flowConsentApprovalFinalize**](ConsentsApi.md#flowConsentApprovalFinalize) | **POST** /consents/flow_consent_approval_finalize | 
[**flowConsentApprovalInitialize**](ConsentsApi.md#flowConsentApprovalInitialize) | **POST** /consents/flow_consent_approval_initialize | 
[**getConsent**](ConsentsApi.md#getConsent) | **GET** /consents/{consentId} | 


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
  // ConsentApprovalFinalizeBody | The signed jwt with payload of type AHConsApprovalFinalizeSp1ToAhJWT
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
 **consentApprovalFinalizeBody** | **ConsentApprovalFinalizeBody**| The signed jwt with payload of type AHConsApprovalFinalizeSp1ToAhJWT |


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
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **flowConsentApprovalInitialize**
> ApprovalDoneUrlDTO flowConsentApprovalInitialize(consentApprovalInitializeBody)

Initialize a consent approval as the consenting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConsentsApi(configuration);

let body:.ConsentsApiFlowConsentApprovalInitializeRequest = {
  // ConsentApprovalInitializeBody | The signed jwt with payload of type AHConsApprovalInitializeSp2ToAhJWT
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
 **consentApprovalInitializeBody** | **ConsentApprovalInitializeBody**| The signed jwt with payload of type AHConsApprovalInitializeSp2ToAhJWT |


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
**422** | Validation failed |  -  |

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


