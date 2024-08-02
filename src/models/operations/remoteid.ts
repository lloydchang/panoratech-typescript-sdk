/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RemoteIdRequest = {
    remoteId: string;
};

export type RemoteIdResponse = {
    httpMeta: components.HTTPMetadata;
    linkedUserResponse?: components.LinkedUserResponse | undefined;
};

/** @internal */
export const RemoteIdRequest$inboundSchema: z.ZodType<RemoteIdRequest, z.ZodTypeDef, unknown> =
    z.object({
        remoteId: z.string(),
    });

/** @internal */
export type RemoteIdRequest$Outbound = {
    remoteId: string;
};

/** @internal */
export const RemoteIdRequest$outboundSchema: z.ZodType<
    RemoteIdRequest$Outbound,
    z.ZodTypeDef,
    RemoteIdRequest
> = z.object({
    remoteId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoteIdRequest$ {
    /** @deprecated use `RemoteIdRequest$inboundSchema` instead. */
    export const inboundSchema = RemoteIdRequest$inboundSchema;
    /** @deprecated use `RemoteIdRequest$outboundSchema` instead. */
    export const outboundSchema = RemoteIdRequest$outboundSchema;
    /** @deprecated use `RemoteIdRequest$Outbound` instead. */
    export type Outbound = RemoteIdRequest$Outbound;
}

/** @internal */
export const RemoteIdResponse$inboundSchema: z.ZodType<RemoteIdResponse, z.ZodTypeDef, unknown> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        LinkedUserResponse: components.LinkedUserResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            LinkedUserResponse: "linkedUserResponse",
        });
    });

/** @internal */
export type RemoteIdResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LinkedUserResponse?: components.LinkedUserResponse$Outbound | undefined;
};

/** @internal */
export const RemoteIdResponse$outboundSchema: z.ZodType<
    RemoteIdResponse$Outbound,
    z.ZodTypeDef,
    RemoteIdResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        linkedUserResponse: components.LinkedUserResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            linkedUserResponse: "LinkedUserResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoteIdResponse$ {
    /** @deprecated use `RemoteIdResponse$inboundSchema` instead. */
    export const inboundSchema = RemoteIdResponse$inboundSchema;
    /** @deprecated use `RemoteIdResponse$outboundSchema` instead. */
    export const outboundSchema = RemoteIdResponse$outboundSchema;
    /** @deprecated use `RemoteIdResponse$Outbound` instead. */
    export type Outbound = RemoteIdResponse$Outbound;
}
