/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAccountingContactRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedAccountingContactInput: components.UnifiedAccountingContactInput;
};

export type CreateAccountingContactResponse = {
    httpMeta: components.HTTPMetadata;
    unifiedAccountingContactOutput?: components.UnifiedAccountingContactOutput | undefined;
};

/** @internal */
export const CreateAccountingContactRequest$inboundSchema: z.ZodType<
    CreateAccountingContactRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedAccountingContactInput: components.UnifiedAccountingContactInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedAccountingContactInput: "unifiedAccountingContactInput",
        });
    });

/** @internal */
export type CreateAccountingContactRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedAccountingContactInput: components.UnifiedAccountingContactInput$Outbound;
};

/** @internal */
export const CreateAccountingContactRequest$outboundSchema: z.ZodType<
    CreateAccountingContactRequest$Outbound,
    z.ZodTypeDef,
    CreateAccountingContactRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedAccountingContactInput: components.UnifiedAccountingContactInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedAccountingContactInput: "UnifiedAccountingContactInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingContactRequest$ {
    /** @deprecated use `CreateAccountingContactRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAccountingContactRequest$inboundSchema;
    /** @deprecated use `CreateAccountingContactRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAccountingContactRequest$outboundSchema;
    /** @deprecated use `CreateAccountingContactRequest$Outbound` instead. */
    export type Outbound = CreateAccountingContactRequest$Outbound;
}

/** @internal */
export const CreateAccountingContactResponse$inboundSchema: z.ZodType<
    CreateAccountingContactResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        UnifiedAccountingContactOutput:
            components.UnifiedAccountingContactOutput$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            UnifiedAccountingContactOutput: "unifiedAccountingContactOutput",
        });
    });

/** @internal */
export type CreateAccountingContactResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    UnifiedAccountingContactOutput?: components.UnifiedAccountingContactOutput$Outbound | undefined;
};

/** @internal */
export const CreateAccountingContactResponse$outboundSchema: z.ZodType<
    CreateAccountingContactResponse$Outbound,
    z.ZodTypeDef,
    CreateAccountingContactResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        unifiedAccountingContactOutput:
            components.UnifiedAccountingContactOutput$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            unifiedAccountingContactOutput: "UnifiedAccountingContactOutput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingContactResponse$ {
    /** @deprecated use `CreateAccountingContactResponse$inboundSchema` instead. */
    export const inboundSchema = CreateAccountingContactResponse$inboundSchema;
    /** @deprecated use `CreateAccountingContactResponse$outboundSchema` instead. */
    export const outboundSchema = CreateAccountingContactResponse$outboundSchema;
    /** @deprecated use `CreateAccountingContactResponse$Outbound` instead. */
    export type Outbound = CreateAccountingContactResponse$Outbound;
}
