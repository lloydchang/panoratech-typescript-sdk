/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAtsAttachmentRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original software.
     */
    remoteData?: boolean | undefined;
    /**
     * Set to get the number of records.
     */
    limit?: number | undefined;
    /**
     * Set to get the number of records after this cursor.
     */
    cursor?: string | undefined;
};

export type ListAtsAttachmentResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedAtsAttachmentOutput>;
};

export type ListAtsAttachmentResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAtsAttachmentResponseBody | undefined;
};

/** @internal */
export const ListAtsAttachmentRequest$inboundSchema: z.ZodType<
    ListAtsAttachmentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListAtsAttachmentRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAtsAttachmentRequest$outboundSchema: z.ZodType<
    ListAtsAttachmentRequest$Outbound,
    z.ZodTypeDef,
    ListAtsAttachmentRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().default(50),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsAttachmentRequest$ {
    /** @deprecated use `ListAtsAttachmentRequest$inboundSchema` instead. */
    export const inboundSchema = ListAtsAttachmentRequest$inboundSchema;
    /** @deprecated use `ListAtsAttachmentRequest$outboundSchema` instead. */
    export const outboundSchema = ListAtsAttachmentRequest$outboundSchema;
    /** @deprecated use `ListAtsAttachmentRequest$Outbound` instead. */
    export type Outbound = ListAtsAttachmentRequest$Outbound;
}

/** @internal */
export const ListAtsAttachmentResponseBody$inboundSchema: z.ZodType<
    ListAtsAttachmentResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedAtsAttachmentOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAtsAttachmentResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedAtsAttachmentOutput$Outbound>;
};

/** @internal */
export const ListAtsAttachmentResponseBody$outboundSchema: z.ZodType<
    ListAtsAttachmentResponseBody$Outbound,
    z.ZodTypeDef,
    ListAtsAttachmentResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedAtsAttachmentOutput$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prevCursor: "prev_cursor",
            nextCursor: "next_cursor",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAtsAttachmentResponseBody$ {
    /** @deprecated use `ListAtsAttachmentResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAtsAttachmentResponseBody$inboundSchema;
    /** @deprecated use `ListAtsAttachmentResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAtsAttachmentResponseBody$outboundSchema;
    /** @deprecated use `ListAtsAttachmentResponseBody$Outbound` instead. */
    export type Outbound = ListAtsAttachmentResponseBody$Outbound;
}

/** @internal */
export const ListAtsAttachmentResponse$inboundSchema: z.ZodType<
    ListAtsAttachmentResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAtsAttachmentResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAtsAttachmentResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAtsAttachmentResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAtsAttachmentResponse$outboundSchema: z.ZodType<
    ListAtsAttachmentResponse$Outbound,
    z.ZodTypeDef,
    ListAtsAttachmentResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAtsAttachmentResponseBody$outboundSchema).optional(),
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
export namespace ListAtsAttachmentResponse$ {
    /** @deprecated use `ListAtsAttachmentResponse$inboundSchema` instead. */
    export const inboundSchema = ListAtsAttachmentResponse$inboundSchema;
    /** @deprecated use `ListAtsAttachmentResponse$outboundSchema` instead. */
    export const outboundSchema = ListAtsAttachmentResponse$outboundSchema;
    /** @deprecated use `ListAtsAttachmentResponse$Outbound` instead. */
    export type Outbound = ListAtsAttachmentResponse$Outbound;
}
