/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dlv } from "../lib/dlv.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { unwrap as unwrap$ } from "../types/fp.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";

export class Expenses extends ClientSDK {
    /**
     * List  Expenses
     */
    async list(
        request: operations.ListAccountingExpenseRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListAccountingExpenseResponse>> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.ListAccountingExpenseRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const path$ = pathToFunc("/accounting/expenses")();

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

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "listAccountingExpense",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
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
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await m$.match<
            operations.ListAccountingExpenseResponse,
            SDKError | SDKValidationError
        >(
            m$.json(200, operations.ListAccountingExpenseResponse$inboundSchema, { key: "Result" }),
            m$.fail(["4XX", "5XX"])
        )(response, { extraFields: responseFields$ });

        const nextFunc = (
            responseData: unknown
        ): Paginator<operations.ListAccountingExpenseResponse> => {
            const nextCursor = dlv(responseData, "next_cursor");

            if (nextCursor == null) {
                return () => null;
            }

            return () =>
                this.list(
                    {
                        ...input$,
                        cursor: nextCursor,
                    },
                    options
                );
        };

        const page$ = { ...unwrap$(result$), next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$, !result$.ok) };
    }

    /**
     * Create Expenses
     *
     * @remarks
     * Create Expenses in any supported Accounting software
     */
    async create(
        request: operations.CreateAccountingExpenseRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAccountingExpenseOutput> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.CreateAccountingExpenseRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$.UnifiedAccountingExpenseInput, {
            explode: true,
        });

        const path$ = pathToFunc("/accounting/expenses")();

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

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "createAccountingExpense",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
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
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const [result$] = await m$.match<
            components.UnifiedAccountingExpenseOutput,
            SDKError | SDKValidationError
        >(
            m$.json(201, components.UnifiedAccountingExpenseOutput$inboundSchema),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }

    /**
     * Retrieve Expenses
     *
     * @remarks
     * Retrieve Expenses from any connected Accounting software
     */
    async retrieve(
        request: operations.RetrieveAccountingExpenseRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAccountingExpenseOutput> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.RetrieveAccountingExpenseRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = pathToFunc("/accounting/expenses/{id}")(pathParams$);

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

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "retrieveAccountingExpense",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
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
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const [result$] = await m$.match<
            components.UnifiedAccountingExpenseOutput,
            SDKError | SDKValidationError
        >(
            m$.json(200, components.UnifiedAccountingExpenseOutput$inboundSchema),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }
}
