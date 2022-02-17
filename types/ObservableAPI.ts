import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { BackofficeInternalAdminApiRequestFactory, BackofficeInternalAdminApiResponseProcessor} from "../apis/BackofficeInternalAdminApi";
export class ObservableBackofficeInternalAdminApi {
    private requestFactory: BackofficeInternalAdminApiRequestFactory;
    private responseProcessor: BackofficeInternalAdminApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BackofficeInternalAdminApiRequestFactory,
        responseProcessor?: BackofficeInternalAdminApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BackofficeInternalAdminApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BackofficeInternalAdminApiResponseProcessor();
    }

    /**
     * @param consentRequestId 
     */
    public deleteConsentRequest(consentRequestId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteConsentRequest(consentRequestId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteConsentRequest(rsp)));
            }));
    }
 
    /**
     * @param serviceProviderId 
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
     */
    public getAllConsentRequests(_options?: Configuration): Observable<Array<ConsentRequestSummaryDTO>> {
        const requestContextPromise = this.requestFactory.getAllConsentRequests(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllConsentRequests(rsp)));
            }));
    }
 
    /**
     */
    public getAllConsents(_options?: Configuration): Observable<Array<ConsentDTO>> {
        const requestContextPromise = this.requestFactory.getAllConsents(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllConsents(rsp)));
            }));
    }
 
    /**
     */
    public getAllServiceProviders(_options?: Configuration): Observable<Array<ServiceProviderDTO>> {
        const requestContextPromise = this.requestFactory.getAllServiceProviders(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllServiceProviders(rsp)));
            }));
    }
 
    /**
     */
    public getDebug(_options?: Configuration): Observable<DebugDTO> {
        const requestContextPromise = this.requestFactory.getDebug(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDebug(rsp)));
            }));
    }
 
    /**
     * @param serviceProviderId 
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
     * @param consentRequestFinalizeBody The signed jwt with payload of type AHConsReqFinalizeSp2ToAhJWT
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
     * @param consentRequestTokenBody The signed jwt with payload of type AHConsReqInitializeSp1ToAhJWT
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
     * @param consentApprovalFinalizeBody The signed jwt with payload of type AHConsApprovalFinalizeSp1ToAhJWT
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
     * Initialize a consent approval as the consenting service provider. The information about the request to approve is specified in the request body with a signed JWT which will be verified to be signed by the calling/consenting service provider
     * @param consentApprovalInitializeBody The signed jwt with payload of type AHConsApprovalInitializeSp2ToAhJWT
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
 
}
