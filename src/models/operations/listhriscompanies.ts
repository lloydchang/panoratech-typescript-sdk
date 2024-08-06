/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListHrisCompaniesRequest = {
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

export type ListHrisCompaniesResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedHrisCompanyOutput>;
};

/** @internal */
export const ListHrisCompaniesRequest$inboundSchema: z.ZodType<
    ListHrisCompaniesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        limit: z.number().optional(),
        cursor: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type ListHrisCompaniesRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListHrisCompaniesRequest$outboundSchema: z.ZodType<
    ListHrisCompaniesRequest$Outbound,
    z.ZodTypeDef,
    ListHrisCompaniesRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        limit: z.number().optional(),
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
export namespace ListHrisCompaniesRequest$ {
    /** @deprecated use `ListHrisCompaniesRequest$inboundSchema` instead. */
    export const inboundSchema = ListHrisCompaniesRequest$inboundSchema;
    /** @deprecated use `ListHrisCompaniesRequest$outboundSchema` instead. */
    export const outboundSchema = ListHrisCompaniesRequest$outboundSchema;
    /** @deprecated use `ListHrisCompaniesRequest$Outbound` instead. */
    export type Outbound = ListHrisCompaniesRequest$Outbound;
}

/** @internal */
export const ListHrisCompaniesResponseBody$inboundSchema: z.ZodType<
    ListHrisCompaniesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisCompanyOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListHrisCompaniesResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedHrisCompanyOutput$Outbound>;
};

/** @internal */
export const ListHrisCompaniesResponseBody$outboundSchema: z.ZodType<
    ListHrisCompaniesResponseBody$Outbound,
    z.ZodTypeDef,
    ListHrisCompaniesResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedHrisCompanyOutput$outboundSchema),
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
export namespace ListHrisCompaniesResponseBody$ {
    /** @deprecated use `ListHrisCompaniesResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListHrisCompaniesResponseBody$inboundSchema;
    /** @deprecated use `ListHrisCompaniesResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListHrisCompaniesResponseBody$outboundSchema;
    /** @deprecated use `ListHrisCompaniesResponseBody$Outbound` instead. */
    export type Outbound = ListHrisCompaniesResponseBody$Outbound;
}