/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { unwrap as unwrap$ } from "../types/fp.js";
import * as z from "zod";

export class Login extends ClientSDK {
    /**
     * Log In
     */
    async signIn(request: components.LoginDto, options?: RequestOptions): Promise<void> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => components.LoginDto$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/auth/login")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "*/*",
        });

        const apiKey$ = await extractSecurity(this.options$.apiKey);
        const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
        const context = {
            operationID: "signIn",
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

        const [result$] = await m$.match<void, SDKError | SDKValidationError>(
            m$.nil(201, z.void()),
            m$.fail(["4XX", "5XX"])
        )(response);

        return unwrap$(result$);
    }
}
