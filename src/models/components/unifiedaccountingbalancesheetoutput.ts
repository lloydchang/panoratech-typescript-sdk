/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  LineItem,
  LineItem$inboundSchema,
  LineItem$Outbound,
  LineItem$outboundSchema,
} from "./lineitem.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedAccountingBalancesheetOutputFieldMappings = {};

/**
 * The remote data of the balance sheet in the context of the 3rd Party
 */
export type UnifiedAccountingBalancesheetOutputRemoteData = {};

export type UnifiedAccountingBalancesheetOutput = {
  /**
   * The name of the balance sheet
   */
  name?: string | null | undefined;
  /**
   * The currency used in the balance sheet
   */
  currency?: string | null | undefined;
  /**
   * The UUID of the associated company info
   */
  companyInfoId?: string | null | undefined;
  /**
   * The date of the balance sheet
   */
  date?: Date | null | undefined;
  /**
   * The net assets value
   */
  netAssets?: number | null | undefined;
  /**
   * The list of assets
   */
  assets?: Array<string> | null | undefined;
  /**
   * The list of liabilities
   */
  liabilities?: Array<string> | null | undefined;
  /**
   * The list of equity items
   */
  equity?: Array<string> | null | undefined;
  /**
   * The date when the balance sheet was generated in the remote system
   */
  remoteGeneratedAt?: Date | null | undefined;
  /**
   * The report items associated with this balance sheet
   */
  lineItems?: Array<LineItem> | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedAccountingBalancesheetOutputFieldMappings
    | null
    | undefined;
  /**
   * The UUID of the balance sheet record
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the balance sheet in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the balance sheet in the context of the 3rd Party
   */
  remoteData?: UnifiedAccountingBalancesheetOutputRemoteData | null | undefined;
  /**
   * The created date of the balance sheet record
   */
  createdAt?: Date | null | undefined;
  /**
   * The last modified date of the balance sheet record
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAccountingBalancesheetOutputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedAccountingBalancesheetOutputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingBalancesheetOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingBalancesheetOutputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedAccountingBalancesheetOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingBalancesheetOutputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingBalancesheetOutputFieldMappings$ {
  /** @deprecated use `UnifiedAccountingBalancesheetOutputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingBalancesheetOutputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedAccountingBalancesheetOutputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingBalancesheetOutputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedAccountingBalancesheetOutputFieldMappings$Outbound` instead. */
  export type Outbound =
    UnifiedAccountingBalancesheetOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingBalancesheetOutputRemoteData$inboundSchema:
  z.ZodType<
    UnifiedAccountingBalancesheetOutputRemoteData,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingBalancesheetOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAccountingBalancesheetOutputRemoteData$outboundSchema:
  z.ZodType<
    UnifiedAccountingBalancesheetOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingBalancesheetOutputRemoteData
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingBalancesheetOutputRemoteData$ {
  /** @deprecated use `UnifiedAccountingBalancesheetOutputRemoteData$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingBalancesheetOutputRemoteData$inboundSchema;
  /** @deprecated use `UnifiedAccountingBalancesheetOutputRemoteData$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingBalancesheetOutputRemoteData$outboundSchema;
  /** @deprecated use `UnifiedAccountingBalancesheetOutputRemoteData$Outbound` instead. */
  export type Outbound = UnifiedAccountingBalancesheetOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAccountingBalancesheetOutput$inboundSchema: z.ZodType<
  UnifiedAccountingBalancesheetOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  currency: z.nullable(z.string()).optional(),
  company_info_id: z.nullable(z.string()).optional(),
  date: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  net_assets: z.nullable(z.number()).optional(),
  assets: z.nullable(z.array(z.string())).optional(),
  liabilities: z.nullable(z.array(z.string())).optional(),
  equity: z.nullable(z.array(z.string())).optional(),
  remote_generated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  line_items: z.array(LineItem$inboundSchema).optional(),
  field_mappings: z.nullable(
    z.lazy(() =>
      UnifiedAccountingBalancesheetOutputFieldMappings$inboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(
    z.lazy(() => UnifiedAccountingBalancesheetOutputRemoteData$inboundSchema),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "company_info_id": "companyInfoId",
    "net_assets": "netAssets",
    "remote_generated_at": "remoteGeneratedAt",
    "line_items": "lineItems",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedAccountingBalancesheetOutput$Outbound = {
  name?: string | null | undefined;
  currency?: string | null | undefined;
  company_info_id?: string | null | undefined;
  date?: string | null | undefined;
  net_assets?: number | null | undefined;
  assets?: Array<string> | null | undefined;
  liabilities?: Array<string> | null | undefined;
  equity?: Array<string> | null | undefined;
  remote_generated_at?: string | null | undefined;
  line_items?: Array<LineItem$Outbound> | undefined;
  field_mappings?:
    | UnifiedAccountingBalancesheetOutputFieldMappings$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?:
    | UnifiedAccountingBalancesheetOutputRemoteData$Outbound
    | null
    | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAccountingBalancesheetOutput$outboundSchema: z.ZodType<
  UnifiedAccountingBalancesheetOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAccountingBalancesheetOutput
> = z.object({
  name: z.nullable(z.string()).optional(),
  currency: z.nullable(z.string()).optional(),
  companyInfoId: z.nullable(z.string()).optional(),
  date: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  netAssets: z.nullable(z.number()).optional(),
  assets: z.nullable(z.array(z.string())).optional(),
  liabilities: z.nullable(z.array(z.string())).optional(),
  equity: z.nullable(z.array(z.string())).optional(),
  remoteGeneratedAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  lineItems: z.array(LineItem$outboundSchema).optional(),
  fieldMappings: z.nullable(
    z.lazy(() =>
      UnifiedAccountingBalancesheetOutputFieldMappings$outboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(
    z.lazy(() => UnifiedAccountingBalancesheetOutputRemoteData$outboundSchema),
  ).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    companyInfoId: "company_info_id",
    netAssets: "net_assets",
    remoteGeneratedAt: "remote_generated_at",
    lineItems: "line_items",
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
export namespace UnifiedAccountingBalancesheetOutput$ {
  /** @deprecated use `UnifiedAccountingBalancesheetOutput$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingBalancesheetOutput$inboundSchema;
  /** @deprecated use `UnifiedAccountingBalancesheetOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingBalancesheetOutput$outboundSchema;
  /** @deprecated use `UnifiedAccountingBalancesheetOutput$Outbound` instead. */
  export type Outbound = UnifiedAccountingBalancesheetOutput$Outbound;
}
