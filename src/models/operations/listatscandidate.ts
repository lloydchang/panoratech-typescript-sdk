/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListAtsCandidateRequest = {
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

export type ListAtsCandidateResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedAtsCandidateOutput>;
};

export type ListAtsCandidateResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListAtsCandidateResponseBody | undefined;
};

/** @internal */
export const ListAtsCandidateRequest$inboundSchema: z.ZodType<
    ListAtsCandidateRequest,
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
export type ListAtsCandidateRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListAtsCandidateRequest$outboundSchema: z.ZodType<
    ListAtsCandidateRequest$Outbound,
    z.ZodTypeDef,
    ListAtsCandidateRequest
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
export namespace ListAtsCandidateRequest$ {
    /** @deprecated use `ListAtsCandidateRequest$inboundSchema` instead. */
    export const inboundSchema = ListAtsCandidateRequest$inboundSchema;
    /** @deprecated use `ListAtsCandidateRequest$outboundSchema` instead. */
    export const outboundSchema = ListAtsCandidateRequest$outboundSchema;
    /** @deprecated use `ListAtsCandidateRequest$Outbound` instead. */
    export type Outbound = ListAtsCandidateRequest$Outbound;
}

/** @internal */
export const ListAtsCandidateResponseBody$inboundSchema: z.ZodType<
    ListAtsCandidateResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedAtsCandidateOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListAtsCandidateResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedAtsCandidateOutput$Outbound>;
};

/** @internal */
export const ListAtsCandidateResponseBody$outboundSchema: z.ZodType<
    ListAtsCandidateResponseBody$Outbound,
    z.ZodTypeDef,
    ListAtsCandidateResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedAtsCandidateOutput$outboundSchema),
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
export namespace ListAtsCandidateResponseBody$ {
    /** @deprecated use `ListAtsCandidateResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListAtsCandidateResponseBody$inboundSchema;
    /** @deprecated use `ListAtsCandidateResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListAtsCandidateResponseBody$outboundSchema;
    /** @deprecated use `ListAtsCandidateResponseBody$Outbound` instead. */
    export type Outbound = ListAtsCandidateResponseBody$Outbound;
}

/** @internal */
export const ListAtsCandidateResponse$inboundSchema: z.ZodType<
    ListAtsCandidateResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListAtsCandidateResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListAtsCandidateResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListAtsCandidateResponseBody$Outbound | undefined;
};

/** @internal */
export const ListAtsCandidateResponse$outboundSchema: z.ZodType<
    ListAtsCandidateResponse$Outbound,
    z.ZodTypeDef,
    ListAtsCandidateResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListAtsCandidateResponseBody$outboundSchema).optional(),
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
export namespace ListAtsCandidateResponse$ {
    /** @deprecated use `ListAtsCandidateResponse$inboundSchema` instead. */
    export const inboundSchema = ListAtsCandidateResponse$inboundSchema;
    /** @deprecated use `ListAtsCandidateResponse$outboundSchema` instead. */
    export const outboundSchema = ListAtsCandidateResponse$outboundSchema;
    /** @deprecated use `ListAtsCandidateResponse$Outbound` instead. */
    export type Outbound = ListAtsCandidateResponse$Outbound;
}
