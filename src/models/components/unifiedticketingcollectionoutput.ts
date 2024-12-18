/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedTicketingCollectionOutput = {
  /**
   * The name of the collection
   */
  name: string | null;
  /**
   * The description of the collection
   */
  description?: string | null | undefined;
  /**
   * The type of the collection. Authorized values are either PROJECT or LIST
   */
  collectionType?: string | null | undefined;
  /**
   * The UUID of the collection
   */
  id?: string | null | undefined;
  /**
   * The id of the collection in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the collection in the context of the 3rd Party
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
export const UnifiedTicketingCollectionOutput$inboundSchema: z.ZodType<
  UnifiedTicketingCollectionOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  collection_type: z.nullable(z.string()).optional(),
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
    "collection_type": "collectionType",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedTicketingCollectionOutput$Outbound = {
  name: string | null;
  description?: string | null | undefined;
  collection_type?: string | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedTicketingCollectionOutput$outboundSchema: z.ZodType<
  UnifiedTicketingCollectionOutput$Outbound,
  z.ZodTypeDef,
  UnifiedTicketingCollectionOutput
> = z.object({
  name: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  collectionType: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    collectionType: "collection_type",
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
export namespace UnifiedTicketingCollectionOutput$ {
  /** @deprecated use `UnifiedTicketingCollectionOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedTicketingCollectionOutput$inboundSchema;
  /** @deprecated use `UnifiedTicketingCollectionOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedTicketingCollectionOutput$outboundSchema;
  /** @deprecated use `UnifiedTicketingCollectionOutput$Outbound` instead. */
  export type Outbound = UnifiedTicketingCollectionOutput$Outbound;
}

export function unifiedTicketingCollectionOutputToJSON(
  unifiedTicketingCollectionOutput: UnifiedTicketingCollectionOutput,
): string {
  return JSON.stringify(
    UnifiedTicketingCollectionOutput$outboundSchema.parse(
      unifiedTicketingCollectionOutput,
    ),
  );
}

export function unifiedTicketingCollectionOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedTicketingCollectionOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedTicketingCollectionOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedTicketingCollectionOutput' from JSON`,
  );
}
