/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as operations from "../models/operations/index.js";

export class Messages extends ClientSDK {
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
     * List  Messages
     */
    async list(
        request: operations.ListMarketingautomationMessagesRequest,
        options?: RequestOptions
    ): Promise<operations.ListMarketingautomationMessagesResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.ListMarketingautomationMessagesRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/marketingautomation/messages")();

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

        const bearer$ = await extractSecurity(this.options$.bearer);
        const security$ = bearer$ == null ? {} : { bearer: bearer$ };
        const context = {
            operationID: "listMarketingautomationMessages",
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

        const [result$] = await this.matcher<operations.ListMarketingautomationMessagesResponse>()
            .json(200, operations.ListMarketingautomationMessagesResponse$inboundSchema, {
                key: "object",
            })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Retrieve Messages
     *
     * @remarks
     * Retrieve Messages from any connected Marketingautomation software
     */
    async retrieve(
        request: operations.RetrieveMarketingautomationMessageRequest,
        options?: RequestOptions
    ): Promise<operations.RetrieveMarketingautomationMessageResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.RetrieveMarketingautomationMessageRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/marketingautomation/messages/{id}")(pathParams$);

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

        const bearer$ = await extractSecurity(this.options$.bearer);
        const security$ = bearer$ == null ? {} : { bearer: bearer$ };
        const context = {
            operationID: "retrieveMarketingautomationMessage",
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

        const [result$] =
            await this.matcher<operations.RetrieveMarketingautomationMessageResponse>()
                .json(200, operations.RetrieveMarketingautomationMessageResponse$inboundSchema, {
                    key: "UnifiedMarketingautomationMessageOutput",
                })
                .fail(["4XX", "5XX"])
                .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}
