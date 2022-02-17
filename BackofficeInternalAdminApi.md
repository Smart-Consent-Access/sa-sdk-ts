# .BackofficeInternalAdminApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteConsentRequest**](BackofficeInternalAdminApi.md#deleteConsentRequest) | **DELETE** /backoffice/consent_requests/{consentRequestId} | 
[**deleteServiceProvider**](BackofficeInternalAdminApi.md#deleteServiceProvider) | **DELETE** /backoffice/serviceproviders/{serviceProviderId} | 
[**getAllConsentRequests**](BackofficeInternalAdminApi.md#getAllConsentRequests) | **GET** /backoffice/consent_requests | 
[**getAllConsents**](BackofficeInternalAdminApi.md#getAllConsents) | **GET** /backoffice/consents | 
[**getAllServiceProviders**](BackofficeInternalAdminApi.md#getAllServiceProviders) | **GET** /backoffice/serviceproviders | 
[**getDebug**](BackofficeInternalAdminApi.md#getDebug) | **GET** /backoffice/debug | 
[**patchServiceProviders**](BackofficeInternalAdminApi.md#patchServiceProviders) | **PATCH** /backoffice/serviceproviders/{serviceProviderId} | 
[**postServiceProviders**](BackofficeInternalAdminApi.md#postServiceProviders) | **POST** /backoffice/serviceproviders | 


# **deleteConsentRequest**
> void deleteConsentRequest()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackofficeInternalAdminApi(configuration);

let body:.BackofficeInternalAdminApiDeleteConsentRequestRequest = {
  // string
  consentRequestId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.deleteConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentRequestId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteServiceProvider**
> void deleteServiceProvider()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackofficeInternalAdminApi(configuration);

let body:.BackofficeInternalAdminApiDeleteServiceProviderRequest = {
  // string
  serviceProviderId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.deleteServiceProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceProviderId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllConsentRequests**
> Array<ConsentRequestSummaryDTO> getAllConsentRequests()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackofficeInternalAdminApi(configuration);

let body:any = {};

apiInstance.getAllConsentRequests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ConsentRequestSummaryDTO>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllConsents**
> Array<ConsentDTO> getAllConsents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackofficeInternalAdminApi(configuration);

let body:any = {};

apiInstance.getAllConsents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ConsentDTO>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllServiceProviders**
> Array<ServiceProviderDTO> getAllServiceProviders()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackofficeInternalAdminApi(configuration);

let body:any = {};

apiInstance.getAllServiceProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ServiceProviderDTO>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDebug**
> DebugDTO getDebug()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackofficeInternalAdminApi(configuration);

let body:any = {};

apiInstance.getDebug(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**DebugDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchServiceProviders**
> ServiceProviderDTO patchServiceProviders(serviceProviderPatchDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackofficeInternalAdminApi(configuration);

let body:.BackofficeInternalAdminApiPatchServiceProvidersRequest = {
  // string
  serviceProviderId: "19fa2355-70f0-428d-8ee3-601773d50728",
  // ServiceProviderPatchDTO
  serviceProviderPatchDTO: {
    id: "id_example",
    name: "name_example",
    iconUrl: "iconUrl_example",
    publicKey: "publicKey_example",
    initiateConsentRequestUrl: "initiateConsentRequestUrl_example",
    finalizeConsentRequestUrl: "finalizeConsentRequestUrl_example",
    initiateConsentUrl: "initiateConsentUrl_example",
    finalizeConsentUrl: "finalizeConsentUrl_example",
  },
};

apiInstance.patchServiceProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceProviderPatchDTO** | **ServiceProviderPatchDTO**|  |
 **serviceProviderId** | [**string**] |  | defaults to undefined


### Return type

**ServiceProviderDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postServiceProviders**
> ServiceProviderDTO postServiceProviders(serviceProviderDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BackofficeInternalAdminApi(configuration);

let body:.BackofficeInternalAdminApiPostServiceProvidersRequest = {
  // ServiceProviderDTO
  serviceProviderDTO: {
    id: "id_example",
    name: "name_example",
    iconUrl: "iconUrl_example",
    publicKey: "publicKey_example",
    initiateConsentRequestUrl: "initiateConsentRequestUrl_example",
    finalizeConsentRequestUrl: "finalizeConsentRequestUrl_example",
    initiateConsentUrl: "initiateConsentUrl_example",
    finalizeConsentUrl: "finalizeConsentUrl_example",
  },
};

apiInstance.postServiceProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceProviderDTO** | **ServiceProviderDTO**|  |


### Return type

**ServiceProviderDTO**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


