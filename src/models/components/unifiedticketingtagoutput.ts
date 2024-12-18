/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedTicketingTagOutput = {
  /**
   * The name of the tag
   */
  name: string | null;
  /**
   * The custom field mappings of the tag between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the tag
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the tag in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the tag in the context of the 3rd Party
   */
  remoteData?: { [k: string]: any } | null | undefined;
  /**
   * The created date of the tag
   */
  createdAt?: Date | null | undefined;
  /**
   * The modified date of the tag
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedTicketingTagOutput$inboundSchema: z.ZodType<
  UnifiedTicketingTagOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
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
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedTicketingTagOutput$Outbound = {
  name: string | null;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedTicketingTagOutput$outboundSchema: z.ZodType<
  UnifiedTicketingTagOutput$Outbound,
  z.ZodTypeDef,
  UnifiedTicketingTagOutput
> = z.object({
  name: z.nullable(z.string()),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
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
export namespace UnifiedTicketingTagOutput$ {
  /** @deprecated use `UnifiedTicketingTagOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedTicketingTagOutput$inboundSchema;
  /** @deprecated use `UnifiedTicketingTagOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedTicketingTagOutput$outboundSchema;
  /** @deprecated use `UnifiedTicketingTagOutput$Outbound` instead. */
  export type Outbound = UnifiedTicketingTagOutput$Outbound;
}

export function unifiedTicketingTagOutputToJSON(
  unifiedTicketingTagOutput: UnifiedTicketingTagOutput,
): string {
  return JSON.stringify(
    UnifiedTicketingTagOutput$outboundSchema.parse(unifiedTicketingTagOutput),
  );
}

export function unifiedTicketingTagOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedTicketingTagOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedTicketingTagOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedTicketingTagOutput' from JSON`,
  );
}
