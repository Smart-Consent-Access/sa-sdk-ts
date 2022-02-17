// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { ApiErrorDTO } from '../models/ApiErrorDTO';
import { ApprovalDoneUrlDTO } from '../models/ApprovalDoneUrlDTO';
import { AuthTicketDTO } from '../models/AuthTicketDTO';
import { ConsentApprovalFinalizeBody } from '../models/ConsentApprovalFinalizeBody';
import { ConsentApprovalInitializeBody } from '../models/ConsentApprovalInitializeBody';
import { ConsentDTO } from '../models/ConsentDTO';
import { ValidationErrorDTO } from '../models/ValidationErrorDTO';

/**
 * no description
 */
export class ConsentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create an authorization ticket for the given consent This ticket can be used against the consenting service provider for further integration to prove that the calling service provider is authorized
     * @param consentId The consent id in UUID format
     */
    public async createAuthZTicketForConsent(consentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError('Required parameter consentId was null or undefined when calling createAuthZTicketForConsent.');
        }


        // Path Params
        const localVarPath = '/consents/{consentId}/ticket'
            .replace('{' + 'consentId' + '}', encodeURIComponent(String(consentId)));

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
     * Finalize a consent approval as the requesting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param consentApprovalFinalizeBody The signed jwt with payload of type AHConsApprovalFinalizeSp1ToAhJWT
     */
    public async flowConsentApprovalFinalize(consentApprovalFinalizeBody: ConsentApprovalFinalizeBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentApprovalFinalizeBody' is not null or undefined
        if (consentApprovalFinalizeBody === null || consentApprovalFinalizeBody === undefined) {
            throw new RequiredError('Required parameter consentApprovalFinalizeBody was null or undefined when calling flowConsentApprovalFinalize.');
        }


        // Path Params
        const localVarPath = '/consents/flow_consent_approval_finalize';

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
            ObjectSerializer.serialize(consentApprovalFinalizeBody, "ConsentApprovalFinalizeBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Initialize a consent approval as the consenting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider
     * @param consentApprovalInitializeBody The signed jwt with payload of type AHConsApprovalInitializeSp2ToAhJWT
     */
    public async flowConsentApprovalInitialize(consentApprovalInitializeBody: ConsentApprovalInitializeBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentApprovalInitializeBody' is not null or undefined
        if (consentApprovalInitializeBody === null || consentApprovalInitializeBody === undefined) {
            throw new RequiredError('Required parameter consentApprovalInitializeBody was null or undefined when calling flowConsentApprovalInitialize.');
        }


        // Path Params
        const localVarPath = '/consents/flow_consent_approval_initialize';

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
            ObjectSerializer.serialize(consentApprovalInitializeBody, "ConsentApprovalInitializeBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        // Apply auth methods

        return requestContext;
    }

    /**
     * Fetch information about the given consent
     * @param consentId The consent id in UUID format
     */
    public async getConsent(consentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'consentId' is not null or undefined
        if (consentId === null || consentId === undefined) {
            throw new RequiredError('Required parameter consentId was null or undefined when calling getConsent.');
        }


        // Path Params
        const localVarPath = '/consents/{consentId}'
            .replace('{' + 'consentId' + '}', encodeURIComponent(String(consentId)));

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

}

export class ConsentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAuthZTicketForConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAuthZTicketForConsent(response: ResponseContext): Promise<AuthTicketDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuthTicketDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthTicketDTO", ""
            ) as AuthTicketDTO;
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
            const body: AuthTicketDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuthTicketDTO", ""
            ) as AuthTicketDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to flowConsentApprovalFinalize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async flowConsentApprovalFinalize(response: ResponseContext): Promise<ApprovalDoneUrlDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalDoneUrlDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalDoneUrlDTO", ""
            ) as ApprovalDoneUrlDTO;
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
            const body: ApprovalDoneUrlDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalDoneUrlDTO", ""
            ) as ApprovalDoneUrlDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to flowConsentApprovalInitialize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async flowConsentApprovalInitialize(response: ResponseContext): Promise<ApprovalDoneUrlDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApprovalDoneUrlDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalDoneUrlDTO", ""
            ) as ApprovalDoneUrlDTO;
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
            const body: ApprovalDoneUrlDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApprovalDoneUrlDTO", ""
            ) as ApprovalDoneUrlDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConsent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConsent(response: ResponseContext): Promise<ConsentDTO > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConsentDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentDTO", ""
            ) as ConsentDTO;
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
            const body: ConsentDTO = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentDTO", ""
            ) as ConsentDTO;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
