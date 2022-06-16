import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ActionTemplateDTO } from '../models/ActionTemplateDTO';
import { ActionValidationErrorDTO } from '../models/ActionValidationErrorDTO';
import { ApiErrorDTO } from '../models/ApiErrorDTO';
import { ApprovalDoneUrlDTO } from '../models/ApprovalDoneUrlDTO';
import { AuthTicketDTO } from '../models/AuthTicketDTO';
import { ConditionTemplateDTO } from '../models/ConditionTemplateDTO';
import { ConsentApprovalFinalizeBody } from '../models/ConsentApprovalFinalizeBody';
import { ConsentApprovalInitializeBody } from '../models/ConsentApprovalInitializeBody';
import { ConsentDTO } from '../models/ConsentDTO';
import { ConsentRequestFinalizeBody } from '../models/ConsentRequestFinalizeBody';
import { ConsentRequestFinalizeUrlDTO } from '../models/ConsentRequestFinalizeUrlDTO';
import { ConsentRequestSearchResultDTO } from '../models/ConsentRequestSearchResultDTO';
import { ConsentRequestSearchResultDTOConsents } from '../models/ConsentRequestSearchResultDTOConsents';
import { ConsentRequestSummaryDTO } from '../models/ConsentRequestSummaryDTO';
import { ConsentRequestTokenBody } from '../models/ConsentRequestTokenBody';
import { ConsentRequestUrlDTO } from '../models/ConsentRequestUrlDTO';
import { ConsentSearchResultDTO } from '../models/ConsentSearchResultDTO';
import { ConsentSummaryDTO } from '../models/ConsentSummaryDTO';
import { ConsentType } from '../models/ConsentType';
import { CreateActionTemplateDTO } from '../models/CreateActionTemplateDTO';
import { CreateConditionTemplateDTO } from '../models/CreateConditionTemplateDTO';
import { CreateResourceTagTemplateDTO } from '../models/CreateResourceTagTemplateDTO';
import { CreateResourceTemplateDTO } from '../models/CreateResourceTemplateDTO';
import { DebugDTO } from '../models/DebugDTO';
import { DebugDTOExampleKeyPair } from '../models/DebugDTOExampleKeyPair';
import { LegalEntityDTO } from '../models/LegalEntityDTO';
import { LocalizedStringDTO } from '../models/LocalizedStringDTO';
import { PaginationResultDTOConsentRequestSearchResultDTO } from '../models/PaginationResultDTOConsentRequestSearchResultDTO';
import { PaginationResultDTOConsentSearchResultDTO } from '../models/PaginationResultDTOConsentSearchResultDTO';
import { PolicyActionDTO } from '../models/PolicyActionDTO';
import { PolicyConditionDTO } from '../models/PolicyConditionDTO';
import { PolicyDTO } from '../models/PolicyDTO';
import { PolicyResourceDTO } from '../models/PolicyResourceDTO';
import { PolicySummaryDTO } from '../models/PolicySummaryDTO';
import { ResourceTagDTO } from '../models/ResourceTagDTO';
import { ResourceTagTemplateDTO } from '../models/ResourceTagTemplateDTO';
import { ResourceTemplateDTO } from '../models/ResourceTemplateDTO';
import { SearchConsentRequestsDTO } from '../models/SearchConsentRequestsDTO';
import { SearchConsentRequestsDTOFields } from '../models/SearchConsentRequestsDTOFields';
import { SearchConsentsDTO } from '../models/SearchConsentsDTO';
import { SearchConsentsDTOFields } from '../models/SearchConsentsDTOFields';
import { SearchConsentsDTOSort } from '../models/SearchConsentsDTOSort';
import { ServiceProviderDTO } from '../models/ServiceProviderDTO';
import { ServiceProviderPatchDTO } from '../models/ServiceProviderPatchDTO';
import { SingleProviderConsentDTO } from '../models/SingleProviderConsentDTO';
import { ValidationErrorDTO } from '../models/ValidationErrorDTO';
import { ObservableActionTemplatesApi } from './ObservableAPI';

import { ActionTemplatesApiRequestFactory, ActionTemplatesApiResponseProcessor} from "../apis/ActionTemplatesApi";
export class PromiseActionTemplatesApi {
    private api: ObservableActionTemplatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ActionTemplatesApiRequestFactory,
        responseProcessor?: ActionTemplatesApiResponseProcessor
    ) {
        this.api = new ObservableActionTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a action template
     * @param actionTemplateId The action template id in UUID format
     */
    public deleteActionTemplate(actionTemplateId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteActionTemplate(actionTemplateId, _options);
        return result.toPromise();
    }

    /**
     * Fetch all action template hierarchy's on the given service provider
     * @param serviceProviderId The service provider id in UUID format
     */
    public getAllActionTemplatesForSP(serviceProviderId: string, _options?: Configuration): Promise<Array<ActionTemplateDTO>> {
        const result = this.api.getAllActionTemplatesForSP(serviceProviderId, _options);
        return result.toPromise();
    }

    /**
     * Fetch the action template matching the ID
     * @param actionTemplateId The action template id in UUID format
     */
    public getOneActionTemplateById(actionTemplateId: string, _options?: Configuration): Promise<ActionTemplateDTO> {
        const result = this.api.getOneActionTemplateById(actionTemplateId, _options);
        return result.toPromise();
    }

    /**
     * Creates a new action template hierarchy on a service provider
     * @param createActionTemplateDTO 
     */
    public postActionTemplate(createActionTemplateDTO: CreateActionTemplateDTO, _options?: Configuration): Promise<ActionTemplateDTO> {
        const result = this.api.postActionTemplate(createActionTemplateDTO, _options);
        return result.toPromise();
    }

    /**
     * Updates a existing action template by replacing it with a new version
     * @param actionTemplateId The action template id in UUID format
     * @param createActionTemplateDTO 
     */
    public updateActionTemplate(actionTemplateId: string, createActionTemplateDTO: CreateActionTemplateDTO, _options?: Configuration): Promise<ActionTemplateDTO> {
        const result = this.api.updateActionTemplate(actionTemplateId, createActionTemplateDTO, _options);
        return result.toPromise();
    }


}



import { ObservableConsentRequestsApi } from './ObservableAPI';

import { ConsentRequestsApiRequestFactory, ConsentRequestsApiResponseProcessor} from "../apis/ConsentRequestsApi";
export class PromiseConsentRequestsApi {
    private api: ObservableConsentRequestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentRequestsApiRequestFactory,
        responseProcessor?: ConsentRequestsApiResponseProcessor
    ) {
        this.api = new ObservableConsentRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Soft delete (set to INACTIVE) the given consent request
     * @param consentRequestId The consent request id in UUID format
     */
    public deleteId(consentRequestId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteId(consentRequestId, _options);
        return result.toPromise();
    }

    /**
     * Finalize a consent request as the consenting service provider. The information about the consent request is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider
     * @param consentRequestFinalizeBody The signed jwt with payload of type SAConsReqFinalizeSp2ToSaJWT
     */
    public flowConsentRequestFinalize(consentRequestFinalizeBody: ConsentRequestFinalizeBody, _options?: Configuration): Promise<ConsentRequestFinalizeUrlDTO> {
        const result = this.api.flowConsentRequestFinalize(consentRequestFinalizeBody, _options);
        return result.toPromise();
    }

    /**
     * Initialize a consent request as the requesting service provider. The information about the request is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param consentRequestTokenBody The signed jwt with payload of type SAConsReqInitializeSp1ToSaJWT
     */
    public flowConsentRequestInitialize(consentRequestTokenBody: ConsentRequestTokenBody, _options?: Configuration): Promise<ConsentRequestUrlDTO> {
        const result = this.api.flowConsentRequestInitialize(consentRequestTokenBody, _options);
        return result.toPromise();
    }

    /**
     * Fetch information about the given consent request
     * @param consentRequestId The consent request id in UUID format
     */
    public getConsentRequest(consentRequestId: string, _options?: Configuration): Promise<ConsentRequestSummaryDTO> {
        const result = this.api.getConsentRequest(consentRequestId, _options);
        return result.toPromise();
    }

    /**
     * Fetch information about all consent requests that the caller is either the requester or consenter for
     * @param direction Either for_me (consenter) or by_me (requester)
     */
    public getConsentRequests(direction: 'for_me' | 'by_me', _options?: Configuration): Promise<Array<ConsentRequestSummaryDTO>> {
        const result = this.api.getConsentRequests(direction, _options);
        return result.toPromise();
    }

    /**
     * Search for consent requests given some search parameters. See SearchConsentRequestsDTO for details on parameters. Will return a list of matching consent requests
     * @param searchConsentRequestsDTO The search parameters
     */
    public searchConsentRequests(searchConsentRequestsDTO: SearchConsentRequestsDTO, _options?: Configuration): Promise<PaginationResultDTOConsentRequestSearchResultDTO> {
        const result = this.api.searchConsentRequests(searchConsentRequestsDTO, _options);
        return result.toPromise();
    }


}



import { ObservableConsentsApi } from './ObservableAPI';

import { ConsentsApiRequestFactory, ConsentsApiResponseProcessor} from "../apis/ConsentsApi";
export class PromiseConsentsApi {
    private api: ObservableConsentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentsApiRequestFactory,
        responseProcessor?: ConsentsApiResponseProcessor
    ) {
        this.api = new ObservableConsentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an authorization ticket for the given consent This ticket can be used against the consenting service provider for further integration to prove that the calling service provider is authorized
     * @param consentId The consent id in UUID format
     */
    public createAuthZTicketForConsent(consentId: string, _options?: Configuration): Promise<AuthTicketDTO> {
        const result = this.api.createAuthZTicketForConsent(consentId, _options);
        return result.toPromise();
    }

    /**
     * Finalize a consent approval as the requesting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param consentApprovalFinalizeBody The signed jwt with payload of type SAConsApprovalFinalizeSp1ToSaJWT
     */
    public flowConsentApprovalFinalize(consentApprovalFinalizeBody: ConsentApprovalFinalizeBody, _options?: Configuration): Promise<ApprovalDoneUrlDTO> {
        const result = this.api.flowConsentApprovalFinalize(consentApprovalFinalizeBody, _options);
        return result.toPromise();
    }

    /**
     * Initialize a consent approval or rejection as the consenting service provider. The information about the request to approve or reject is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider. A consent request can be approved or rejected by more than one consenting principal (legal entity) by initiating more consents
     * @param consentApprovalInitializeBody The signed jwt with payload of type SAConsApprovalInitializeSp2ToSaJWT
     */
    public flowConsentApprovalInitialize(consentApprovalInitializeBody: ConsentApprovalInitializeBody, _options?: Configuration): Promise<ApprovalDoneUrlDTO> {
        const result = this.api.flowConsentApprovalInitialize(consentApprovalInitializeBody, _options);
        return result.toPromise();
    }

    /**
     * Fetch information about the given consent
     * @param consentId The consent id in UUID format
     */
    public getConsent(consentId: string, _options?: Configuration): Promise<ConsentDTO> {
        const result = this.api.getConsent(consentId, _options);
        return result.toPromise();
    }

    /**
     * Search for consents (approvals) given some search parameters. See SearchConsentsDTO for details on parameters. Will return a list of matching consents
     * @param searchConsentsDTO The search parameters
     */
    public searchConsents(searchConsentsDTO: SearchConsentsDTO, _options?: Configuration): Promise<PaginationResultDTOConsentSearchResultDTO> {
        const result = this.api.searchConsents(searchConsentsDTO, _options);
        return result.toPromise();
    }

    /**
     * Create a single provider consent. This is a complete consent approval for some action, resources and conditions, with your own serviceprovider as both requester and consenter
     * @param singleProviderConsentDTO Info about the consent to create
     */
    public singleProviderConsent(singleProviderConsentDTO: SingleProviderConsentDTO, _options?: Configuration): Promise<string> {
        const result = this.api.singleProviderConsent(singleProviderConsentDTO, _options);
        return result.toPromise();
    }


}



import { ObservableServiceProvidersApi } from './ObservableAPI';

import { ServiceProvidersApiRequestFactory, ServiceProvidersApiResponseProcessor} from "../apis/ServiceProvidersApi";
export class PromiseServiceProvidersApi {
    private api: ObservableServiceProvidersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ServiceProvidersApiRequestFactory,
        responseProcessor?: ServiceProvidersApiResponseProcessor
    ) {
        this.api = new ObservableServiceProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Soft deletes (set to INACTIVE) a service provider
     * @param serviceProviderId The service provider id in UUID format
     */
    public deleteServiceProvider(serviceProviderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteServiceProvider(serviceProviderId, _options);
        return result.toPromise();
    }

    /**
     * Fetch information about the given service provider
     * @param id The service provider id in UUID format
     */
    public getServiceProvider(id: string, _options?: Configuration): Promise<ServiceProviderDTO> {
        const result = this.api.getServiceProvider(id, _options);
        return result.toPromise();
    }

    /**
     * Updates a service provider with new data. Only updates explicitly set new values, rest is left as is
     * @param serviceProviderId The service provider id in UUID format
     * @param serviceProviderPatchDTO 
     */
    public patchServiceProviders(serviceProviderId: string, serviceProviderPatchDTO: ServiceProviderPatchDTO, _options?: Configuration): Promise<ServiceProviderDTO> {
        const result = this.api.patchServiceProviders(serviceProviderId, serviceProviderPatchDTO, _options);
        return result.toPromise();
    }

    /**
     * Creates a new service provider in SA
     * @param serviceProviderDTO 
     */
    public postServiceProviders(serviceProviderDTO: ServiceProviderDTO, _options?: Configuration): Promise<ServiceProviderDTO> {
        const result = this.api.postServiceProviders(serviceProviderDTO, _options);
        return result.toPromise();
    }


}



