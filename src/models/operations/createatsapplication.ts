/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAtsApplicationRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
    unifiedAtsApplicationInput: components.UnifiedAtsApplicationInput;
};

export type CreateAtsApplicationResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAtsApplicationOutput?: components.UnifiedAtsApplicationOutput | undefined;
};

/** @internal */
export const CreateAtsApplicationRequest$inboundSchema: z.ZodType<
    CreateAtsApplicationRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedAtsApplicationInput: components.UnifiedAtsApplicationInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedAtsApplicationInput: "unifiedAtsApplicationInput",
        });
    });

/** @internal */
export type CreateAtsApplicationRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedAtsApplicationInput: components.UnifiedAtsApplicationInput$Outbound;
};

/** @internal */
export const CreateAtsApplicationRequest$outboundSchema: z.ZodType<
    CreateAtsApplicationRequest$Outbound,
    z.ZodTypeDef,
    CreateAtsApplicationRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedAtsApplicationInput: components.UnifiedAtsApplicationInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedAtsApplicationInput: "UnifiedAtsApplicationInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAtsApplicationRequest$ {
    /** @deprecated use `CreateAtsApplicationRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAtsApplicationRequest$inboundSchema;
    /** @deprecated use `CreateAtsApplicationRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAtsApplicationRequest$outboundSchema;
    /** @deprecated use `CreateAtsApplicationRequest$Outbound` instead. */
    export type Outbound = CreateAtsApplicationRequest$Outbound;
}

/** @internal */
export const CreateAtsApplicationResponse$inboundSchema: z.ZodType<
    CreateAtsApplicationResponse,
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
export type CreateAtsApplicationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAtsApplicationOutput?: components.UnifiedAtsApplicationOutput$Outbound | undefined;
};

/** @internal */
export const CreateAtsApplicationResponse$outboundSchema: z.ZodType<
    CreateAtsApplicationResponse$Outbound,
    z.ZodTypeDef,
    CreateAtsApplicationResponse
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
export namespace CreateAtsApplicationResponse$ {
    /** @deprecated use `CreateAtsApplicationResponse$inboundSchema` instead. */
    export const inboundSchema = CreateAtsApplicationResponse$inboundSchema;
    /** @deprecated use `CreateAtsApplicationResponse$outboundSchema` instead. */
    export const outboundSchema = CreateAtsApplicationResponse$outboundSchema;
    /** @deprecated use `CreateAtsApplicationResponse$Outbound` instead. */
    export type Outbound = CreateAtsApplicationResponse$Outbound;
}
