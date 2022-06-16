import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ActionTemplatesApiRequestFactory, ActionTemplatesApiResponseProcessor} from "../apis/ActionTemplatesApi";
export class ObservableActionTemplatesApi {
    private requestFactory: ActionTemplatesApiRequestFactory;
    private responseProcessor: ActionTemplatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ActionTemplatesApiRequestFactory,
        responseProcessor?: ActionTemplatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ActionTemplatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ActionTemplatesApiResponseProcessor();
    }

    /**
     * Deletes a action template
     * @param actionTemplateId The action template id in UUID format
     */
    public deleteActionTemplate(actionTemplateId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteActionTemplate(actionTemplateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteActionTemplate(rsp)));
            }));
    }
 
    /**
     * Fetch all action template hierarchy's on the given service provider
     * @param serviceProviderId The service provider id in UUID format
     */
    public getAllActionTemplatesForSP(serviceProviderId: string, _options?: Configuration): Observable<Array<ActionTemplateDTO>> {
        const requestContextPromise = this.requestFactory.getAllActionTemplatesForSP(serviceProviderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllActionTemplatesForSP(rsp)));
            }));
    }
 
    /**
     * Fetch the action template matching the ID
     * @param actionTemplateId The action template id in UUID format
     */
    public getOneActionTemplateById(actionTemplateId: string, _options?: Configuration): Observable<ActionTemplateDTO> {
        const requestContextPromise = this.requestFactory.getOneActionTemplateById(actionTemplateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOneActionTemplateById(rsp)));
            }));
    }
 
    /**
     * Creates a new action template hierarchy on a service provider
     * @param createActionTemplateDTO 
     */
    public postActionTemplate(createActionTemplateDTO: CreateActionTemplateDTO, _options?: Configuration): Observable<ActionTemplateDTO> {
        const requestContextPromise = this.requestFactory.postActionTemplate(createActionTemplateDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postActionTemplate(rsp)));
            }));
    }
 
    /**
     * Updates a existing action template by replacing it with a new version
     * @param actionTemplateId The action template id in UUID format
     * @param createActionTemplateDTO 
     */
    public updateActionTemplate(actionTemplateId: string, createActionTemplateDTO: CreateActionTemplateDTO, _options?: Configuration): Observable<ActionTemplateDTO> {
        const requestContextPromise = this.requestFactory.updateActionTemplate(actionTemplateId, createActionTemplateDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateActionTemplate(rsp)));
            }));
    }
 
}

import { ConsentRequestsApiRequestFactory, ConsentRequestsApiResponseProcessor} from "../apis/ConsentRequestsApi";
export class ObservableConsentRequestsApi {
    private requestFactory: ConsentRequestsApiRequestFactory;
    private responseProcessor: ConsentRequestsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentRequestsApiRequestFactory,
        responseProcessor?: ConsentRequestsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConsentRequestsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConsentRequestsApiResponseProcessor();
    }

    /**
     * Soft delete (set to INACTIVE) the given consent request
     * @param consentRequestId The consent request id in UUID format
     */
    public deleteId(consentRequestId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteId(consentRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteId(rsp)));
            }));
    }
 
    /**
     * Finalize a consent request as the consenting service provider. The information about the consent request is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider
     * @param consentRequestFinalizeBody The signed jwt with payload of type SAConsReqFinalizeSp2ToSaJWT
     */
    public flowConsentRequestFinalize(consentRequestFinalizeBody: ConsentRequestFinalizeBody, _options?: Configuration): Observable<ConsentRequestFinalizeUrlDTO> {
        const requestContextPromise = this.requestFactory.flowConsentRequestFinalize(consentRequestFinalizeBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.flowConsentRequestFinalize(rsp)));
            }));
    }
 
    /**
     * Initialize a consent request as the requesting service provider. The information about the request is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param consentRequestTokenBody The signed jwt with payload of type SAConsReqInitializeSp1ToSaJWT
     */
    public flowConsentRequestInitialize(consentRequestTokenBody: ConsentRequestTokenBody, _options?: Configuration): Observable<ConsentRequestUrlDTO> {
        const requestContextPromise = this.requestFactory.flowConsentRequestInitialize(consentRequestTokenBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.flowConsentRequestInitialize(rsp)));
            }));
    }
 
    /**
     * Fetch information about the given consent request
     * @param consentRequestId The consent request id in UUID format
     */
    public getConsentRequest(consentRequestId: string, _options?: Configuration): Observable<ConsentRequestSummaryDTO> {
        const requestContextPromise = this.requestFactory.getConsentRequest(consentRequestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConsentRequest(rsp)));
            }));
    }
 
    /**
     * Fetch information about all consent requests that the caller is either the requester or consenter for
     * @param direction Either for_me (consenter) or by_me (requester)
     */
    public getConsentRequests(direction: 'for_me' | 'by_me', _options?: Configuration): Observable<Array<ConsentRequestSummaryDTO>> {
        const requestContextPromise = this.requestFactory.getConsentRequests(direction, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConsentRequests(rsp)));
            }));
    }
 
    /**
     * Search for consent requests given some search parameters. See SearchConsentRequestsDTO for details on parameters. Will return a list of matching consent requests
     * @param searchConsentRequestsDTO The search parameters
     */
    public searchConsentRequests(searchConsentRequestsDTO: SearchConsentRequestsDTO, _options?: Configuration): Observable<PaginationResultDTOConsentRequestSearchResultDTO> {
        const requestContextPromise = this.requestFactory.searchConsentRequests(searchConsentRequestsDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchConsentRequests(rsp)));
            }));
    }
 
}

import { ConsentsApiRequestFactory, ConsentsApiResponseProcessor} from "../apis/ConsentsApi";
export class ObservableConsentsApi {
    private requestFactory: ConsentsApiRequestFactory;
    private responseProcessor: ConsentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentsApiRequestFactory,
        responseProcessor?: ConsentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConsentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConsentsApiResponseProcessor();
    }

    /**
     * Create an authorization ticket for the given consent This ticket can be used against the consenting service provider for further integration to prove that the calling service provider is authorized
     * @param consentId The consent id in UUID format
     */
    public createAuthZTicketForConsent(consentId: string, _options?: Configuration): Observable<AuthTicketDTO> {
        const requestContextPromise = this.requestFactory.createAuthZTicketForConsent(consentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAuthZTicketForConsent(rsp)));
            }));
    }
 
    /**
     * Finalize a consent approval as the requesting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/requesting service provider
     * @param consentApprovalFinalizeBody The signed jwt with payload of type SAConsApprovalFinalizeSp1ToSaJWT
     */
    public flowConsentApprovalFinalize(consentApprovalFinalizeBody: ConsentApprovalFinalizeBody, _options?: Configuration): Observable<ApprovalDoneUrlDTO> {
        const requestContextPromise = this.requestFactory.flowConsentApprovalFinalize(consentApprovalFinalizeBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.flowConsentApprovalFinalize(rsp)));
            }));
    }
 
    /**
     * Initialize a consent approval or rejection as the consenting service provider. The information about the request to approve or reject is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider. A consent request can be approved or rejected by more than one consenting principal (legal entity) by initiating more consents
     * @param consentApprovalInitializeBody The signed jwt with payload of type SAConsApprovalInitializeSp2ToSaJWT
     */
    public flowConsentApprovalInitialize(consentApprovalInitializeBody: ConsentApprovalInitializeBody, _options?: Configuration): Observable<ApprovalDoneUrlDTO> {
        const requestContextPromise = this.requestFactory.flowConsentApprovalInitialize(consentApprovalInitializeBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.flowConsentApprovalInitialize(rsp)));
            }));
    }
 
    /**
     * Fetch information about the given consent
     * @param consentId The consent id in UUID format
     */
    public getConsent(consentId: string, _options?: Configuration): Observable<ConsentDTO> {
        const requestContextPromise = this.requestFactory.getConsent(consentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConsent(rsp)));
            }));
    }
 
    /**
     * Search for consents (approvals) given some search parameters. See SearchConsentsDTO for details on parameters. Will return a list of matching consents
     * @param searchConsentsDTO The search parameters
     */
    public searchConsents(searchConsentsDTO: SearchConsentsDTO, _options?: Configuration): Observable<PaginationResultDTOConsentSearchResultDTO> {
        const requestContextPromise = this.requestFactory.searchConsents(searchConsentsDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchConsents(rsp)));
            }));
    }
 
    /**
     * Create a single provider consent. This is a complete consent approval for some action, resources and conditions, with your own serviceprovider as both requester and consenter
     * @param singleProviderConsentDTO Info about the consent to create
     */
    public singleProviderConsent(singleProviderConsentDTO: SingleProviderConsentDTO, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.singleProviderConsent(singleProviderConsentDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.singleProviderConsent(rsp)));
            }));
    }
 
}

import { ServiceProvidersApiRequestFactory, ServiceProvidersApiResponseProcessor} from "../apis/ServiceProvidersApi";
export class ObservableServiceProvidersApi {
    private requestFactory: ServiceProvidersApiRequestFactory;
    private responseProcessor: ServiceProvidersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ServiceProvidersApiRequestFactory,
        responseProcessor?: ServiceProvidersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServiceProvidersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServiceProvidersApiResponseProcessor();
    }

    /**
     * Soft deletes (set to INACTIVE) a service provider
     * @param serviceProviderId The service provider id in UUID format
     */
    public deleteServiceProvider(serviceProviderId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteServiceProvider(serviceProviderId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteServiceProvider(rsp)));
            }));
    }
 
    /**
     * Fetch information about the given service provider
     * @param id The service provider id in UUID format
     */
    public getServiceProvider(id: string, _options?: Configuration): Observable<ServiceProviderDTO> {
        const requestContextPromise = this.requestFactory.getServiceProvider(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getServiceProvider(rsp)));
            }));
    }
 
    /**
     * Updates a service provider with new data. Only updates explicitly set new values, rest is left as is
     * @param serviceProviderId The service provider id in UUID format
     * @param serviceProviderPatchDTO 
     */
    public patchServiceProviders(serviceProviderId: string, serviceProviderPatchDTO: ServiceProviderPatchDTO, _options?: Configuration): Observable<ServiceProviderDTO> {
        const requestContextPromise = this.requestFactory.patchServiceProviders(serviceProviderId, serviceProviderPatchDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patchServiceProviders(rsp)));
            }));
    }
 
    /**
     * Creates a new service provider in SA
     * @param serviceProviderDTO 
     */
    public postServiceProviders(serviceProviderDTO: ServiceProviderDTO, _options?: Configuration): Observable<ServiceProviderDTO> {
        const requestContextPromise = this.requestFactory.postServiceProviders(serviceProviderDTO, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postServiceProviders(rsp)));
            }));
    }
 
}
