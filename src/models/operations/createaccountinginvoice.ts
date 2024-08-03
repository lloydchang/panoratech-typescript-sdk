/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateAccountingInvoiceRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedAccountingInvoiceInput: components.UnifiedAccountingInvoiceInput;
};

/** @internal */
export const CreateAccountingInvoiceRequest$inboundSchema: z.ZodType<
    CreateAccountingInvoiceRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "x-connection-token": z.string(),
        remote_data: z.boolean().optional(),
        UnifiedAccountingInvoiceInput: components.UnifiedAccountingInvoiceInput$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "x-connection-token": "xConnectionToken",
            remote_data: "remoteData",
            UnifiedAccountingInvoiceInput: "unifiedAccountingInvoiceInput",
        });
    });

/** @internal */
export type CreateAccountingInvoiceRequest$Outbound = {
    "x-connection-token": string;
    remote_data?: boolean | undefined;
    UnifiedAccountingInvoiceInput: components.UnifiedAccountingInvoiceInput$Outbound;
};

/** @internal */
export const CreateAccountingInvoiceRequest$outboundSchema: z.ZodType<
    CreateAccountingInvoiceRequest$Outbound,
    z.ZodTypeDef,
    CreateAccountingInvoiceRequest
> = z
    .object({
        xConnectionToken: z.string(),
        remoteData: z.boolean().optional(),
        unifiedAccountingInvoiceInput: components.UnifiedAccountingInvoiceInput$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xConnectionToken: "x-connection-token",
            remoteData: "remote_data",
            unifiedAccountingInvoiceInput: "UnifiedAccountingInvoiceInput",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAccountingInvoiceRequest$ {
    /** @deprecated use `CreateAccountingInvoiceRequest$inboundSchema` instead. */
    export const inboundSchema = CreateAccountingInvoiceRequest$inboundSchema;
    /** @deprecated use `CreateAccountingInvoiceRequest$outboundSchema` instead. */
    export const outboundSchema = CreateAccountingInvoiceRequest$outboundSchema;
    /** @deprecated use `CreateAccountingInvoiceRequest$Outbound` instead. */
    export type Outbound = CreateAccountingInvoiceRequest$Outbound;
}
