/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListFilestorageFileRequest = {
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

export type ListFilestorageFileResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedFilestorageFileOutput>;
};

export type ListFilestorageFileResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListFilestorageFileResponseBody | undefined;
};

/** @internal */
export const ListFilestorageFileRequest$inboundSchema: z.ZodType<
    ListFilestorageFileRequest,
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
export type ListFilestorageFileRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListFilestorageFileRequest$outboundSchema: z.ZodType<
    ListFilestorageFileRequest$Outbound,
    z.ZodTypeDef,
    ListFilestorageFileRequest
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
export namespace ListFilestorageFileRequest$ {
    /** @deprecated use `ListFilestorageFileRequest$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageFileRequest$inboundSchema;
    /** @deprecated use `ListFilestorageFileRequest$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageFileRequest$outboundSchema;
    /** @deprecated use `ListFilestorageFileRequest$Outbound` instead. */
    export type Outbound = ListFilestorageFileRequest$Outbound;
}

/** @internal */
export const ListFilestorageFileResponseBody$inboundSchema: z.ZodType<
    ListFilestorageFileResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedFilestorageFileOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListFilestorageFileResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedFilestorageFileOutput$Outbound>;
};

/** @internal */
export const ListFilestorageFileResponseBody$outboundSchema: z.ZodType<
    ListFilestorageFileResponseBody$Outbound,
    z.ZodTypeDef,
    ListFilestorageFileResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedFilestorageFileOutput$outboundSchema),
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
export namespace ListFilestorageFileResponseBody$ {
    /** @deprecated use `ListFilestorageFileResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageFileResponseBody$inboundSchema;
    /** @deprecated use `ListFilestorageFileResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageFileResponseBody$outboundSchema;
    /** @deprecated use `ListFilestorageFileResponseBody$Outbound` instead. */
    export type Outbound = ListFilestorageFileResponseBody$Outbound;
}

/** @internal */
export const ListFilestorageFileResponse$inboundSchema: z.ZodType<
    ListFilestorageFileResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListFilestorageFileResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListFilestorageFileResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListFilestorageFileResponseBody$Outbound | undefined;
};

/** @internal */
export const ListFilestorageFileResponse$outboundSchema: z.ZodType<
    ListFilestorageFileResponse$Outbound,
    z.ZodTypeDef,
    ListFilestorageFileResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListFilestorageFileResponseBody$outboundSchema).optional(),
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
export namespace ListFilestorageFileResponse$ {
    /** @deprecated use `ListFilestorageFileResponse$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageFileResponse$inboundSchema;
    /** @deprecated use `ListFilestorageFileResponse$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageFileResponse$outboundSchema;
    /** @deprecated use `ListFilestorageFileResponse$Outbound` instead. */
    export type Outbound = ListFilestorageFileResponse$Outbound;
}
