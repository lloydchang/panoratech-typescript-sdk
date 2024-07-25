/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListHrisEmploymentRequest = {
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

export type ListHrisEmploymentResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedHrisEmploymentOutput>;
};

export type ListHrisEmploymentResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListHrisEmploymentResponseBody | undefined;
};

/** @internal */
export const ListHrisEmploymentRequest$inboundSchema: z.ZodType<
    ListHrisEmploymentRequest,
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
export type ListHrisEmploymentRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListHrisEmploymentRequest$outboundSchema: z.ZodType<
    ListHrisEmploymentRequest$Outbound,
    z.ZodTypeDef,
    ListHrisEmploymentRequest
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
export namespace ListHrisEmploymentRequest$ {
    /** @deprecated use `ListHrisEmploymentRequest$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmploymentRequest$inboundSchema;
    /** @deprecated use `ListHrisEmploymentRequest$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmploymentRequest$outboundSchema;
    /** @deprecated use `ListHrisEmploymentRequest$Outbound` instead. */
    export type Outbound = ListHrisEmploymentRequest$Outbound;
}

/** @internal */
export const ListHrisEmploymentResponseBody$inboundSchema: z.ZodType<
    ListHrisEmploymentResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedHrisEmploymentOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListHrisEmploymentResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedHrisEmploymentOutput$Outbound>;
};

/** @internal */
export const ListHrisEmploymentResponseBody$outboundSchema: z.ZodType<
    ListHrisEmploymentResponseBody$Outbound,
    z.ZodTypeDef,
    ListHrisEmploymentResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedHrisEmploymentOutput$outboundSchema),
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
export namespace ListHrisEmploymentResponseBody$ {
    /** @deprecated use `ListHrisEmploymentResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmploymentResponseBody$inboundSchema;
    /** @deprecated use `ListHrisEmploymentResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmploymentResponseBody$outboundSchema;
    /** @deprecated use `ListHrisEmploymentResponseBody$Outbound` instead. */
    export type Outbound = ListHrisEmploymentResponseBody$Outbound;
}

/** @internal */
export const ListHrisEmploymentResponse$inboundSchema: z.ZodType<
    ListHrisEmploymentResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListHrisEmploymentResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListHrisEmploymentResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListHrisEmploymentResponseBody$Outbound | undefined;
};

/** @internal */
export const ListHrisEmploymentResponse$outboundSchema: z.ZodType<
    ListHrisEmploymentResponse$Outbound,
    z.ZodTypeDef,
    ListHrisEmploymentResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListHrisEmploymentResponseBody$outboundSchema).optional(),
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
export namespace ListHrisEmploymentResponse$ {
    /** @deprecated use `ListHrisEmploymentResponse$inboundSchema` instead. */
    export const inboundSchema = ListHrisEmploymentResponse$inboundSchema;
    /** @deprecated use `ListHrisEmploymentResponse$outboundSchema` instead. */
    export const outboundSchema = ListHrisEmploymentResponse$outboundSchema;
    /** @deprecated use `ListHrisEmploymentResponse$Outbound` instead. */
    export type Outbound = ListHrisEmploymentResponse$Outbound;
}
