/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListCrmUsersRequest = {
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

export type ListCrmUsersResponseBody = {
    prevCursor: string;
    nextCursor: string;
    data: Array<components.UnifiedCrmUserOutput>;
};

export type ListCrmUsersResponse = {
    httpMeta: components.HTTPMetadata;
    object?: ListCrmUsersResponseBody | undefined;
};

/** @internal */
export const ListCrmUsersRequest$inboundSchema: z.ZodType<
    ListCrmUsersRequest,
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
export type ListCrmUsersRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit: number;
    cursor?: string | undefined;
};

/** @internal */
export const ListCrmUsersRequest$outboundSchema: z.ZodType<
    ListCrmUsersRequest$Outbound,
    z.ZodTypeDef,
    ListCrmUsersRequest
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
export namespace ListCrmUsersRequest$ {
    /** @deprecated use `ListCrmUsersRequest$inboundSchema` instead. */
    export const inboundSchema = ListCrmUsersRequest$inboundSchema;
    /** @deprecated use `ListCrmUsersRequest$outboundSchema` instead. */
    export const outboundSchema = ListCrmUsersRequest$outboundSchema;
    /** @deprecated use `ListCrmUsersRequest$Outbound` instead. */
    export type Outbound = ListCrmUsersRequest$Outbound;
}

/** @internal */
export const ListCrmUsersResponseBody$inboundSchema: z.ZodType<
    ListCrmUsersResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.string(),
        next_cursor: z.string(),
        data: z.array(components.UnifiedCrmUserOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListCrmUsersResponseBody$Outbound = {
    prev_cursor: string;
    next_cursor: string;
    data: Array<components.UnifiedCrmUserOutput$Outbound>;
};

/** @internal */
export const ListCrmUsersResponseBody$outboundSchema: z.ZodType<
    ListCrmUsersResponseBody$Outbound,
    z.ZodTypeDef,
    ListCrmUsersResponseBody
> = z
    .object({
        prevCursor: z.string(),
        nextCursor: z.string(),
        data: z.array(components.UnifiedCrmUserOutput$outboundSchema),
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
export namespace ListCrmUsersResponseBody$ {
    /** @deprecated use `ListCrmUsersResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListCrmUsersResponseBody$inboundSchema;
    /** @deprecated use `ListCrmUsersResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListCrmUsersResponseBody$outboundSchema;
    /** @deprecated use `ListCrmUsersResponseBody$Outbound` instead. */
    export type Outbound = ListCrmUsersResponseBody$Outbound;
}

/** @internal */
export const ListCrmUsersResponse$inboundSchema: z.ZodType<
    ListCrmUsersResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => ListCrmUsersResponseBody$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type ListCrmUsersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: ListCrmUsersResponseBody$Outbound | undefined;
};

/** @internal */
export const ListCrmUsersResponse$outboundSchema: z.ZodType<
    ListCrmUsersResponse$Outbound,
    z.ZodTypeDef,
    ListCrmUsersResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => ListCrmUsersResponseBody$outboundSchema).optional(),
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
export namespace ListCrmUsersResponse$ {
    /** @deprecated use `ListCrmUsersResponse$inboundSchema` instead. */
    export const inboundSchema = ListCrmUsersResponse$inboundSchema;
    /** @deprecated use `ListCrmUsersResponse$outboundSchema` instead. */
    export const outboundSchema = ListCrmUsersResponse$outboundSchema;
    /** @deprecated use `ListCrmUsersResponse$Outbound` instead. */
    export type Outbound = ListCrmUsersResponse$Outbound;
}
