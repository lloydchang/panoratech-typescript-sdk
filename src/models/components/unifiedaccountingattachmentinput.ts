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
export type UnifiedAccountingAttachmentInputFieldMappings = {};

export type UnifiedAccountingAttachmentInput = {
  /**
   * The name of the attached file
   */
  fileName?: string | null | undefined;
  /**
   * The URL where the file can be accessed
   */
  fileUrl?: string | null | undefined;
  /**
   * The UUID of the associated account
   */
  accountId?: string | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?:
    | UnifiedAccountingAttachmentInputFieldMappings
    | null
    | undefined;
};

/** @internal */
export const UnifiedAccountingAttachmentInputFieldMappings$inboundSchema:
  z.ZodType<
    UnifiedAccountingAttachmentInputFieldMappings,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type UnifiedAccountingAttachmentInputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingAttachmentInputFieldMappings$outboundSchema:
  z.ZodType<
    UnifiedAccountingAttachmentInputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingAttachmentInputFieldMappings
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingAttachmentInputFieldMappings$ {
  /** @deprecated use `UnifiedAccountingAttachmentInputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedAccountingAttachmentInputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedAccountingAttachmentInputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedAccountingAttachmentInputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedAccountingAttachmentInputFieldMappings$Outbound` instead. */
  export type Outbound = UnifiedAccountingAttachmentInputFieldMappings$Outbound;
}

export function unifiedAccountingAttachmentInputFieldMappingsToJSON(
  unifiedAccountingAttachmentInputFieldMappings:
    UnifiedAccountingAttachmentInputFieldMappings,
): string {
  return JSON.stringify(
    UnifiedAccountingAttachmentInputFieldMappings$outboundSchema.parse(
      unifiedAccountingAttachmentInputFieldMappings,
    ),
  );
}

export function unifiedAccountingAttachmentInputFieldMappingsFromJSON(
  jsonString: string,
): SafeParseResult<
  UnifiedAccountingAttachmentInputFieldMappings,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedAccountingAttachmentInputFieldMappings$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UnifiedAccountingAttachmentInputFieldMappings' from JSON`,
  );
}

/** @internal */
export const UnifiedAccountingAttachmentInput$inboundSchema: z.ZodType<
  UnifiedAccountingAttachmentInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_name: z.nullable(z.string()).optional(),
  file_url: z.nullable(z.string()).optional(),
  account_id: z.nullable(z.string()).optional(),
  field_mappings: z.nullable(
    z.lazy(() => UnifiedAccountingAttachmentInputFieldMappings$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "file_name": "fileName",
    "file_url": "fileUrl",
    "account_id": "accountId",
    "field_mappings": "fieldMappings",
  });
});

/** @internal */
export type UnifiedAccountingAttachmentInput$Outbound = {
  file_name?: string | null | undefined;
  file_url?: string | null | undefined;
  account_id?: string | null | undefined;
  field_mappings?:
    | UnifiedAccountingAttachmentInputFieldMappings$Outbound
    | null
    | undefined;
};

/** @internal */
export const UnifiedAccountingAttachmentInput$outboundSchema: z.ZodType<
  UnifiedAccountingAttachmentInput$Outbound,
  z.ZodTypeDef,
  UnifiedAccountingAttachmentInput
> = z.object({
  fileName: z.nullable(z.string()).optional(),
  fileUrl: z.nullable(z.string()).optional(),
  accountId: z.nullable(z.string()).optional(),
  fieldMappings: z.nullable(
    z.lazy(() => UnifiedAccountingAttachmentInputFieldMappings$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    fileName: "file_name",
    fileUrl: "file_url",
    accountId: "account_id",
    fieldMappings: "field_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingAttachmentInput$ {
  /** @deprecated use `UnifiedAccountingAttachmentInput$inboundSchema` instead. */
  export const inboundSchema = UnifiedAccountingAttachmentInput$inboundSchema;
  /** @deprecated use `UnifiedAccountingAttachmentInput$outboundSchema` instead. */
  export const outboundSchema = UnifiedAccountingAttachmentInput$outboundSchema;
  /** @deprecated use `UnifiedAccountingAttachmentInput$Outbound` instead. */
  export type Outbound = UnifiedAccountingAttachmentInput$Outbound;
}

export function unifiedAccountingAttachmentInputToJSON(
  unifiedAccountingAttachmentInput: UnifiedAccountingAttachmentInput,
): string {
  return JSON.stringify(
    UnifiedAccountingAttachmentInput$outboundSchema.parse(
      unifiedAccountingAttachmentInput,
    ),
  );
}

export function unifiedAccountingAttachmentInputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedAccountingAttachmentInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedAccountingAttachmentInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedAccountingAttachmentInput' from JSON`,
  );
}
