/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The created date of the object
 */
export type UnifiedCrmStageOutputCreatedAt = {};

/**
 * The modified date of the object
 */
export type UnifiedCrmStageOutputModifiedAt = {};

export type UnifiedCrmStageOutput = {
  /**
   * The name of the stage
   */
  stageName: string | null;
  /**
   * The custom field mappings of the stage between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the stage
   */
  id?: string | null | undefined;
  /**
   * The ID of the stage in the context of the Crm 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the stage in the context of the Crm 3rd Party
   */
  remoteData?: { [k: string]: any } | null | undefined;
  /**
   * The created date of the object
   */
  createdAt?: UnifiedCrmStageOutputCreatedAt | null | undefined;
  /**
   * The modified date of the object
   */
  modifiedAt?: UnifiedCrmStageOutputModifiedAt | null | undefined;
};

/** @internal */
export const UnifiedCrmStageOutputCreatedAt$inboundSchema: z.ZodType<
  UnifiedCrmStageOutputCreatedAt,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UnifiedCrmStageOutputCreatedAt$Outbound = {};

/** @internal */
export const UnifiedCrmStageOutputCreatedAt$outboundSchema: z.ZodType<
  UnifiedCrmStageOutputCreatedAt$Outbound,
  z.ZodTypeDef,
  UnifiedCrmStageOutputCreatedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmStageOutputCreatedAt$ {
  /** @deprecated use `UnifiedCrmStageOutputCreatedAt$inboundSchema` instead. */
  export const inboundSchema = UnifiedCrmStageOutputCreatedAt$inboundSchema;
  /** @deprecated use `UnifiedCrmStageOutputCreatedAt$outboundSchema` instead. */
  export const outboundSchema = UnifiedCrmStageOutputCreatedAt$outboundSchema;
  /** @deprecated use `UnifiedCrmStageOutputCreatedAt$Outbound` instead. */
  export type Outbound = UnifiedCrmStageOutputCreatedAt$Outbound;
}

/** @internal */
export const UnifiedCrmStageOutputModifiedAt$inboundSchema: z.ZodType<
  UnifiedCrmStageOutputModifiedAt,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UnifiedCrmStageOutputModifiedAt$Outbound = {};

/** @internal */
export const UnifiedCrmStageOutputModifiedAt$outboundSchema: z.ZodType<
  UnifiedCrmStageOutputModifiedAt$Outbound,
  z.ZodTypeDef,
  UnifiedCrmStageOutputModifiedAt
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedCrmStageOutputModifiedAt$ {
  /** @deprecated use `UnifiedCrmStageOutputModifiedAt$inboundSchema` instead. */
  export const inboundSchema = UnifiedCrmStageOutputModifiedAt$inboundSchema;
  /** @deprecated use `UnifiedCrmStageOutputModifiedAt$outboundSchema` instead. */
  export const outboundSchema = UnifiedCrmStageOutputModifiedAt$outboundSchema;
  /** @deprecated use `UnifiedCrmStageOutputModifiedAt$Outbound` instead. */
  export type Outbound = UnifiedCrmStageOutputModifiedAt$Outbound;
}

/** @internal */
export const UnifiedCrmStageOutput$inboundSchema: z.ZodType<
  UnifiedCrmStageOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  stage_name: z.nullable(z.string()),
  field_mappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(z.record(z.any())).optional(),
  created_at: z.nullable(
    z.lazy(() => UnifiedCrmStageOutputCreatedAt$inboundSchema),
  ).optional(),
  modified_at: z.nullable(
    z.lazy(() => UnifiedCrmStageOutputModifiedAt$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "stage_name": "stageName",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedCrmStageOutput$Outbound = {
  stage_name: string | null;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: UnifiedCrmStageOutputCreatedAt$Outbound | null | undefined;
  modified_at?: UnifiedCrmStageOutputModifiedAt$Outbound | null | undefined;
};

/** @internal */
export const UnifiedCrmStageOutput$outboundSchema: z.ZodType<
  UnifiedCrmStageOutput$Outbound,
  z.ZodTypeDef,
  UnifiedCrmStageOutput
> = z.object({
  stageName: z.nullable(z.string()),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(
    z.lazy(() => UnifiedCrmStageOutputCreatedAt$outboundSchema),
  ).optional(),
  modifiedAt: z.nullable(
    z.lazy(() => UnifiedCrmStageOutputModifiedAt$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    stageName: "stage_name",
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
export namespace UnifiedCrmStageOutput$ {
  /** @deprecated use `UnifiedCrmStageOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedCrmStageOutput$inboundSchema;
  /** @deprecated use `UnifiedCrmStageOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedCrmStageOutput$outboundSchema;
  /** @deprecated use `UnifiedCrmStageOutput$Outbound` instead. */
  export type Outbound = UnifiedCrmStageOutput$Outbound;
}
