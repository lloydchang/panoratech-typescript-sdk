/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAtsInterviewRequest = {
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

export type ListAtsInterviewResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedAtsInterviewOutput>;
};

export type ListAtsInterviewResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAtsInterviewResponseBody | undefined;
};

/** @internal */
export const ListAtsInterviewRequest$inboundSchema: z.ZodType<
    ListAtsInterviewRequest,
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
export type ListAtsInterviewRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAtsInterviewRequest$outboundSchema: z.ZodType<
    ListAtsInterviewRequest$Outbound,
    z.ZodTypeDef,
    ListAtsInterviewRequest
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
export namespace ListAtsInterviewRequest$ {
    /** @deprecated use `ListAtsInterviewRequest$inboundSchema` instead. */
    export const inboundSchema = ListAtsInterviewRequest$inboundSchema;
    /** @deprecated use `ListAtsInterviewRequest$outboundSchema` instead. */
    export const outboundSchema = ListAtsInterviewRequest$outboundSchema;
    /** @deprecated use `ListAtsInterviewRequest$Outbound` instead. */
    export type Outbound = ListAtsInterviewRequest$Outbound;
}

/** @internal */
export const ListAtsInterviewResponseBody$inboundSchema: z.ZodType<
    ListAtsInterviewResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedAtsInterviewOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAtsInterviewResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedAtsInterviewOutput$Outbound>;
};

/** @internal */
export const ListAtsInterviewResponseBody$outboundSchema: z.ZodType<
    ListAtsInterviewResponseBody$Outbound,
    z.ZodTypeDef,
    ListAtsInterviewResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedAtsInterviewOutput$outboundSchema),
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
export namespace ListAtsInterviewResponseBody$ {
    /** @deprecated use `ListAtsInterviewResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAtsInterviewResponseBody$inboundSchema;
    /** @deprecated use `ListAtsInterviewResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAtsInterviewResponseBody$outboundSchema;
    /** @deprecated use `ListAtsInterviewResponseBody$Outbound` instead. */
    export type Outbound = ListAtsInterviewResponseBody$Outbound;
}

/** @internal */
export const ListAtsInterviewResponse$inboundSchema: z.ZodType<
    ListAtsInterviewResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAtsInterviewResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAtsInterviewResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAtsInterviewResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAtsInterviewResponse$outboundSchema: z.ZodType<
    ListAtsInterviewResponse$Outbound,
    z.ZodTypeDef,
    ListAtsInterviewResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAtsInterviewResponseBody$outboundSchema).optional(),
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
export namespace ListAtsInterviewResponse$ {
    /** @deprecated use `ListAtsInterviewResponse$inboundSchema` instead. */
    export const inboundSchema = ListAtsInterviewResponse$inboundSchema;
    /** @deprecated use `ListAtsInterviewResponse$outboundSchema` instead. */
    export const outboundSchema = ListAtsInterviewResponse$outboundSchema;
    /** @deprecated use `ListAtsInterviewResponse$Outbound` instead. */
    export type Outbound = ListAtsInterviewResponse$Outbound;
}
