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

import { ObservableActionTemplatesApi } from "./ObservableAPI";
import { ActionTemplatesApiRequestFactory, ActionTemplatesApiResponseProcessor} from "../apis/ActionTemplatesApi";

export interface ActionTemplatesApiDeleteActionTemplateRequest {
    /**
     * The action template id in UUID format
     * @type string
     * @memberof ActionTemplatesApideleteActionTemplate
     */
    actionTemplateId: string
}

export interface ActionTemplatesApiGetAllActionTemplatesForSPRequest {
    /**
     * The service provider id in UUID format
     * @type string
     * @memberof ActionTemplatesApigetAllActionTemplatesForSP
     */
    serviceProviderId: string
}

export interface ActionTemplatesApiGetOneActionTemplateByIdRequest {
    /**
     * The action template id in UUID format
     * @type string
     * @memberof ActionTemplatesApigetOneActionTemplateById
     */
    actionTemplateId: string
}

export interface ActionTemplatesApiPostActionTemplateRequest {
    /**
     * 
     * @type CreateActionTemplateDTO
     * @memberof ActionTemplatesApipostActionTemplate
     */
    createActionTemplateDTO: CreateActionTemplateDTO
}

export interface ActionTemplatesApiUpdateActionTemplateRequest {
    /**
     * The action template id in UUID format
     * @type string
     * @memberof ActionTemplatesApiupdateActionTemplate
     */
    actionTemplateId: string
    /**
     * 
     * @type CreateActionTemplateDTO
     * @memberof ActionTemplatesApiupdateActionTemplate
     */
    createActionTemplateDTO: CreateActionTemplateDTO
}

export class ObjectActionTemplatesApi {
    private api: ObservableActionTemplatesApi

    public constructor(configuration: Configuration, requestFactory?: ActionTemplatesApiRequestFactory, responseProcessor?: ActionTemplatesApiResponseProcessor) {
        this.api = new ObservableActionTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a action template
     * @param param the request object
     */
    public deleteActionTemplate(param: ActionTemplatesApiDeleteActionTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.deleteActionTemplate(param.actionTemplateId,  options).toPromise();
    }

    /**
     * Fetch all action template hierarchy's on the given service provider
     * @param param the request object
     */
    public getAllActionTemplatesForSP(param: ActionTemplatesApiGetAllActionTemplatesForSPRequest, options?: Configuration): Promise<Array<ActionTemplateDTO>> {
        return this.api.getAllActionTemplatesForSP(param.serviceProviderId,  options).toPromise();
    }

    /**
     * Fetch the action template matching the ID
     * @param param the request object
     */
    public getOneActionTemplateById(param: ActionTemplatesApiGetOneActionTemplateByIdRequest, options?: Configuration): Promise<ActionTemplateDTO> {
        return this.api.getOneActionTemplateById(param.actionTemplateId,  options).toPromise();
    }

    /**
     * Creates a new action template hierarchy on a service provider
     * @param param the request object
     */
    public postActionTemplate(param: ActionTemplatesApiPostActionTemplateRequest, options?: Configuration): Promise<ActionTemplateDTO> {
        return this.api.postActionTemplate(param.createActionTemplateDTO,  options).toPromise();
    }

    /**
     * Updates a existing action template by replacing it with a new version
     * @param param the request object
     */
    public updateActionTemplate(param: ActionTemplatesApiUpdateActionTemplateRequest, options?: Configuration): Promise<ActionTemplateDTO> {
        return this.api.updateActionTemplate(param.actionTemplateId, param.createActionTemplateDTO,  options).toPromise();
    }

}

import { ObservableConsentRequestsApi } from "./ObservableAPI";
import { ConsentRequestsApiRequestFactory, ConsentRequestsApiResponseProcessor} from "../apis/ConsentRequestsApi";

export interface ConsentRequestsApiDeleteIdRequest {
    /**
     * The consent request id in UUID format
     * @type string
     * @memberof ConsentRequestsApideleteId
     */
    consentRequestId: string
}

export interface ConsentRequestsApiFlowConsentRequestFinalizeRequest {
    /**
     * The signed jwt with payload of type SAConsReqFinalizeSp2ToSaJWT
     * @type ConsentRequestFinalizeBody
     * @memberof ConsentRequestsApiflowConsentRequestFinalize
     */
    consentRequestFinalizeBody: ConsentRequestFinalizeBody
}

export interface ConsentRequestsApiFlowConsentRequestInitializeRequest {
    /**
     * The signed jwt with payload of type SAConsReqInitializeSp1ToSaJWT
     * @type ConsentRequestTokenBody
     * @memberof ConsentRequestsApiflowConsentRequestInitialize
     */
    consentRequestTokenBody: ConsentRequestTokenBody
}

export interface ConsentRequestsApiGetConsentRequestRequest {
    /**
     * The consent request id in UUID format
     * @type string
     * @memberof ConsentRequestsApigetConsentRequest
     */
    consentRequestId: string
}

export interface ConsentRequestsApiGetConsentRequestsRequest {
    /**
     * Either for_me (consenter) or by_me (requester)
     * @type &#39;for_me&#39; | &#39;by_me&#39;
     * @memberof ConsentRequestsApigetConsentRequests
     */
    direction: 'for_me' | 'by_me'
}

export interface ConsentRequestsApiSearchConsentRequestsRequest {
    /**
     * The search parameters
     * @type SearchConsentRequestsDTO
     * @memberof ConsentRequestsApisearchConsentRequests
     */
    searchConsentRequestsDTO: SearchConsentRequestsDTO
}

export class ObjectConsentRequestsApi {
    private api: ObservableConsentRequestsApi

    public constructor(configuration: Configuration, requestFactory?: ConsentRequestsApiRequestFactory, responseProcessor?: ConsentRequestsApiResponseProcessor) {
        this.api = new ObservableConsentRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Soft delete (set to INACTIVE) the given consent request
     * @param param the request object
     */
    public deleteId(param: ConsentRequestsApiDeleteIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteId(param.consentRequestId,  options).toPromise();
    }

    /**
     * Finalize a consent request as the consenting service provider. The information about the consent request is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider
     * @param param the request object
     */
    public flowConsentRequestFinalize(param: ConsentRequestsApiFlowConsentRequestFinalizeRequest, options?: Configuration): Promise<ConsentRequestFinalizeUrlDTO> {
        return this.api.flowConsentRequestFinalize(param.consentRequestFinalizeBody,  options).toPromise();
    }

    /**
     * Initialize a consent request as the requesting service provider. The information about the request is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param param the request object
     */
    public flowConsentRequestInitialize(param: ConsentRequestsApiFlowConsentRequestInitializeRequest, options?: Configuration): Promise<ConsentRequestUrlDTO> {
        return this.api.flowConsentRequestInitialize(param.consentRequestTokenBody,  options).toPromise();
    }

    /**
     * Fetch information about the given consent request
     * @param param the request object
     */
    public getConsentRequest(param: ConsentRequestsApiGetConsentRequestRequest, options?: Configuration): Promise<ConsentRequestSummaryDTO> {
        return this.api.getConsentRequest(param.consentRequestId,  options).toPromise();
    }

    /**
     * Fetch information about all consent requests that the caller is either the requester or consenter for
     * @param param the request object
     */
    public getConsentRequests(param: ConsentRequestsApiGetConsentRequestsRequest, options?: Configuration): Promise<Array<ConsentRequestSummaryDTO>> {
        return this.api.getConsentRequests(param.direction,  options).toPromise();
    }

    /**
     * Search for consent requests given some search parameters. See SearchConsentRequestsDTO for details on parameters. Will return a list of matching consent requests
     * @param param the request object
     */
    public searchConsentRequests(param: ConsentRequestsApiSearchConsentRequestsRequest, options?: Configuration): Promise<PaginationResultDTOConsentRequestSearchResultDTO> {
        return this.api.searchConsentRequests(param.searchConsentRequestsDTO,  options).toPromise();
    }

}

import { ObservableConsentsApi } from "./ObservableAPI";
import { ConsentsApiRequestFactory, ConsentsApiResponseProcessor} from "../apis/ConsentsApi";

export interface ConsentsApiCreateAuthZTicketForConsentRequest {
    /**
     * The consent id in UUID format
     * @type string
     * @memberof ConsentsApicreateAuthZTicketForConsent
     */
    consentId: string
}

export interface ConsentsApiFlowConsentApprovalFinalizeRequest {
    /**
     * The signed jwt with payload of type SAConsApprovalFinalizeSp1ToSaJWT
     * @type ConsentApprovalFinalizeBody
     * @memberof ConsentsApiflowConsentApprovalFinalize
     */
    consentApprovalFinalizeBody: ConsentApprovalFinalizeBody
}

export interface ConsentsApiFlowConsentApprovalInitializeRequest {
    /**
     * The signed jwt with payload of type SAConsApprovalInitializeSp2ToSaJWT
     * @type ConsentApprovalInitializeBody
     * @memberof ConsentsApiflowConsentApprovalInitialize
     */
    consentApprovalInitializeBody: ConsentApprovalInitializeBody
}

export interface ConsentsApiGetConsentRequest {
    /**
     * The consent id in UUID format
     * @type string
     * @memberof ConsentsApigetConsent
     */
    consentId: string
}

export interface ConsentsApiSearchConsentsRequest {
    /**
     * The search parameters
     * @type SearchConsentsDTO
     * @memberof ConsentsApisearchConsents
     */
    searchConsentsDTO: SearchConsentsDTO
}

export interface ConsentsApiSingleProviderConsentRequest {
    /**
     * Info about the consent to create
     * @type SingleProviderConsentDTO
     * @memberof ConsentsApisingleProviderConsent
     */
    singleProviderConsentDTO: SingleProviderConsentDTO
}

export class ObjectConsentsApi {
    private api: ObservableConsentsApi

    public constructor(configuration: Configuration, requestFactory?: ConsentsApiRequestFactory, responseProcessor?: ConsentsApiResponseProcessor) {
        this.api = new ObservableConsentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an authorization ticket for the given consent This ticket can be used against the consenting service provider for further integration to prove that the calling service provider is authorized
     * @param param the request object
     */
    public createAuthZTicketForConsent(param: ConsentsApiCreateAuthZTicketForConsentRequest, options?: Configuration): Promise<AuthTicketDTO> {
        return this.api.createAuthZTicketForConsent(param.consentId,  options).toPromise();
    }

    /**
     * Finalize a consent approval as the requesting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param param the request object
     */
    public flowConsentApprovalFinalize(param: ConsentsApiFlowConsentApprovalFinalizeRequest, options?: Configuration): Promise<ApprovalDoneUrlDTO> {
        return this.api.flowConsentApprovalFinalize(param.consentApprovalFinalizeBody,  options).toPromise();
    }

    /**
     * Initialize a consent approval or rejection as the consenting service provider. The information about the request to approve or reject is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider. A consent request can be approved or rejected by more than one consenting principal (legal entity) by initiating more consents
     * @param param the request object
     */
    public flowConsentApprovalInitialize(param: ConsentsApiFlowConsentApprovalInitializeRequest, options?: Configuration): Promise<ApprovalDoneUrlDTO> {
        return this.api.flowConsentApprovalInitialize(param.consentApprovalInitializeBody,  options).toPromise();
    }

    /**
     * Fetch information about the given consent
     * @param param the request object
     */
    public getConsent(param: ConsentsApiGetConsentRequest, options?: Configuration): Promise<ConsentDTO> {
        return this.api.getConsent(param.consentId,  options).toPromise();
    }

    /**
     * Search for consents (approvals) given some search parameters. See SearchConsentsDTO for details on parameters. Will return a list of matching consents
     * @param param the request object
     */
    public searchConsents(param: ConsentsApiSearchConsentsRequest, options?: Configuration): Promise<PaginationResultDTOConsentSearchResultDTO> {
        return this.api.searchConsents(param.searchConsentsDTO,  options).toPromise();
    }

    /**
     * Create a single provider consent. This is a complete consent approval for some action, resources and conditions, with your own serviceprovider as both requester and consenter
     * @param param the request object
     */
    public singleProviderConsent(param: ConsentsApiSingleProviderConsentRequest, options?: Configuration): Promise<string> {
        return this.api.singleProviderConsent(param.singleProviderConsentDTO,  options).toPromise();
    }

}

import { ObservableServiceProvidersApi } from "./ObservableAPI";
import { ServiceProvidersApiRequestFactory, ServiceProvidersApiResponseProcessor} from "../apis/ServiceProvidersApi";

export interface ServiceProvidersApiDeleteServiceProviderRequest {
    /**
     * The service provider id in UUID format
     * @type string
     * @memberof ServiceProvidersApideleteServiceProvider
     */
    serviceProviderId: string
}

export interface ServiceProvidersApiGetServiceProviderRequest {
    /**
     * The service provider id in UUID format
     * @type string
     * @memberof ServiceProvidersApigetServiceProvider
     */
    id: string
}

export interface ServiceProvidersApiPatchServiceProvidersRequest {
    /**
     * The service provider id in UUID format
     * @type string
     * @memberof ServiceProvidersApipatchServiceProviders
     */
    serviceProviderId: string
    /**
     * 
     * @type ServiceProviderPatchDTO
     * @memberof ServiceProvidersApipatchServiceProviders
     */
    serviceProviderPatchDTO: ServiceProviderPatchDTO
}

export interface ServiceProvidersApiPostServiceProvidersRequest {
    /**
     * 
     * @type ServiceProviderDTO
     * @memberof ServiceProvidersApipostServiceProviders
     */
    serviceProviderDTO: ServiceProviderDTO
}

export class ObjectServiceProvidersApi {
    private api: ObservableServiceProvidersApi

    public constructor(configuration: Configuration, requestFactory?: ServiceProvidersApiRequestFactory, responseProcessor?: ServiceProvidersApiResponseProcessor) {
        this.api = new ObservableServiceProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Soft deletes (set to INACTIVE) a service provider
     * @param param the request object
     */
    public deleteServiceProvider(param: ServiceProvidersApiDeleteServiceProviderRequest, options?: Configuration): Promise<void> {
        return this.api.deleteServiceProvider(param.serviceProviderId,  options).toPromise();
    }

    /**
     * Fetch information about the given service provider
     * @param param the request object
     */
    public getServiceProvider(param: ServiceProvidersApiGetServiceProviderRequest, options?: Configuration): Promise<ServiceProviderDTO> {
        return this.api.getServiceProvider(param.id,  options).toPromise();
    }

    /**
     * Updates a service provider with new data. Only updates explicitly set new values, rest is left as is
     * @param param the request object
     */
    public patchServiceProviders(param: ServiceProvidersApiPatchServiceProvidersRequest, options?: Configuration): Promise<ServiceProviderDTO> {
        return this.api.patchServiceProviders(param.serviceProviderId, param.serviceProviderPatchDTO,  options).toPromise();
    }

    /**
     * Creates a new service provider in SA
     * @param param the request object
     */
    public postServiceProviders(param: ServiceProvidersApiPostServiceProvidersRequest, options?: Configuration): Promise<ServiceProviderDTO> {
        return this.api.postServiceProviders(param.serviceProviderDTO,  options).toPromise();
    }

}
