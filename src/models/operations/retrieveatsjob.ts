/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAtsJobRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the job you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAtsJobResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAtsJobOutput?: components.UnifiedAtsJobOutput | undefined;
};

/** @internal */
export const RetrieveAtsJobRequest$inboundSchema: z.ZodType<
    RetrieveAtsJobRequest,
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
export type RetrieveAtsJobRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsJobRequest$outboundSchema: z.ZodType<
    RetrieveAtsJobRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAtsJobRequest
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
export namespace RetrieveAtsJobRequest$ {
    /** @deprecated use `RetrieveAtsJobRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsJobRequest$inboundSchema;
    /** @deprecated use `RetrieveAtsJobRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsJobRequest$outboundSchema;
    /** @deprecated use `RetrieveAtsJobRequest$Outbound` instead. */
    export type Outbound = RetrieveAtsJobRequest$Outbound;
}

/** @internal */
export const RetrieveAtsJobResponse$inboundSchema: z.ZodType<
    RetrieveAtsJobResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAtsJobOutput: components.UnifiedAtsJobOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAtsJobOutput: "unifiedAtsJobOutput",
        });
    });

/** @internal */
export type RetrieveAtsJobResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAtsJobOutput?: components.UnifiedAtsJobOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveAtsJobResponse$outboundSchema: z.ZodType<
    RetrieveAtsJobResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAtsJobResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAtsJobOutput: components.UnifiedAtsJobOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAtsJobOutput: "UnifiedAtsJobOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAtsJobResponse$ {
    /** @deprecated use `RetrieveAtsJobResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsJobResponse$inboundSchema;
    /** @deprecated use `RetrieveAtsJobResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsJobResponse$outboundSchema;
    /** @deprecated use `RetrieveAtsJobResponse$Outbound` instead. */
    export type Outbound = RetrieveAtsJobResponse$Outbound;
}
