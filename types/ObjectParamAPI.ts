import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ApiErrorDTO } from '../models/ApiErrorDTO';
import { ApprovalDoneUrlDTO } from '../models/ApprovalDoneUrlDTO';
import { AuthTicketDTO } from '../models/AuthTicketDTO';
import { ConsentApprovalFinalizeBody } from '../models/ConsentApprovalFinalizeBody';
import { ConsentApprovalInitializeBody } from '../models/ConsentApprovalInitializeBody';
import { ConsentDTO } from '../models/ConsentDTO';
import { ConsentRequestFinalizeBody } from '../models/ConsentRequestFinalizeBody';
import { ConsentRequestFinalizeUrlDTO } from '../models/ConsentRequestFinalizeUrlDTO';
import { ConsentRequestSummaryDTO } from '../models/ConsentRequestSummaryDTO';
import { ConsentRequestTokenBody } from '../models/ConsentRequestTokenBody';
import { ConsentRequestUrlDTO } from '../models/ConsentRequestUrlDTO';
import { ConsentSummaryDTO } from '../models/ConsentSummaryDTO';
import { DebugDTO } from '../models/DebugDTO';
import { DebugDTOExampleKeyPair } from '../models/DebugDTOExampleKeyPair';
import { LegalEntityDTO } from '../models/LegalEntityDTO';
import { LocalizedStringDTO } from '../models/LocalizedStringDTO';
import { PolicyActionDTO } from '../models/PolicyActionDTO';
import { PolicyConditionDTO } from '../models/PolicyConditionDTO';
import { PolicyDTO } from '../models/PolicyDTO';
import { PolicyResourceDTO } from '../models/PolicyResourceDTO';
import { PolicySummaryDTO } from '../models/PolicySummaryDTO';
import { ResourceTagDTO } from '../models/ResourceTagDTO';
import { ServiceProviderDTO } from '../models/ServiceProviderDTO';
import { ServiceProviderPatchDTO } from '../models/ServiceProviderPatchDTO';
import { ValidationErrorDTO } from '../models/ValidationErrorDTO';

import { ObservableBackofficeInternalAdminApi } from "./ObservableAPI";
import { BackofficeInternalAdminApiRequestFactory, BackofficeInternalAdminApiResponseProcessor} from "../apis/BackofficeInternalAdminApi";

export interface BackofficeInternalAdminApiDeleteConsentRequestRequest {
    /**
     * 
     * @type string
     * @memberof BackofficeInternalAdminApideleteConsentRequest
     */
    consentRequestId: string
}

export interface BackofficeInternalAdminApiDeleteServiceProviderRequest {
    /**
     * 
     * @type string
     * @memberof BackofficeInternalAdminApideleteServiceProvider
     */
    serviceProviderId: string
}

export interface BackofficeInternalAdminApiGetAllConsentRequestsRequest {
}

export interface BackofficeInternalAdminApiGetAllConsentsRequest {
}

export interface BackofficeInternalAdminApiGetAllServiceProvidersRequest {
}

export interface BackofficeInternalAdminApiGetDebugRequest {
}

export interface BackofficeInternalAdminApiPatchServiceProvidersRequest {
    /**
     * 
     * @type string
     * @memberof BackofficeInternalAdminApipatchServiceProviders
     */
    serviceProviderId: string
    /**
     * 
     * @type ServiceProviderPatchDTO
     * @memberof BackofficeInternalAdminApipatchServiceProviders
     */
    serviceProviderPatchDTO: ServiceProviderPatchDTO
}

export interface BackofficeInternalAdminApiPostServiceProvidersRequest {
    /**
     * 
     * @type ServiceProviderDTO
     * @memberof BackofficeInternalAdminApipostServiceProviders
     */
    serviceProviderDTO: ServiceProviderDTO
}

export class ObjectBackofficeInternalAdminApi {
    private api: ObservableBackofficeInternalAdminApi

    public constructor(configuration: Configuration, requestFactory?: BackofficeInternalAdminApiRequestFactory, responseProcessor?: BackofficeInternalAdminApiResponseProcessor) {
        this.api = new ObservableBackofficeInternalAdminApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deleteConsentRequest(param: BackofficeInternalAdminApiDeleteConsentRequestRequest, options?: Configuration): Promise<void> {
        return this.api.deleteConsentRequest(param.consentRequestId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteServiceProvider(param: BackofficeInternalAdminApiDeleteServiceProviderRequest, options?: Configuration): Promise<void> {
        return this.api.deleteServiceProvider(param.serviceProviderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllConsentRequests(param: BackofficeInternalAdminApiGetAllConsentRequestsRequest, options?: Configuration): Promise<Array<ConsentRequestSummaryDTO>> {
        return this.api.getAllConsentRequests( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllConsents(param: BackofficeInternalAdminApiGetAllConsentsRequest, options?: Configuration): Promise<Array<ConsentDTO>> {
        return this.api.getAllConsents( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllServiceProviders(param: BackofficeInternalAdminApiGetAllServiceProvidersRequest, options?: Configuration): Promise<Array<ServiceProviderDTO>> {
        return this.api.getAllServiceProviders( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getDebug(param: BackofficeInternalAdminApiGetDebugRequest, options?: Configuration): Promise<DebugDTO> {
        return this.api.getDebug( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public patchServiceProviders(param: BackofficeInternalAdminApiPatchServiceProvidersRequest, options?: Configuration): Promise<ServiceProviderDTO> {
        return this.api.patchServiceProviders(param.serviceProviderId, param.serviceProviderPatchDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postServiceProviders(param: BackofficeInternalAdminApiPostServiceProvidersRequest, options?: Configuration): Promise<ServiceProviderDTO> {
        return this.api.postServiceProviders(param.serviceProviderDTO,  options).toPromise();
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
     * Initialize a consent approval as the consenting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider
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

}

import { ObservableServiceProvidersApi } from "./ObservableAPI";
import { ServiceProvidersApiRequestFactory, ServiceProvidersApiResponseProcessor} from "../apis/ServiceProvidersApi";

export interface ServiceProvidersApiGetServiceProviderRequest {
    /**
     * The service provider id in UUID format
     * @type string
     * @memberof ServiceProvidersApigetServiceProvider
     */
    id: string
}

export class ObjectServiceProvidersApi {
    private api: ObservableServiceProvidersApi

    public constructor(configuration: Configuration, requestFactory?: ServiceProvidersApiRequestFactory, responseProcessor?: ServiceProvidersApiResponseProcessor) {
        this.api = new ObservableServiceProvidersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch information about the given service provider
     * @param param the request object
     */
    public getServiceProvider(param: ServiceProvidersApiGetServiceProviderRequest, options?: Configuration): Promise<ServiceProviderDTO> {
        return this.api.getServiceProvider(param.id,  options).toPromise();
    }

}
