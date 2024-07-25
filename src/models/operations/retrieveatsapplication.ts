/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type RetrieveAtsApplicationRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * id of the application you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
};

export type RetrieveAtsApplicationResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAtsApplicationOutput?: components.UnifiedAtsApplicationOutput | undefined;
};

/** @internal */
export const RetrieveAtsApplicationRequest$inboundSchema: z.ZodType<
    RetrieveAtsApplicationRequest,
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
export type RetrieveAtsApplicationRequest$Outbound = {
    "x-connection-token": string;
    id: string;
    remote_data?: boolean | undefined;
};

/** @internal */
export const RetrieveAtsApplicationRequest$outboundSchema: z.ZodType<
    RetrieveAtsApplicationRequest$Outbound,
    z.ZodTypeDef,
    RetrieveAtsApplicationRequest
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
export namespace RetrieveAtsApplicationRequest$ {
    /** @deprecated use `RetrieveAtsApplicationRequest$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsApplicationRequest$inboundSchema;
    /** @deprecated use `RetrieveAtsApplicationRequest$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsApplicationRequest$outboundSchema;
    /** @deprecated use `RetrieveAtsApplicationRequest$Outbound` instead. */
    export type Outbound = RetrieveAtsApplicationRequest$Outbound;
}

/** @internal */
export const RetrieveAtsApplicationResponse$inboundSchema: z.ZodType<
    RetrieveAtsApplicationResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAtsApplicationOutput:
            components.UnifiedAtsApplicationOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAtsApplicationOutput: "unifiedAtsApplicationOutput",
        });
    });

/** @internal */
export type RetrieveAtsApplicationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAtsApplicationOutput?: components.UnifiedAtsApplicationOutput$Outbound | undefined;
};

/** @internal */
export const RetrieveAtsApplicationResponse$outboundSchema: z.ZodType<
    RetrieveAtsApplicationResponse$Outbound,
    z.ZodTypeDef,
    RetrieveAtsApplicationResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAtsApplicationOutput:
            components.UnifiedAtsApplicationOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAtsApplicationOutput: "UnifiedAtsApplicationOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAtsApplicationResponse$ {
    /** @deprecated use `RetrieveAtsApplicationResponse$inboundSchema` instead. */
    export const inboundSchema = RetrieveAtsApplicationResponse$inboundSchema;
    /** @deprecated use `RetrieveAtsApplicationResponse$outboundSchema` instead. */
    export const outboundSchema = RetrieveAtsApplicationResponse$outboundSchema;
    /** @deprecated use `RetrieveAtsApplicationResponse$Outbound` instead. */
    export type Outbound = RetrieveAtsApplicationResponse$Outbound;
}
