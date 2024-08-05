/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListFilestorageFolderRequest = {
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

export type ListFilestorageFolderResponseBody = {
    prevCursor: string | null;
    nextCursor: string | null;
    data: Array<components.UnifiedFilestorageFolderOutput>;
};

/** @internal */
export const ListFilestorageFolderRequest$inboundSchema: z.ZodType<
    ListFilestorageFolderRequest,
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
export type ListFilestorageFolderRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
};

/** @internal */
export const ListFilestorageFolderRequest$outboundSchema: z.ZodType<
    ListFilestorageFolderRequest$Outbound,
    z.ZodTypeDef,
    ListFilestorageFolderRequest
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
export namespace ListFilestorageFolderRequest$ {
    /** @deprecated use `ListFilestorageFolderRequest$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageFolderRequest$inboundSchema;
    /** @deprecated use `ListFilestorageFolderRequest$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageFolderRequest$outboundSchema;
    /** @deprecated use `ListFilestorageFolderRequest$Outbound` instead. */
    export type Outbound = ListFilestorageFolderRequest$Outbound;
}

/** @internal */
export const ListFilestorageFolderResponseBody$inboundSchema: z.ZodType<
    ListFilestorageFolderResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        prev_cursor: z.nullable(z.string()),
        next_cursor: z.nullable(z.string()),
        data: z.array(components.UnifiedFilestorageFolderOutput$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            prev_cursor: "prevCursor",
            next_cursor: "nextCursor",
        });
    });

/** @internal */
export type ListFilestorageFolderResponseBody$Outbound = {
    prev_cursor: string | null;
    next_cursor: string | null;
    data: Array<components.UnifiedFilestorageFolderOutput$Outbound>;
};

/** @internal */
export const ListFilestorageFolderResponseBody$outboundSchema: z.ZodType<
    ListFilestorageFolderResponseBody$Outbound,
    z.ZodTypeDef,
    ListFilestorageFolderResponseBody
> = z
    .object({
        prevCursor: z.nullable(z.string()),
        nextCursor: z.nullable(z.string()),
        data: z.array(components.UnifiedFilestorageFolderOutput$outboundSchema),
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
export namespace ListFilestorageFolderResponseBody$ {
    /** @deprecated use `ListFilestorageFolderResponseBody$inboundSchema` instead. */
    export const inboundSchema = ListFilestorageFolderResponseBody$inboundSchema;
    /** @deprecated use `ListFilestorageFolderResponseBody$outboundSchema` instead. */
    export const outboundSchema = ListFilestorageFolderResponseBody$outboundSchema;
    /** @deprecated use `ListFilestorageFolderResponseBody$Outbound` instead. */
    export type Outbound = ListFilestorageFolderResponseBody$Outbound;
}
