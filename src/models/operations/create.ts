/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export const CreateResponse$inboundSchema: z.ZodType<CreateResponse, z.ZodTypeDef, unknown> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type CreateResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const CreateResponse$outboundSchema: z.ZodType<
    CreateResponse$Outbound,
    z.ZodTypeDef,
    CreateResponse
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
export namespace CreateResponse$ {
    /** @deprecated use `CreateResponse$inboundSchema` instead. */
    export const inboundSchema = CreateResponse$inboundSchema;
    /** @deprecated use `CreateResponse$outboundSchema` instead. */
    export const outboundSchema = CreateResponse$outboundSchema;
    /** @deprecated use `CreateResponse$Outbound` instead. */
    export type Outbound = CreateResponse$Outbound;
}
