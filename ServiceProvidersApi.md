# .ServiceProvidersApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServiceProvider**](ServiceProvidersApi.md#getServiceProvider) | **GET** /serviceproviders/{id} | 


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


