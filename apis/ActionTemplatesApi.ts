// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ActionTemplateDTO } from '../models/ActionTemplateDTO';
import { ApiErrorDTO } from '../models/ApiErrorDTO';
import { CreateActionTemplateDTO } from '../models/CreateActionTemplateDTO';
import { ValidationErrorDTO } from '../models/ValidationErrorDTO';

/**
 * no description
 */
export class ActionTemplatesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Deletes a action template
     * @param actionTemplateId The action template id in UUID format
     */
    public async deleteActionTemplate(actionTemplateId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'actionTemplateId' is not null or undefined
        if (actionTemplateId === null || actionTemplateId === undefined) {
            throw new RequiredError('Required parameter actionTemplateId was null or undefined when calling deleteActionTemplate.');
        }


        // Path Params
        const localVarPath = '/actiontemplates/{actionTemplateId}'
            .replace('{' + 'actionTemplateId' + '}', encodeURIComponent(String(actionTemplateId)));

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
     * Fetch all action template hierarchy's on the given service provider
     * @param serviceProviderId The service provider id in UUID format
     */
    public async getAllActionTemplatesForSP(serviceProviderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'serviceProviderId' is not null or undefined
        if (serviceProviderId === null || serviceProviderId === undefined) {
            throw new RequiredError('Required parameter serviceProviderId was null or undefined when calling getAllActionTemplatesForSP.');
        }


        // Path Params
        const localVarPath = '/actiontemplates/serviceproviderid/{serviceProviderId}'
            .replace('{' + 'serviceProviderId' + '}', encodeURIComponent(String(serviceProviderId)));

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
     * Fetch the action template matching the ID
     * @param actionTemplateId The action template id in UUID format
     */
    public async getOneActionTemplateById(actionTemplateId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'actionTemplateId' is not null or undefined
        if (actionTemplateId === null || actionTemplateId === undefined) {
            throw new RequiredError('Required parameter actionTemplateId was null or undefined when calling getOneActionTemplateById.');
        }


        // Path Params
        const localVarPath = '/actiontemplates/id/{actionTemplateId}'
            .replace('{' + 'actionTemplateId' + '}', encodeURIComponent(String(actionTemplateId)));

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
     * Creates a new action template hierarchy on a service provider
     * @param createActionTemplateDTO 
     */
    public async postActionTemplate(createActionTemplateDTO: CreateActionTemplateDTO, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createActionTemplateDTO' is not null or undefined
        if (createActionTemplateDTO === null || createActionTemplateDTO === undefined) {
            throw new RequiredError('Required parameter createActionTemplateDTO was null or undefined when calling postActionTemplate.');
        }


        // Path Params
        const localVarPath = '/actiontemplates';

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
            ObjectSerializer.serialize(createActionTemplateDTO, "CreateActionTemplateDTO", ""),
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
     * Updates a existing action template by replacing it with a new version
     * @param actionTemplateId The action template id in UUID format
     * @param createActionTemplateDTO 
     */
    public async updateActionTemplate(actionTemplateId: string, createActionTemplateDTO: CreateActionTemplateDTO, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'actionTemplateId' is not null or undefined
        if (actionTemplateId === null || actionTemplateId === undefined) {
            throw new RequiredError('Required parameter actionTemplateId was null or undefined when calling updateActionTemplate.');
        }


        // verify required parameter 'createActionTemplateDTO' is not null or undefined
        if (createActionTemplateDTO === null || createActionTemplateDTO === undefined) {
            throw new RequiredError('Required parameter createActionTemplateDTO was null or undefined when calling updateActionTemplate.');
        }


        // Path Params
        const localVarPath = '/actiontemplates/{actionTemplateId}'
            .replace('{' + 'actionTemplateId' + '}', encodeURIComponent(String(actionTemplateId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
            ObjectSerializer.serialize(createActionTemplateDTO, "CreateActionTemplateDTO", ""),
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

export class ActionTemplatesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteActionTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteActionTemplate(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getAllActionTemplatesForSP
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllActionTemplatesForSP(response: ResponseContext): Promise<Array<ActionTemplateDTO> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ActionTemplateDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ActionTemplateDTO>", ""
            ) as Array<ActionTemplateDTO>;
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
            const body: Array<ActionTemplateDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ActionTemplateDTO>", ""
            ) as Array<ActionTemplateDTO>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOneActionTemplateById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOneActionTemplateById(response: ResponseContext): Promise<ActionTemplateDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionTemplateDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionTemplateDTO", ""
            ) as ActionTemplateDTO;
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
            const body: ActionTemplateDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionTemplateDTO", ""
            ) as ActionTemplateDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postActionTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postActionTemplate(response: ResponseContext): Promise<ActionTemplateDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionTemplateDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionTemplateDTO", ""
            ) as ActionTemplateDTO;
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
            const body: ActionTemplateDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionTemplateDTO", ""
            ) as ActionTemplateDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateActionTemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateActionTemplate(response: ResponseContext): Promise<ActionTemplateDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActionTemplateDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionTemplateDTO", ""
            ) as ActionTemplateDTO;
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
            const body: ActionTemplateDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActionTemplateDTO", ""
            ) as ActionTemplateDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
