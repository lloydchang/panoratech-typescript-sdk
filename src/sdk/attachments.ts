/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";

export class Attachments extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List  Attachments
     */
    async list(
        request: operations.ListTicketingAttachmentsRequest,
        options?: RequestOptions
    ): Promise<operations.ListTicketingAttachmentsResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListTicketingAttachmentsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/ticketing/attachments")();

        const query$ = encodeFormQuery$({
            cursor: payload$.cursor,
            limit: payload$.limit,
            remote_data: payload$.remote_data,
        });

        const headers$ = new Headers({
            Accept: "application/json",
            "x-connection-token": encodeSimple$(
                "x-connection-token",
                payload$["x-connection-token"],
                { explode: false, charEncoding: "none" }
            ),
        });

        let security$;
        if (typeof this.options$.bearer === "function") {
            security$ = { bearer: await this.options$.bearer() };
        } else if (this.options$.bearer) {
            security$ = { bearer: this.options$.bearer };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "listTicketingAttachments",
            oAuth2Scopes: [],
            securitySource: this.options$.bearer,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.ListTicketingAttachmentsResponse>()
            .json(200, operations.ListTicketingAttachmentsResponse$inboundSchema, { key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create a Attachment
     *
     * @remarks
     * Create a attachment in any supported Ticketing software
     */
    async create(
        request: operations.CreateTicketingAttachmentRequest,
        options?: RequestOptions
    ): Promise<operations.CreateTicketingAttachmentResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateTicketingAttachmentRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.UnifiedTicketingAttachmentInput, {
            explode: true,
        });

        const path$ = this.templateURLComponent("/ticketing/attachments")();

        const query$ = encodeFormQuery$({
            remote_data: payload$.remote_data,
        });

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-connection-token": encodeSimple$(
                "x-connection-token",
                payload$["x-connection-token"],
                { explode: false, charEncoding: "none" }
            ),
        });

        let security$;
        if (typeof this.options$.bearer === "function") {
            security$ = { bearer: await this.options$.bearer() };
        } else if (this.options$.bearer) {
            security$ = { bearer: this.options$.bearer };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "createTicketingAttachment",
            oAuth2Scopes: [],
            securitySource: this.options$.bearer,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.CreateTicketingAttachmentResponse>()
            .json(201, operations.CreateTicketingAttachmentResponse$inboundSchema, {
                key: "UnifiedTicketingAttachmentOutput",
            })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve a Attachment
     *
     * @remarks
     * Retrieve a attachment from any connected Ticketing software
     */
    async retrieve(
        request: operations.RetrieveTicketingAttachmentRequest,
        options?: RequestOptions
    ): Promise<operations.RetrieveTicketingAttachmentResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RetrieveTicketingAttachmentRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/ticketing/attachments/{id}")(pathParams$);

        const query$ = encodeFormQuery$({
            remote_data: payload$.remote_data,
        });

        const headers$ = new Headers({
            Accept: "application/json",
            "x-connection-token": encodeSimple$(
                "x-connection-token",
                payload$["x-connection-token"],
                { explode: false, charEncoding: "none" }
            ),
        });

        let security$;
        if (typeof this.options$.bearer === "function") {
            security$ = { bearer: await this.options$.bearer() };
        } else if (this.options$.bearer) {
            security$ = { bearer: this.options$.bearer };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "retrieveTicketingAttachment",
            oAuth2Scopes: [],
            securitySource: this.options$.bearer,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.RetrieveTicketingAttachmentResponse>()
            .json(200, operations.RetrieveTicketingAttachmentResponse$inboundSchema, {
                key: "UnifiedTicketingAttachmentOutput",
            })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}
