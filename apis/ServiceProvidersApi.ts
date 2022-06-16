// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ApiErrorDTO } from '../models/ApiErrorDTO';
import { ServiceProviderDTO } from '../models/ServiceProviderDTO';
import { ServiceProviderPatchDTO } from '../models/ServiceProviderPatchDTO';
import { ValidationErrorDTO } from '../models/ValidationErrorDTO';

/**
 * no description
 */
export class ServiceProvidersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Soft deletes (set to INACTIVE) a service provider
     * @param serviceProviderId The service provider id in UUID format
     */
    public async deleteServiceProvider(serviceProviderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'serviceProviderId' is not null or undefined
        if (serviceProviderId === null || serviceProviderId === undefined) {
            throw new RequiredError('Required parameter serviceProviderId was null or undefined when calling deleteServiceProvider.');
        }


        // Path Params
        const localVarPath = '/serviceproviders/{serviceProviderId}'
            .replace('{' + 'serviceProviderId' + '}', encodeURIComponent(String(serviceProviderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Fetch information about the given service provider
     * @param id The service provider id in UUID format
     */
    public async getServiceProvider(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getServiceProvider.');
        }


        // Path Params
        const localVarPath = '/serviceproviders/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates a service provider with new data. Only updates explicitly set new values, rest is left as is
     * @param serviceProviderId The service provider id in UUID format
     * @param serviceProviderPatchDTO 
     */
    public async patchServiceProviders(serviceProviderId: string, serviceProviderPatchDTO: ServiceProviderPatchDTO, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'serviceProviderId' is not null or undefined
        if (serviceProviderId === null || serviceProviderId === undefined) {
            throw new RequiredError('Required parameter serviceProviderId was null or undefined when calling patchServiceProviders.');
        }


        // verify required parameter 'serviceProviderPatchDTO' is not null or undefined
        if (serviceProviderPatchDTO === null || serviceProviderPatchDTO === undefined) {
            throw new RequiredError('Required parameter serviceProviderPatchDTO was null or undefined when calling patchServiceProviders.');
        }


        // Path Params
        const localVarPath = '/serviceproviders/{serviceProviderId}'
            .replace('{' + 'serviceProviderId' + '}', encodeURIComponent(String(serviceProviderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(serviceProviderPatchDTO, "ServiceProviderPatchDTO", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new service provider in SA
     * @param serviceProviderDTO 
     */
    public async postServiceProviders(serviceProviderDTO: ServiceProviderDTO, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'serviceProviderDTO' is not null or undefined
        if (serviceProviderDTO === null || serviceProviderDTO === undefined) {
            throw new RequiredError('Required parameter serviceProviderDTO was null or undefined when calling postServiceProviders.');
        }


        // Path Params
        const localVarPath = '/serviceproviders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(serviceProviderDTO, "ServiceProviderDTO", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ServiceProvidersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteServiceProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteServiceProvider(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(401, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(404, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ValidationErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorDTO", ""
            ) as ValidationErrorDTO;
            throw new ApiException<ValidationErrorDTO>(422, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceProvider
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceProvider(response: ResponseContext): Promise<ServiceProviderDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServiceProviderDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceProviderDTO", ""
            ) as ServiceProviderDTO;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(401, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(404, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ValidationErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorDTO", ""
            ) as ValidationErrorDTO;
            throw new ApiException<ValidationErrorDTO>(422, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServiceProviderDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceProviderDTO", ""
            ) as ServiceProviderDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchServiceProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchServiceProviders(response: ResponseContext): Promise<ServiceProviderDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServiceProviderDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceProviderDTO", ""
            ) as ServiceProviderDTO;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(401, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(404, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ValidationErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorDTO", ""
            ) as ValidationErrorDTO;
            throw new ApiException<ValidationErrorDTO>(422, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServiceProviderDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceProviderDTO", ""
            ) as ServiceProviderDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postServiceProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postServiceProviders(response: ResponseContext): Promise<ServiceProviderDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ServiceProviderDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceProviderDTO", ""
            ) as ServiceProviderDTO;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(401, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(404, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ValidationErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValidationErrorDTO", ""
            ) as ValidationErrorDTO;
            throw new ApiException<ValidationErrorDTO>(422, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ServiceProviderDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ServiceProviderDTO", ""
            ) as ServiceProviderDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
