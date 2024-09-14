/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UnifiedAtsJobinterviewstageOutput = {
  /**
   * The name of the job interview stage
   */
  name?: string | null | undefined;
  /**
   * The order of the stage
   */
  stageOrder?: number | null | undefined;
  /**
   * The UUID of the job
   */
  jobId?: string | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the job interview stage
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the job interview stage in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the job interview stage in the context of the 3rd Party
   */
  remoteData?: { [k: string]: any } | null | undefined;
  /**
   * The created date of the object
   */
  createdAt?: Date | null | undefined;
  /**
   * The modified date of the object
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAtsJobinterviewstageOutput$inboundSchema: z.ZodType<
  UnifiedAtsJobinterviewstageOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  stage_order: z.nullable(z.number()).optional(),
  job_id: z.nullable(z.string()).optional(),
  field_mappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(z.record(z.any())).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "stage_order": "stageOrder",
    "job_id": "jobId",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedAtsJobinterviewstageOutput$Outbound = {
  name?: string | null | undefined;
  stage_order?: number | null | undefined;
  job_id?: string | null | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAtsJobinterviewstageOutput$outboundSchema: z.ZodType<
  UnifiedAtsJobinterviewstageOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAtsJobinterviewstageOutput
> = z.object({
  name: z.nullable(z.string()).optional(),
  stageOrder: z.nullable(z.number()).optional(),
  jobId: z.nullable(z.string()).optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    stageOrder: "stage_order",
    jobId: "job_id",
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
export namespace UnifiedAtsJobinterviewstageOutput$ {
  /** @deprecated use `UnifiedAtsJobinterviewstageOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAtsJobinterviewstageOutput$inboundSchema;
  /** @deprecated use `UnifiedAtsJobinterviewstageOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAtsJobinterviewstageOutput$outboundSchema;
  /** @deprecated use `UnifiedAtsJobinterviewstageOutput$Outbound` instead. */
  export type Outbound = UnifiedAtsJobinterviewstageOutput$Outbound;
}
