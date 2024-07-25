/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveHrisBankinfoRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the bankinfo you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveHrisBankinfoResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedHrisBankinfoOutput?: components.UnifiedHrisBankinfoOutput | undefined;
};

/** @internal */
export const RetrieveHrisBankinfoRequest$inboundSchema: z.ZodType<
    RetrieveHrisBankinfoRequest,
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
export type RetrieveHrisBankinfoRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveHrisBankinfoRequest$outboundSchema: z.ZodType<
    RetrieveHrisBankinfoRequest$Outbound,
    z.ZodTypeDef,
    RetrieveHrisBankinfoRequest
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
export namespace RetrieveHrisBankinfoRequest$ {
    /** @deprecated use `RetrieveHrisBankinfoRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisBankinfoRequest$inboundSchema;
    /** @deprecated use `RetrieveHrisBankinfoRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisBankinfoRequest$outboundSchema;
    /** @deprecated use `RetrieveHrisBankinfoRequest$Outbound` instead. */
    export type Outbound = RetrieveHrisBankinfoRequest$Outbound;
}

/** @internal */
export const RetrieveHrisBankinfoResponse$inboundSchema: z.ZodType<
    RetrieveHrisBankinfoResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedHrisBankinfoOutput: components.UnifiedHrisBankinfoOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedHrisBankinfoOutput: "unifiedHrisBankinfoOutput",
        });
    });

/** @internal */
export type RetrieveHrisBankinfoResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedHrisBankinfoOutput?: components.UnifiedHrisBankinfoOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveHrisBankinfoResponse$outboundSchema: z.ZodType<
    RetrieveHrisBankinfoResponse$Outbound,
    z.ZodTypeDef,
    RetrieveHrisBankinfoResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedHrisBankinfoOutput: components.UnifiedHrisBankinfoOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedHrisBankinfoOutput: "UnifiedHrisBankinfoOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveHrisBankinfoResponse$ {
    /** @deprecated use `RetrieveHrisBankinfoResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveHrisBankinfoResponse$inboundSchema;
    /** @deprecated use `RetrieveHrisBankinfoResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveHrisBankinfoResponse$outboundSchema;
    /** @deprecated use `RetrieveHrisBankinfoResponse$Outbound` instead. */
    export type Outbound = RetrieveHrisBankinfoResponse$Outbound;
}
