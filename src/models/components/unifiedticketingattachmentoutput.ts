/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UnifiedTicketingAttachmentOutput = {
  /**
   * The file name of the attachment
   */
  fileName: string | null;
  /**
   * The file url of the attachment
   */
  fileUrl: string | null;
  /**
   * The uploader's UUID of the attachment
   */
  uploader: string | null;
  /**
   * The UUID of the ticket the attachment is tied to
   */
  ticketId?: string | null | undefined;
  /**
   * The UUID of the comment the attachment is tied to
   */
  commentId?: string | null | undefined;
  /**
   * The custom field mappings of the attachment between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the attachment
   */
  id?: string | null | undefined;
  /**
   * The id of the attachment in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the attachment in the context of the 3rd Party
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
export const UnifiedTicketingAttachmentOutput$inboundSchema: z.ZodType<
  UnifiedTicketingAttachmentOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_name: z.nullable(z.string()),
  file_url: z.nullable(z.string()),
  uploader: z.nullable(z.string()),
  ticket_id: z.nullable(z.string()).optional(),
  comment_id: z.nullable(z.string()).optional(),
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
    "file_name": "fileName",
    "file_url": "fileUrl",
    "ticket_id": "ticketId",
    "comment_id": "commentId",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedTicketingAttachmentOutput$Outbound = {
  file_name: string | null;
  file_url: string | null;
  uploader: string | null;
  ticket_id?: string | null | undefined;
  comment_id?: string | null | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedTicketingAttachmentOutput$outboundSchema: z.ZodType<
  UnifiedTicketingAttachmentOutput$Outbound,
  z.ZodTypeDef,
  UnifiedTicketingAttachmentOutput
> = z.object({
  fileName: z.nullable(z.string()),
  fileUrl: z.nullable(z.string()),
  uploader: z.nullable(z.string()),
  ticketId: z.nullable(z.string()).optional(),
  commentId: z.nullable(z.string()).optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    fileName: "file_name",
    fileUrl: "file_url",
    ticketId: "ticket_id",
    commentId: "comment_id",
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
export namespace UnifiedTicketingAttachmentOutput$ {
  /** @deprecated use `UnifiedTicketingAttachmentOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedTicketingAttachmentOutput$inboundSchema;
  /** @deprecated use `UnifiedTicketingAttachmentOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedTicketingAttachmentOutput$outboundSchema;
  /** @deprecated use `UnifiedTicketingAttachmentOutput$Outbound` instead. */
  export type Outbound = UnifiedTicketingAttachmentOutput$Outbound;
}

export function unifiedTicketingAttachmentOutputToJSON(
  unifiedTicketingAttachmentOutput: UnifiedTicketingAttachmentOutput,
): string {
  return JSON.stringify(
    UnifiedTicketingAttachmentOutput$outboundSchema.parse(
      unifiedTicketingAttachmentOutput,
    ),
  );
}

export function unifiedTicketingAttachmentOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedTicketingAttachmentOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedTicketingAttachmentOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedTicketingAttachmentOutput' from JSON`,
  );
}
