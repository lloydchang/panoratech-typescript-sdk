/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingIncomestatementOutput = {};

/** @internal */
export const UnifiedAccountingIncomestatementOutput$inboundSchema: z.ZodType<
    UnifiedAccountingIncomestatementOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingIncomestatementOutput$Outbound = {};

/** @internal */
export const UnifiedAccountingIncomestatementOutput$outboundSchema: z.ZodType<
    UnifiedAccountingIncomestatementOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingIncomestatementOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingIncomestatementOutput$ {
    /** @deprecated use `UnifiedAccountingIncomestatementOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingIncomestatementOutput$inboundSchema;
    /** @deprecated use `UnifiedAccountingIncomestatementOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingIncomestatementOutput$outboundSchema;
    /** @deprecated use `UnifiedAccountingIncomestatementOutput$Outbound` instead. */
    export type Outbound = UnifiedAccountingIncomestatementOutput$Outbound;
}
