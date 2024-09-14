/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedAccountingPhonenumberOutputFieldMappings = {};

/**
 * The remote data of the phone number in the context of the 3rd Party
 */
export type UnifiedAccountingPhonenumberOutputRemoteData = {};

export type UnifiedAccountingPhonenumberOutput = {
  /**
   * The phone number
   */
  number?: string | null | undefined;
  /**
   * The type of phone number
   */
  type?: string | null | undefined;
  /**
   * The UUID of the associated company info
   */
  companyInfoId?: string | null | undefined;
  /**
   * The UUID of the associated contact
   */
  contactId?: string | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedAccountingPhonenumberOutputFieldMappings
    | null
    | undefined;
  /**
   * The UUID of the phone number record
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the phone number in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the phone number in the context of the 3rd Party
   */
  remoteData?: UnifiedAccountingPhonenumberOutputRemoteData | null | undefined;
  /**
   * The created date of the phone number record
   */
  createdAt?: Date | null | undefined;
  /**
   * The last modified date of the phone number record
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAccountingPhonenumberOutputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedAccountingPhonenumberOutputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingPhonenumberOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingPhonenumberOutputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedAccountingPhonenumberOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingPhonenumberOutputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingPhonenumberOutputFieldMappings$ {
  /** @deprecated use `UnifiedAccountingPhonenumberOutputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingPhonenumberOutputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedAccountingPhonenumberOutputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingPhonenumberOutputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedAccountingPhonenumberOutputFieldMappings$Outbound` instead. */
  export type Outbound =
    UnifiedAccountingPhonenumberOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingPhonenumberOutputRemoteData$inboundSchema:
  z.ZodType<
    UnifiedAccountingPhonenumberOutputRemoteData,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingPhonenumberOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAccountingPhonenumberOutputRemoteData$outboundSchema:
  z.ZodType<
    UnifiedAccountingPhonenumberOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingPhonenumberOutputRemoteData
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingPhonenumberOutputRemoteData$ {
  /** @deprecated use `UnifiedAccountingPhonenumberOutputRemoteData$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingPhonenumberOutputRemoteData$inboundSchema;
  /** @deprecated use `UnifiedAccountingPhonenumberOutputRemoteData$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingPhonenumberOutputRemoteData$outboundSchema;
  /** @deprecated use `UnifiedAccountingPhonenumberOutputRemoteData$Outbound` instead. */
  export type Outbound = UnifiedAccountingPhonenumberOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAccountingPhonenumberOutput$inboundSchema: z.ZodType<
  UnifiedAccountingPhonenumberOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  number: z.nullable(z.string()).optional(),
  type: z.nullable(z.string()).optional(),
  company_info_id: z.nullable(z.string()).optional(),
  contact_id: z.string().optional(),
  field_mappings: z.nullable(
    z.lazy(() => UnifiedAccountingPhonenumberOutputFieldMappings$inboundSchema),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remote_id: z.nullable(z.string()).optional(),
  remote_data: z.nullable(
    z.lazy(() => UnifiedAccountingPhonenumberOutputRemoteData$inboundSchema),
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
    "contact_id": "contactId",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedAccountingPhonenumberOutput$Outbound = {
  number?: string | null | undefined;
  type?: string | null | undefined;
  company_info_id?: string | null | undefined;
  contact_id?: string | undefined;
  field_mappings?:
    | UnifiedAccountingPhonenumberOutputFieldMappings$Outbound
    | null
    | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?:
    | UnifiedAccountingPhonenumberOutputRemoteData$Outbound
    | null
    | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAccountingPhonenumberOutput$outboundSchema: z.ZodType<
  UnifiedAccountingPhonenumberOutput$Outbound,
  z.ZodTypeDef,
  UnifiedAccountingPhonenumberOutput
> = z.object({
  number: z.nullable(z.string()).optional(),
  type: z.nullable(z.string()).optional(),
  companyInfoId: z.nullable(z.string()).optional(),
  contactId: z.string().optional(),
  fieldMappings: z.nullable(
    z.lazy(() =>
      UnifiedAccountingPhonenumberOutputFieldMappings$outboundSchema
    ),
  ).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(
    z.lazy(() => UnifiedAccountingPhonenumberOutputRemoteData$outboundSchema),
  ).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    companyInfoId: "company_info_id",
    contactId: "contact_id",
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
export namespace UnifiedAccountingPhonenumberOutput$ {
  /** @deprecated use `UnifiedAccountingPhonenumberOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAccountingPhonenumberOutput$inboundSchema;
  /** @deprecated use `UnifiedAccountingPhonenumberOutput$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingPhonenumberOutput$outboundSchema;
  /** @deprecated use `UnifiedAccountingPhonenumberOutput$Outbound` instead. */
  export type Outbound = UnifiedAccountingPhonenumberOutput$Outbound;
}
