/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateCrmCompanyRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
    unifiedCrmCompanyInput: components.UnifiedCrmCompanyInput;
};

export type CreateCrmCompanyResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedCrmCompanyOutput?: components.UnifiedCrmCompanyOutput | undefined;
};

/** @internal */
export const CreateCrmCompanyRequest$inboundSchema: z.ZodType<
    CreateCrmCompanyRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedCrmCompanyInput: components.UnifiedCrmCompanyInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedCrmCompanyInput: "unifiedCrmCompanyInput",
        });
    });

/** @internal */
export type CreateCrmCompanyRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedCrmCompanyInput: components.UnifiedCrmCompanyInput$Outbound;
};

/** @internal */
export const CreateCrmCompanyRequest$outboundSchema: z.ZodType<
    CreateCrmCompanyRequest$Outbound,
    z.ZodTypeDef,
    CreateCrmCompanyRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedCrmCompanyInput: components.UnifiedCrmCompanyInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedCrmCompanyInput: "UnifiedCrmCompanyInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmCompanyRequest$ {
    /** @deprecated use `CreateCrmCompanyRequest$inboundSchema` instead. */
    export const inboundSchema = CreateCrmCompanyRequest$inboundSchema;
    /** @deprecated use `CreateCrmCompanyRequest$outboundSchema` instead. */
    export const outboundSchema = CreateCrmCompanyRequest$outboundSchema;
    /** @deprecated use `CreateCrmCompanyRequest$Outbound` instead. */
    export type Outbound = CreateCrmCompanyRequest$Outbound;
}

/** @internal */
export const CreateCrmCompanyResponse$inboundSchema: z.ZodType<
    CreateCrmCompanyResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedCrmCompanyOutput: components.UnifiedCrmCompanyOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedCrmCompanyOutput: "unifiedCrmCompanyOutput",
        });
    });

/** @internal */
export type CreateCrmCompanyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedCrmCompanyOutput?: components.UnifiedCrmCompanyOutput$Outbound | undefined;
};

/** @internal */
export const CreateCrmCompanyResponse$outboundSchema: z.ZodType<
    CreateCrmCompanyResponse$Outbound,
    z.ZodTypeDef,
    CreateCrmCompanyResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedCrmCompanyOutput: components.UnifiedCrmCompanyOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedCrmCompanyOutput: "UnifiedCrmCompanyOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCrmCompanyResponse$ {
    /** @deprecated use `CreateCrmCompanyResponse$inboundSchema` instead. */
    export const inboundSchema = CreateCrmCompanyResponse$inboundSchema;
    /** @deprecated use `CreateCrmCompanyResponse$outboundSchema` instead. */
    export const outboundSchema = CreateCrmCompanyResponse$outboundSchema;
    /** @deprecated use `CreateCrmCompanyResponse$Outbound` instead. */
    export type Outbound = CreateCrmCompanyResponse$Outbound;
}
