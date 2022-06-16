# .ActionTemplatesApi

All URIs are relative to *http://localhost/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteActionTemplate**](ActionTemplatesApi.md#deleteActionTemplate) | **DELETE** /actiontemplates/{actionTemplateId} | 
[**getAllActionTemplatesForSP**](ActionTemplatesApi.md#getAllActionTemplatesForSP) | **GET** /actiontemplates/serviceproviderid/{serviceProviderId} | 
[**getOneActionTemplateById**](ActionTemplatesApi.md#getOneActionTemplateById) | **GET** /actiontemplates/id/{actionTemplateId} | 
[**postActionTemplate**](ActionTemplatesApi.md#postActionTemplate) | **POST** /actiontemplates | 
[**updateActionTemplate**](ActionTemplatesApi.md#updateActionTemplate) | **PUT** /actiontemplates/{actionTemplateId} | 


# **deleteActionTemplate**
> void deleteActionTemplate()

Deletes a action template

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionTemplatesApi(configuration);

let body:.ActionTemplatesApiDeleteActionTemplateRequest = {
  // string | The action template id in UUID format
  actionTemplateId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.deleteActionTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionTemplateId** | [**string**] | The action template id in UUID format | defaults to undefined


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

# **getAllActionTemplatesForSP**
> Array<ActionTemplateDTO> getAllActionTemplatesForSP()

Fetch all action template hierarchy's on the given service provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionTemplatesApi(configuration);

let body:.ActionTemplatesApiGetAllActionTemplatesForSPRequest = {
  // string | The service provider id in UUID format
  serviceProviderId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.getAllActionTemplatesForSP(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceProviderId** | [**string**] | The service provider id in UUID format | defaults to undefined


### Return type

**Array<ActionTemplateDTO>**

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

# **getOneActionTemplateById**
> ActionTemplateDTO getOneActionTemplateById()

Fetch the action template matching the ID

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionTemplatesApi(configuration);

let body:.ActionTemplatesApiGetOneActionTemplateByIdRequest = {
  // string | The action template id in UUID format
  actionTemplateId: "19fa2355-70f0-428d-8ee3-601773d50728",
};

apiInstance.getOneActionTemplateById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionTemplateId** | [**string**] | The action template id in UUID format | defaults to undefined


### Return type

**ActionTemplateDTO**

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

# **postActionTemplate**
> ActionTemplateDTO postActionTemplate(createActionTemplateDTO)

Creates a new action template hierarchy on a service provider

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionTemplatesApi(configuration);

let body:.ActionTemplatesApiPostActionTemplateRequest = {
  // CreateActionTemplateDTO
  createActionTemplateDTO: {
    id: "id_example",
    version: 3.14,
    serviceProviderId: "serviceProviderId_example",
    name: "name_example",
    description: "description_example",
    tenantName: "tenantName_example",
    systemName: "systemName_example",
    resourceTemplates: [
      {
        id: "id_example",
        policyActionTemplateId: "policyActionTemplateId_example",
        tenantName: "tenantName_example",
        systemName: "systemName_example",
        resourceTagTemplates: [
          {
            id: "id_example",
            policyResourceTemplateId: "policyResourceTemplateId_example",
            name: "name_example",
            validationType: "validationType_example",
            validationParams: "validationParams_example",
            ordno: 3.14,
            pii: true,
            e2eEncrypted: true,
          },
        ],
      },
    ],
    conditionTemplates: [
      {
        id: "id_example",
        policyActionTemplateId: "policyActionTemplateId_example",
        name: "name_example",
        tenantName: "tenantName_example",
        systemName: "systemName_example",
        validationType: "validationType_example",
        validationParams: "validationParams_example",
        pii: true,
        e2eEncrypted: true,
      },
    ],
  },
};

apiInstance.postActionTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createActionTemplateDTO** | **CreateActionTemplateDTO**|  |


### Return type

**ActionTemplateDTO**

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

# **updateActionTemplate**
> ActionTemplateDTO updateActionTemplate(createActionTemplateDTO)

Updates a existing action template by replacing it with a new version

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionTemplatesApi(configuration);

let body:.ActionTemplatesApiUpdateActionTemplateRequest = {
  // string | The action template id in UUID format
  actionTemplateId: "19fa2355-70f0-428d-8ee3-601773d50728",
  // CreateActionTemplateDTO
  createActionTemplateDTO: {
    id: "id_example",
    version: 3.14,
    serviceProviderId: "serviceProviderId_example",
    name: "name_example",
    description: "description_example",
    tenantName: "tenantName_example",
    systemName: "systemName_example",
    resourceTemplates: [
      {
        id: "id_example",
        policyActionTemplateId: "policyActionTemplateId_example",
        tenantName: "tenantName_example",
        systemName: "systemName_example",
        resourceTagTemplates: [
          {
            id: "id_example",
            policyResourceTemplateId: "policyResourceTemplateId_example",
            name: "name_example",
            validationType: "validationType_example",
            validationParams: "validationParams_example",
            ordno: 3.14,
            pii: true,
            e2eEncrypted: true,
          },
        ],
      },
    ],
    conditionTemplates: [
      {
        id: "id_example",
        policyActionTemplateId: "policyActionTemplateId_example",
        name: "name_example",
        tenantName: "tenantName_example",
        systemName: "systemName_example",
        validationType: "validationType_example",
        validationParams: "validationParams_example",
        pii: true,
        e2eEncrypted: true,
      },
    ],
  },
};

apiInstance.updateActionTemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createActionTemplateDTO** | **CreateActionTemplateDTO**|  |
 **actionTemplateId** | [**string**] | The action template id in UUID format | defaults to undefined


### Return type

**ActionTemplateDTO**

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


