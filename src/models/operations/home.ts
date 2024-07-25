/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type HomeResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export const HomeResponse$inboundSchema: z.ZodType<HomeResponse, z.ZodTypeDef, unknown> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type HomeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const HomeResponse$outboundSchema: z.ZodType<
    HomeResponse$Outbound,
    z.ZodTypeDef,
    HomeResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HomeResponse$ {
    /** @deprecated use `HomeResponse$inboundSchema` instead. */
    export const inboundSchema = HomeResponse$inboundSchema;
    /** @deprecated use `HomeResponse$outboundSchema` instead. */
    export const outboundSchema = HomeResponse$outboundSchema;
    /** @deprecated use `HomeResponse$Outbound` instead. */
    export type Outbound = HomeResponse$Outbound;
}
