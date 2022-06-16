# .ServiceProvidersApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteServiceProvider**](ServiceProvidersApi.md#deleteServiceProvider) | **DELETE** /serviceproviders/{serviceProviderId} | 
[**getServiceProvider**](ServiceProvidersApi.md#getServiceProvider) | **GET** /serviceproviders/{id} | 
[**patchServiceProviders**](ServiceProvidersApi.md#patchServiceProviders) | **PATCH** /serviceproviders/{serviceProviderId} | 
[**postServiceProviders**](ServiceProvidersApi.md#postServiceProviders) | **POST** /serviceproviders | 


# **deleteServiceProvider**
> void deleteServiceProvider()

Soft deletes (set to INACTIVE) a service provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServiceProvidersApi(configuration);

let body:.ServiceProvidersApiDeleteServiceProviderRequest = {
  // string | The service provider id in UUID format
  serviceProviderId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.deleteServiceProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceProviderId** | [**string**] | The service provider id in UUID format | defaults to undefined


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
**404** | Resource not found |  -  |
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getServiceProvider**
> ServiceProviderDTO getServiceProvider()

Fetch information about the given service provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServiceProvidersApi(configuration);

let body:.ServiceProvidersApiGetServiceProviderRequest = {
  // string | The service provider id in UUID format
  id: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.getServiceProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The service provider id in UUID format | defaults to undefined


### Return type

**ServiceProviderDTO**

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
**404** | Resource not found |  -  |
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchServiceProviders**
> ServiceProviderDTO patchServiceProviders(serviceProviderPatchDTO)

Updates a service provider with new data. Only updates explicitly set new values, rest is left as is

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServiceProvidersApi(configuration);

let body:.ServiceProvidersApiPatchServiceProvidersRequest = {
  // string | The service provider id in UUID format
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
    allowUndefinedActions: true,
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
 **serviceProviderId** | [**string**] | The service provider id in UUID format | defaults to undefined


### Return type

**ServiceProviderDTO**

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
**404** | Resource not found |  -  |
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postServiceProviders**
> ServiceProviderDTO postServiceProviders(serviceProviderDTO)

Creates a new service provider in SA

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ServiceProvidersApi(configuration);

let body:.ServiceProvidersApiPostServiceProvidersRequest = {
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
    allowUndefinedActions: true,
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

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Authentication failed |  -  |
**404** | Resource not found |  -  |
**422** | Validation failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


