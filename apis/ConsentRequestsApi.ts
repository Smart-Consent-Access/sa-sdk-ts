// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ApiErrorDTO } from '../models/ApiErrorDTO';
import { ConsentRequestFinalizeBody } from '../models/ConsentRequestFinalizeBody';
import { ConsentRequestFinalizeUrlDTO } from '../models/ConsentRequestFinalizeUrlDTO';
import { ConsentRequestSummaryDTO } from '../models/ConsentRequestSummaryDTO';
import { ConsentRequestTokenBody } from '../models/ConsentRequestTokenBody';
import { ConsentRequestUrlDTO } from '../models/ConsentRequestUrlDTO';
import { ValidationErrorDTO } from '../models/ValidationErrorDTO';

/**
 * no description
 */
export class ConsentRequestsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Soft delete (set to INACTIVE) the given consent request
     * @param consentRequestId The consent request id in UUID format
     */
    public async deleteId(consentRequestId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestId' is not null or undefined
        if (consentRequestId === null || consentRequestId === undefined) {
            throw new RequiredError('Required parameter consentRequestId was null or undefined when calling deleteId.');
        }


        // Path Params
        const localVarPath = '/consent_requests/{consentRequestId}'
            .replace('{' + 'consentRequestId' + '}', encodeURIComponent(String(consentRequestId)));

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
     * Finalize a consent request as the consenting service provider. The information about the consent request is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider
     * @param consentRequestFinalizeBody The signed jwt with payload of type AHConsReqFinalizeSp2ToAhJWT
     */
    public async flowConsentRequestFinalize(consentRequestFinalizeBody: ConsentRequestFinalizeBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestFinalizeBody' is not null or undefined
        if (consentRequestFinalizeBody === null || consentRequestFinalizeBody === undefined) {
            throw new RequiredError('Required parameter consentRequestFinalizeBody was null or undefined when calling flowConsentRequestFinalize.');
        }


        // Path Params
        const localVarPath = '/consent_requests/flow_consent_req_finalize';

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
            ObjectSerializer.serialize(consentRequestFinalizeBody, "ConsentRequestFinalizeBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Initialize a consent request as the requesting service provider. The information about the request is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param consentRequestTokenBody The signed jwt with payload of type AHConsReqInitializeSp1ToAhJWT
     */
    public async flowConsentRequestInitialize(consentRequestTokenBody: ConsentRequestTokenBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestTokenBody' is not null or undefined
        if (consentRequestTokenBody === null || consentRequestTokenBody === undefined) {
            throw new RequiredError('Required parameter consentRequestTokenBody was null or undefined when calling flowConsentRequestInitialize.');
        }


        // Path Params
        const localVarPath = '/consent_requests/flow_consent_req_initialize';

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
            ObjectSerializer.serialize(consentRequestTokenBody, "ConsentRequestTokenBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Fetch information about the given consent request
     * @param consentRequestId The consent request id in UUID format
     */
    public async getConsentRequest(consentRequestId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentRequestId' is not null or undefined
        if (consentRequestId === null || consentRequestId === undefined) {
            throw new RequiredError('Required parameter consentRequestId was null or undefined when calling getConsentRequest.');
        }


        // Path Params
        const localVarPath = '/consent_requests/{consentRequestId}'
            .replace('{' + 'consentRequestId' + '}', encodeURIComponent(String(consentRequestId)));

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
     * Fetch information about all consent requests that the caller is either the requester or consenter for
     * @param direction Either for_me (consenter) or by_me (requester)
     */
    public async getConsentRequests(direction: 'for_me' | 'by_me', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'direction' is not null or undefined
        if (direction === null || direction === undefined) {
            throw new RequiredError('Required parameter direction was null or undefined when calling getConsentRequests.');
        }


        // Path Params
        const localVarPath = '/consent_requests';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (direction !== undefined) {
            requestContext.setQueryParam("direction", ObjectSerializer.serialize(direction, "'for_me' | 'by_me'", ""));
        }

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

}

export class ConsentRequestsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteId(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to flowConsentRequestFinalize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async flowConsentRequestFinalize(response: ResponseContext): Promise<ConsentRequestFinalizeUrlDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConsentRequestFinalizeUrlDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentRequestFinalizeUrlDTO", ""
            ) as ConsentRequestFinalizeUrlDTO;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(403, body);
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
            const body: ConsentRequestFinalizeUrlDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentRequestFinalizeUrlDTO", ""
            ) as ConsentRequestFinalizeUrlDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to flowConsentRequestInitialize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async flowConsentRequestInitialize(response: ResponseContext): Promise<ConsentRequestUrlDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConsentRequestUrlDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentRequestUrlDTO", ""
            ) as ConsentRequestUrlDTO;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(403, body);
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
            const body: ConsentRequestUrlDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentRequestUrlDTO", ""
            ) as ConsentRequestUrlDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConsentRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConsentRequest(response: ResponseContext): Promise<ConsentRequestSummaryDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConsentRequestSummaryDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentRequestSummaryDTO", ""
            ) as ConsentRequestSummaryDTO;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(403, body);
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
            const body: ConsentRequestSummaryDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentRequestSummaryDTO", ""
            ) as ConsentRequestSummaryDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConsentRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConsentRequests(response: ResponseContext): Promise<Array<ConsentRequestSummaryDTO> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ConsentRequestSummaryDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConsentRequestSummaryDTO>", ""
            ) as Array<ConsentRequestSummaryDTO>;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: ApiErrorDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiErrorDTO", ""
            ) as ApiErrorDTO;
            throw new ApiException<ApiErrorDTO>(401, body);
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
            const body: Array<ConsentRequestSummaryDTO> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ConsentRequestSummaryDTO>", ""
            ) as Array<ConsentRequestSummaryDTO>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
