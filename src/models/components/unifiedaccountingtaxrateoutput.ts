/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedAccountingTaxrateOutputFieldMappings = {};

/**
 * The remote data of the tax rate in the context of the 3rd Party
 */
export type UnifiedAccountingTaxrateOutputRemoteData = {};

export type UnifiedAccountingTaxrateOutput = {
  /**
   * The description of the tax rate
   */
  description?: string | null | undefined;
  /**
   * The total tax rate in basis points (e.g., 2000 for 20%)
   */
  totalTaxRatge?: number | null | undefined;
  /**
   * The effective tax rate in basis points (e.g., 1900 for 19%)
   */
  effectiveTaxRate?: number | null | undefined;
  /**
   * The UUID of the associated company
   */
  companyId?: string | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedAccountingTaxrateOutputFieldMappings
    | null
    | undefined;
  /**
   * The UUID of the tax rate record
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the tax rate in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the tax rate in the context of the 3rd Party
   */
  remoteData?: UnifiedAccountingTaxrateOutputRemoteData | null | undefined;
  /**
   * The created date of the tax rate record
   */
  createdAt?: Date | null | undefined;
  /**
   * The last modified date of the tax rate record
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAccountingTaxrateOutputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedAccountingTaxrateOutputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingTaxrateOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingTaxrateOutputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedAccountingTaxrateOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingTaxrateOutputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingTaxrateOutputFieldMappings$ {
  /** @deprecated use `UnifiedAccountingTaxrateOutputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingTaxrateOutputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedAccountingTaxrateOutputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingTaxrateOutputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedAccountingTaxrateOutputFieldMappings$Outbound` instead. */
  export type Outbound = UnifiedAccountingTaxrateOutputFieldMappings$Outbound;
}

export function unifiedAccountingTaxrateOutputFieldMappingsToJSON(
  unifiedAccountingTaxrateOutputFieldMappings:
    UnifiedAccountingTaxrateOutputFieldMappings,
): string {
  return JSON.stringify(
    UnifiedAccountingTaxrateOutputFieldMappings$outboundSchema.parse(
      unifiedAccountingTaxrateOutputFieldMappings,
    ),
  );
}

export function unifiedAccountingTaxrateOutputFieldMappingsFromJSON(
  jsonString: string,
): SafeParseResult<
  UnifiedAccountingTaxrateOutputFieldMappings,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedAccountingTaxrateOutputFieldMappings$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UnifiedAccountingTaxrateOutputFieldMappings' from JSON`,
  );
}

/** @internal */
export const UnifiedAccountingTaxrateOutputRemoteData$inboundSchema: z.ZodType<
  UnifiedAccountingTaxrateOutputRemoteData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingTaxrateOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAccountingTaxrateOutputRemoteData$outboundSchema: z.ZodType<
  UnifiedAccountingTaxrateOutputRemoteData$Outbound,
  z.ZodTypeDef,
  UnifiedAccountingTaxrateOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingTaxrateOutputRemoteData$ {
  /** @deprecated use `UnifiedAccountingTaxrateOutputRemoteData$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingTaxrateOutputRemoteData$inboundSchema;
  /** @deprecated use `UnifiedAccountingTaxrateOutputRemoteData$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingTaxrateOutputRemoteData$outboundSchema;
  /** @deprecated use `UnifiedAccountingTaxrateOutputRemoteData$Outbound` instead. */
  export type Outbound = UnifiedAccountingTaxrateOutputRemoteData$Outbound;
}

export function unifiedAccountingTaxrateOutputRemoteDataToJSON(
  unifiedAccountingTaxrateOutputRemoteData:
    UnifiedAccountingTaxrateOutputRemoteData,
): string {
  return JSON.stringify(
    UnifiedAccountingTaxrateOutputRemoteData$outboundSchema.parse(
      unifiedAccountingTaxrateOutputRemoteData,
    ),
  );
}

export function unifiedAccountingTaxrateOutputRemoteDataFromJSON(
  jsonString: string,
): SafeParseResult<
  UnifiedAccountingTaxrateOutputRemoteData,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedAccountingTaxrateOutputRemoteData$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UnifiedAccountingTaxrateOutputRemoteData' from JSON`,
  );
}

/** @internal */
export const UnifiedAccountingTaxrateOutput$inboundSchema: z.ZodType<
  UnifiedAccountingTaxrateOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  total_tax_ratge: z.nullable(z.number()).optional(),
  effective_tax_rate: z.nullable(z.number()).optional(),
  company_id: z.nullable(z.string()).optional(),
  field_mappings: z.nullable(
    z.lazy(() => UnifiedAccountingTaxrateOutputFieldMappings$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(
    z.lazy(() => UnifiedAccountingTaxrateOutputRemoteData$inboundSchema),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "total_tax_ratge": "totalTaxRatge",
    "effective_tax_rate": "effectiveTaxRate",
    "company_id": "companyId",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedAccountingTaxrateOutput$Outbound = {
  description?: string | null | undefined;
  total_tax_ratge?: number | null | undefined;
  effective_tax_rate?: number | null | undefined;
  company_id?: string | null | undefined;
  field_mappings?:
    | UnifiedAccountingTaxrateOutputFieldMappings$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?:
    | UnifiedAccountingTaxrateOutputRemoteData$Outbound
    | null
    | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAccountingTaxrateOutput$outboundSchema: z.ZodType<
  UnifiedAccountingTaxrateOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAccountingTaxrateOutput
> = z.object({
  description: z.nullable(z.string()).optional(),
  totalTaxRatge: z.nullable(z.number()).optional(),
  effectiveTaxRate: z.nullable(z.number()).optional(),
  companyId: z.nullable(z.string()).optional(),
  fieldMappings: z.nullable(
    z.lazy(() => UnifiedAccountingTaxrateOutputFieldMappings$outboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(
    z.lazy(() => UnifiedAccountingTaxrateOutputRemoteData$outboundSchema),
  ).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    totalTaxRatge: "total_tax_ratge",
    effectiveTaxRate: "effective_tax_rate",
    companyId: "company_id",
    fieldMappings: "field_mappings",
    remoteId: "remote_id",
    remoteData: "remote_data",
    createdAt: "created_at",
    modifiedAt: "modified_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingTaxrateOutput$ {
  /** @deprecated use `UnifiedAccountingTaxrateOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAccountingTaxrateOutput$inboundSchema;
  /** @deprecated use `UnifiedAccountingTaxrateOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedAccountingTaxrateOutput$outboundSchema;
  /** @deprecated use `UnifiedAccountingTaxrateOutput$Outbound` instead. */
  export type Outbound = UnifiedAccountingTaxrateOutput$Outbound;
}

export function unifiedAccountingTaxrateOutputToJSON(
  unifiedAccountingTaxrateOutput: UnifiedAccountingTaxrateOutput,
): string {
  return JSON.stringify(
    UnifiedAccountingTaxrateOutput$outboundSchema.parse(
      unifiedAccountingTaxrateOutput,
    ),
  );
}

export function unifiedAccountingTaxrateOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedAccountingTaxrateOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedAccountingTaxrateOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedAccountingTaxrateOutput' from JSON`,
  );
}
