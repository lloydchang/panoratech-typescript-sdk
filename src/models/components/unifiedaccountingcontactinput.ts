/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedAccountingContactInput = {};

/** @internal */
export const UnifiedAccountingContactInput$inboundSchema: z.ZodType<
    UnifiedAccountingContactInput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingContactInput$Outbound = {};

/** @internal */
export const UnifiedAccountingContactInput$outboundSchema: z.ZodType<
    UnifiedAccountingContactInput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingContactInput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingContactInput$ {
    /** @deprecated use `UnifiedAccountingContactInput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingContactInput$inboundSchema;
    /** @deprecated use `UnifiedAccountingContactInput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingContactInput$outboundSchema;
    /** @deprecated use `UnifiedAccountingContactInput$Outbound` instead. */
    export type Outbound = UnifiedAccountingContactInput$Outbound;
}
