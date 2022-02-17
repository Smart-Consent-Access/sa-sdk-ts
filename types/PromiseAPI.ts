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
import { ObservableBackofficeInternalAdminApi } from './ObservableAPI';

import { BackofficeInternalAdminApiRequestFactory, BackofficeInternalAdminApiResponseProcessor} from "../apis/BackofficeInternalAdminApi";
export class PromiseBackofficeInternalAdminApi {
    private api: ObservableBackofficeInternalAdminApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BackofficeInternalAdminApiRequestFactory,
        responseProcessor?: BackofficeInternalAdminApiResponseProcessor
    ) {
        this.api = new ObservableBackofficeInternalAdminApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param consentRequestId 
     */
    public deleteConsentRequest(consentRequestId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteConsentRequest(consentRequestId, _options);
        return result.toPromise();
    }

    /**
     * @param serviceProviderId 
     */
    public deleteServiceProvider(serviceProviderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteServiceProvider(serviceProviderId, _options);
        return result.toPromise();
    }

    /**
     */
    public getAllConsentRequests(_options?: Configuration): Promise<Array<ConsentRequestSummaryDTO>> {
        const result = this.api.getAllConsentRequests(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllConsents(_options?: Configuration): Promise<Array<ConsentDTO>> {
        const result = this.api.getAllConsents(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllServiceProviders(_options?: Configuration): Promise<Array<ServiceProviderDTO>> {
        const result = this.api.getAllServiceProviders(_options);
        return result.toPromise();
    }

    /**
     */
    public getDebug(_options?: Configuration): Promise<DebugDTO> {
        const result = this.api.getDebug(_options);
        return result.toPromise();
    }

    /**
     * @param serviceProviderId 
     * @param serviceProviderPatchDTO 
     */
    public patchServiceProviders(serviceProviderId: string, serviceProviderPatchDTO: ServiceProviderPatchDTO, _options?: Configuration): Promise<ServiceProviderDTO> {
        const result = this.api.patchServiceProviders(serviceProviderId, serviceProviderPatchDTO, _options);
        return result.toPromise();
    }

    /**
     * @param serviceProviderDTO 
     */
    public postServiceProviders(serviceProviderDTO: ServiceProviderDTO, _options?: Configuration): Promise<ServiceProviderDTO> {
        const result = this.api.postServiceProviders(serviceProviderDTO, _options);
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
     * @param consentRequestFinalizeBody The signed jwt with payload of type AHConsReqFinalizeSp2ToAhJWT
     */
    public flowConsentRequestFinalize(consentRequestFinalizeBody: ConsentRequestFinalizeBody, _options?: Configuration): Promise<ConsentRequestFinalizeUrlDTO> {
        const result = this.api.flowConsentRequestFinalize(consentRequestFinalizeBody, _options);
        return result.toPromise();
    }

    /**
     * Initialize a consent request as the requesting service provider. The information about the request is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param consentRequestTokenBody The signed jwt with payload of type AHConsReqInitializeSp1ToAhJWT
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
     * @param consentApprovalFinalizeBody The signed jwt with payload of type AHConsApprovalFinalizeSp1ToAhJWT
     */
    public flowConsentApprovalFinalize(consentApprovalFinalizeBody: ConsentApprovalFinalizeBody, _options?: Configuration): Promise<ApprovalDoneUrlDTO> {
        const result = this.api.flowConsentApprovalFinalize(consentApprovalFinalizeBody, _options);
        return result.toPromise();
    }

    /**
     * Initialize a consent approval as the consenting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider
     * @param consentApprovalInitializeBody The signed jwt with payload of type AHConsApprovalInitializeSp2ToAhJWT
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
     * Fetch information about the given service provider
     * @param id The service provider id in UUID format
     */
    public getServiceProvider(id: string, _options?: Configuration): Promise<ServiceProviderDTO> {
        const result = this.api.getServiceProvider(id, _options);
        return result.toPromise();
    }


}



