/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveHrisGroupRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the group you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveHrisGroupResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedHrisGroupOutput?: components.UnifiedHrisGroupOutput | undefined;
};

/** @internal */
export const RetrieveHrisGroupRequest$inboundSchema: z.ZodType<
    RetrieveHrisGroupRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        id: z.string(),
        remote_data: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
        });
    });

/** @internal */
export type RetrieveHrisGroupRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveHrisGroupRequest$outboundSchema: z.ZodType<
    RetrieveHrisGroupRequest$Outbound,
    z.ZodTypeDef,
    RetrieveHrisGroupRequest
> = z
    .object({
        xConnectionToken: z.string(),
        id: z.string(),
        remoteData: z.boolean().optional(),
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
export namespace RetrieveHrisGroupRequest$ {
    /** @deprecated use `RetrieveHrisGroupRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisGroupRequest$inboundSchema;
    /** @deprecated use `RetrieveHrisGroupRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisGroupRequest$outboundSchema;
    /** @deprecated use `RetrieveHrisGroupRequest$Outbound` instead. */
    export type Outbound = RetrieveHrisGroupRequest$Outbound;
}

/** @internal */
export const RetrieveHrisGroupResponse$inboundSchema: z.ZodType<
    RetrieveHrisGroupResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedHrisGroupOutput: components.UnifiedHrisGroupOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedHrisGroupOutput: "unifiedHrisGroupOutput",
        });
    });

/** @internal */
export type RetrieveHrisGroupResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedHrisGroupOutput?: components.UnifiedHrisGroupOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveHrisGroupResponse$outboundSchema: z.ZodType<
    RetrieveHrisGroupResponse$Outbound,
    z.ZodTypeDef,
    RetrieveHrisGroupResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedHrisGroupOutput: components.UnifiedHrisGroupOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedHrisGroupOutput: "UnifiedHrisGroupOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveHrisGroupResponse$ {
    /** @deprecated use `RetrieveHrisGroupResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisGroupResponse$inboundSchema;
    /** @deprecated use `RetrieveHrisGroupResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisGroupResponse$outboundSchema;
    /** @deprecated use `RetrieveHrisGroupResponse$Outbound` instead. */
    export type Outbound = RetrieveHrisGroupResponse$Outbound;
}
