/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedTicketingAccountOutput = {
  /**
   * The name of the account
   */
  name: string | null;
  /**
   * The domains of the account
   */
  domains?: Array<string> | null | undefined;
  /**
   * The custom field mappings of the account between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the account
   */
  id?: string | null | undefined;
  /**
   * The remote ID of the account in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the account in the context of the 3rd Party
   */
  remoteData?: { [k: string]: any } | null | undefined;
  /**
   * The created date of the account
   */
  createdAt?: Date | null | undefined;
  /**
   * The modified date of the account
   */
  modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedTicketingAccountOutput$inboundSchema: z.ZodType<
  UnifiedTicketingAccountOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  domains: z.nullable(z.array(z.string())).optional(),
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
export type UnifiedTicketingAccountOutput$Outbound = {
  name: string | null;
  domains?: Array<string> | null | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedTicketingAccountOutput$outboundSchema: z.ZodType<
  UnifiedTicketingAccountOutput$Outbound,
  z.ZodTypeDef,
  UnifiedTicketingAccountOutput
> = z.object({
  name: z.nullable(z.string()),
  domains: z.nullable(z.array(z.string())).optional(),
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
export namespace UnifiedTicketingAccountOutput$ {
  /** @deprecated use `UnifiedTicketingAccountOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedTicketingAccountOutput$inboundSchema;
  /** @deprecated use `UnifiedTicketingAccountOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedTicketingAccountOutput$outboundSchema;
  /** @deprecated use `UnifiedTicketingAccountOutput$Outbound` instead. */
  export type Outbound = UnifiedTicketingAccountOutput$Outbound;
}

export function unifiedTicketingAccountOutputToJSON(
  unifiedTicketingAccountOutput: UnifiedTicketingAccountOutput,
): string {
  return JSON.stringify(
    UnifiedTicketingAccountOutput$outboundSchema.parse(
      unifiedTicketingAccountOutput,
    ),
  );
}

export function unifiedTicketingAccountOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedTicketingAccountOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedTicketingAccountOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedTicketingAccountOutput' from JSON`,
  );
}
