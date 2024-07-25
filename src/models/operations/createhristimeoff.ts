/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateHrisTimeoffRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    unifiedHrisTimeoffInput: components.UnifiedHrisTimeoffInput;
};

export type CreateHrisTimeoffResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedHrisTimeoffOutput?: components.UnifiedHrisTimeoffOutput | undefined;
};

/** @internal */
export const CreateHrisTimeoffRequest$inboundSchema: z.ZodType<
    CreateHrisTimeoffRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedHrisTimeoffInput: components.UnifiedHrisTimeoffInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedHrisTimeoffInput: "unifiedHrisTimeoffInput",
        });
    });

/** @internal */
export type CreateHrisTimeoffRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedHrisTimeoffInput: components.UnifiedHrisTimeoffInput$Outbound;
};

/** @internal */
export const CreateHrisTimeoffRequest$outboundSchema: z.ZodType<
    CreateHrisTimeoffRequest$Outbound,
    z.ZodTypeDef,
    CreateHrisTimeoffRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedHrisTimeoffInput: components.UnifiedHrisTimeoffInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedHrisTimeoffInput: "UnifiedHrisTimeoffInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateHrisTimeoffRequest$ {
    /** @deprecated use `CreateHrisTimeoffRequest$inboundSchema` instead. */
    export const inboundSchema = CreateHrisTimeoffRequest$inboundSchema;
    /** @deprecated use `CreateHrisTimeoffRequest$outboundSchema` instead. */
    export const outboundSchema = CreateHrisTimeoffRequest$outboundSchema;
    /** @deprecated use `CreateHrisTimeoffRequest$Outbound` instead. */
    export type Outbound = CreateHrisTimeoffRequest$Outbound;
}

/** @internal */
export const CreateHrisTimeoffResponse$inboundSchema: z.ZodType<
    CreateHrisTimeoffResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedHrisTimeoffOutput: components.UnifiedHrisTimeoffOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedHrisTimeoffOutput: "unifiedHrisTimeoffOutput",
        });
    });

/** @internal */
export type CreateHrisTimeoffResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedHrisTimeoffOutput?: components.UnifiedHrisTimeoffOutput$Outbound | undefined;
};

/** @internal */
export const CreateHrisTimeoffResponse$outboundSchema: z.ZodType<
    CreateHrisTimeoffResponse$Outbound,
    z.ZodTypeDef,
    CreateHrisTimeoffResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedHrisTimeoffOutput: components.UnifiedHrisTimeoffOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedHrisTimeoffOutput: "UnifiedHrisTimeoffOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateHrisTimeoffResponse$ {
    /** @deprecated use `CreateHrisTimeoffResponse$inboundSchema` instead. */
    export const inboundSchema = CreateHrisTimeoffResponse$inboundSchema;
    /** @deprecated use `CreateHrisTimeoffResponse$outboundSchema` instead. */
    export const outboundSchema = CreateHrisTimeoffResponse$outboundSchema;
    /** @deprecated use `CreateHrisTimeoffResponse$Outbound` instead. */
    export type Outbound = CreateHrisTimeoffResponse$Outbound;
}
