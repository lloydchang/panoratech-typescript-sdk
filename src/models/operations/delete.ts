/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type DeleteRequest = {
    id: string;
};

export type DeleteResponse = {
    httpMeta: components.HTTPMetadata;
    webhookResponse?: components.WebhookResponse | undefined;
};

/** @internal */
export const DeleteRequest$inboundSchema: z.ZodType<DeleteRequest, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string(),
    });

/** @internal */
export type DeleteRequest$Outbound = {
    id: string;
};

/** @internal */
export const DeleteRequest$outboundSchema: z.ZodType<
    DeleteRequest$Outbound,
    z.ZodTypeDef,
    DeleteRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRequest$ {
    /** @deprecated use `DeleteRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteRequest$inboundSchema;
    /** @deprecated use `DeleteRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteRequest$outboundSchema;
    /** @deprecated use `DeleteRequest$Outbound` instead. */
    export type Outbound = DeleteRequest$Outbound;
}

/** @internal */
export const DeleteResponse$inboundSchema: z.ZodType<DeleteResponse, z.ZodTypeDef, unknown> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        WebhookResponse: components.WebhookResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            WebhookResponse: "webhookResponse",
        });
    });

/** @internal */
export type DeleteResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WebhookResponse?: components.WebhookResponse$Outbound | undefined;
};

/** @internal */
export const DeleteResponse$outboundSchema: z.ZodType<
    DeleteResponse$Outbound,
    z.ZodTypeDef,
    DeleteResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        webhookResponse: components.WebhookResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            webhookResponse: "WebhookResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteResponse$ {
    /** @deprecated use `DeleteResponse$inboundSchema` instead. */
    export const inboundSchema = DeleteResponse$inboundSchema;
    /** @deprecated use `DeleteResponse$outboundSchema` instead. */
    export const outboundSchema = DeleteResponse$outboundSchema;
    /** @deprecated use `DeleteResponse$Outbound` instead. */
    export type Outbound = DeleteResponse$Outbound;
}
