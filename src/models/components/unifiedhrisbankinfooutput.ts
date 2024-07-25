/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedHrisBankinfoOutput = {};

/** @internal */
export const UnifiedHrisBankinfoOutput$inboundSchema: z.ZodType<
    UnifiedHrisBankinfoOutput,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedHrisBankinfoOutput$Outbound = {};

/** @internal */
export const UnifiedHrisBankinfoOutput$outboundSchema: z.ZodType<
    UnifiedHrisBankinfoOutput$Outbound,
    z.ZodTypeDef,
    UnifiedHrisBankinfoOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedHrisBankinfoOutput$ {
    /** @deprecated use `UnifiedHrisBankinfoOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedHrisBankinfoOutput$inboundSchema;
    /** @deprecated use `UnifiedHrisBankinfoOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedHrisBankinfoOutput$outboundSchema;
    /** @deprecated use `UnifiedHrisBankinfoOutput$Outbound` instead. */
    export type Outbound = UnifiedHrisBankinfoOutput$Outbound;
}
