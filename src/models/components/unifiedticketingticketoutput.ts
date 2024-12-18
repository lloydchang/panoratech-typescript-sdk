/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UnifiedTicketingAttachmentInput,
  UnifiedTicketingAttachmentInput$inboundSchema,
  UnifiedTicketingAttachmentInput$Outbound,
  UnifiedTicketingAttachmentInput$outboundSchema,
} from "./unifiedticketingattachmentinput.js";
import {
  UnifiedTicketingAttachmentOutput,
  UnifiedTicketingAttachmentOutput$inboundSchema,
  UnifiedTicketingAttachmentOutput$Outbound,
  UnifiedTicketingAttachmentOutput$outboundSchema,
} from "./unifiedticketingattachmentoutput.js";
import {
  UnifiedTicketingCollectionOutput,
  UnifiedTicketingCollectionOutput$inboundSchema,
  UnifiedTicketingCollectionOutput$Outbound,
  UnifiedTicketingCollectionOutput$outboundSchema,
} from "./unifiedticketingcollectionoutput.js";
import {
  UnifiedTicketingTagOutput,
  UnifiedTicketingTagOutput$inboundSchema,
  UnifiedTicketingTagOutput$Outbound,
  UnifiedTicketingTagOutput$outboundSchema,
} from "./unifiedticketingtagoutput.js";

export type Collections = UnifiedTicketingCollectionOutput | string;

export type Tags = UnifiedTicketingTagOutput | string;

export type UnifiedTicketingTicketOutputAttachments =
  | UnifiedTicketingAttachmentOutput
  | string;

/**
 * The comment of the ticket
 */
export type Comment = {
  /**
   * The body of the comment
   */
  body: string | null;
  /**
   * The html body of the comment
   */
  htmlBody?: string | null | undefined;
  /**
   * The public status of the comment
   */
  isPrivate?: boolean | null | undefined;
  /**
   * The creator type of the comment. Authorized values are either USER or CONTACT
   */
  creatorType?: string | null | undefined;
  /**
   * The UUID of the ticket the comment is tied to
   */
  ticketId?: string | null | undefined;
  /**
   * The UUID of the contact which the comment belongs to (if no user_id specified)
   */
  contactId?: string | null | undefined;
  /**
   * The UUID of the user which the comment belongs to (if no contact_id specified)
   */
  userId?: string | null | undefined;
  /**
   * The attachements UUIDs tied to the comment
   */
  attachments?:
    | Array<UnifiedTicketingAttachmentOutput | string>
    | null
    | undefined;
};

export type Attachments = UnifiedTicketingAttachmentInput | string;

export type UnifiedTicketingTicketOutput = {
  /**
   * The name of the ticket
   */
  name: string | null;
  /**
   * The status of the ticket. Authorized values are OPEN or CLOSED.
   */
  status?: string | null | undefined;
  /**
   * The description of the ticket
   */
  description: string | null;
  /**
   * The date the ticket is due
   */
  dueDate?: Date | null | undefined;
  /**
   * The type of the ticket. Authorized values are PROBLEM, QUESTION, or TASK
   */
  type?: string | null | undefined;
  /**
   * The UUID of the parent ticket
   */
  parentTicket?: string | null | undefined;
  /**
   * The collection UUIDs the ticket belongs to
   */
  collections?:
    | Array<UnifiedTicketingCollectionOutput | string>
    | null
    | undefined;
  /**
   * The tags names of the ticket
   */
  tags?: Array<UnifiedTicketingTagOutput | string> | null | undefined;
  /**
   * The date the ticket has been completed
   */
  completedAt?: Date | null | undefined;
  /**
   * The priority of the ticket. Authorized values are HIGH, MEDIUM or LOW.
   */
  priority?: string | null | undefined;
  /**
   * The users UUIDs the ticket is assigned to
   */
  assignedTo?: Array<string> | null | undefined;
  /**
   * The comment of the ticket
   */
  comment?: Comment | null | undefined;
  /**
   * The UUID of the account which the ticket belongs to
   */
  accountId?: string | null | undefined;
  /**
   * The UUID of the contact which the ticket belongs to
   */
  contactId?: string | null | undefined;
  /**
   * The attachements UUIDs tied to the ticket
   */
  attachments?:
    | Array<UnifiedTicketingAttachmentInput | string>
    | null
    | undefined;
  /**
   * The custom field mappings of the ticket between the remote 3rd party & Panora
   */
  fieldMappings?: { [k: string]: any } | null | undefined;
  /**
   * The UUID of the ticket
   */
  id?: string | null | undefined;
  /**
   * The id of the ticket in the context of the 3rd Party
   */
  remoteId?: string | null | undefined;
  /**
   * The remote data of the ticket in the context of the 3rd Party
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
export const Collections$inboundSchema: z.ZodType<
  Collections,
  z.ZodTypeDef,
  unknown
> = z.union([UnifiedTicketingCollectionOutput$inboundSchema, z.string()]);

/** @internal */
export type Collections$Outbound =
  | UnifiedTicketingCollectionOutput$Outbound
  | string;

/** @internal */
export const Collections$outboundSchema: z.ZodType<
  Collections$Outbound,
  z.ZodTypeDef,
  Collections
> = z.union([UnifiedTicketingCollectionOutput$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Collections$ {
  /** @deprecated use `Collections$inboundSchema` instead. */
  export const inboundSchema = Collections$inboundSchema;
  /** @deprecated use `Collections$outboundSchema` instead. */
  export const outboundSchema = Collections$outboundSchema;
  /** @deprecated use `Collections$Outbound` instead. */
  export type Outbound = Collections$Outbound;
}

export function collectionsToJSON(collections: Collections): string {
  return JSON.stringify(Collections$outboundSchema.parse(collections));
}

export function collectionsFromJSON(
  jsonString: string,
): SafeParseResult<Collections, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Collections$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Collections' from JSON`,
  );
}

/** @internal */
export const Tags$inboundSchema: z.ZodType<Tags, z.ZodTypeDef, unknown> = z
  .union([UnifiedTicketingTagOutput$inboundSchema, z.string()]);

/** @internal */
export type Tags$Outbound = UnifiedTicketingTagOutput$Outbound | string;

/** @internal */
export const Tags$outboundSchema: z.ZodType<Tags$Outbound, z.ZodTypeDef, Tags> =
  z.union([UnifiedTicketingTagOutput$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tags$ {
  /** @deprecated use `Tags$inboundSchema` instead. */
  export const inboundSchema = Tags$inboundSchema;
  /** @deprecated use `Tags$outboundSchema` instead. */
  export const outboundSchema = Tags$outboundSchema;
  /** @deprecated use `Tags$Outbound` instead. */
  export type Outbound = Tags$Outbound;
}

export function tagsToJSON(tags: Tags): string {
  return JSON.stringify(Tags$outboundSchema.parse(tags));
}

export function tagsFromJSON(
  jsonString: string,
): SafeParseResult<Tags, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Tags$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Tags' from JSON`,
  );
}

/** @internal */
export const UnifiedTicketingTicketOutputAttachments$inboundSchema: z.ZodType<
  UnifiedTicketingTicketOutputAttachments,
  z.ZodTypeDef,
  unknown
> = z.union([UnifiedTicketingAttachmentOutput$inboundSchema, z.string()]);

/** @internal */
export type UnifiedTicketingTicketOutputAttachments$Outbound =
  | UnifiedTicketingAttachmentOutput$Outbound
  | string;

/** @internal */
export const UnifiedTicketingTicketOutputAttachments$outboundSchema: z.ZodType<
  UnifiedTicketingTicketOutputAttachments$Outbound,
  z.ZodTypeDef,
  UnifiedTicketingTicketOutputAttachments
> = z.union([UnifiedTicketingAttachmentOutput$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedTicketingTicketOutputAttachments$ {
  /** @deprecated use `UnifiedTicketingTicketOutputAttachments$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedTicketingTicketOutputAttachments$inboundSchema;
  /** @deprecated use `UnifiedTicketingTicketOutputAttachments$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedTicketingTicketOutputAttachments$outboundSchema;
  /** @deprecated use `UnifiedTicketingTicketOutputAttachments$Outbound` instead. */
  export type Outbound = UnifiedTicketingTicketOutputAttachments$Outbound;
}

export function unifiedTicketingTicketOutputAttachmentsToJSON(
  unifiedTicketingTicketOutputAttachments:
    UnifiedTicketingTicketOutputAttachments,
): string {
  return JSON.stringify(
    UnifiedTicketingTicketOutputAttachments$outboundSchema.parse(
      unifiedTicketingTicketOutputAttachments,
    ),
  );
}

export function unifiedTicketingTicketOutputAttachmentsFromJSON(
  jsonString: string,
): SafeParseResult<
  UnifiedTicketingTicketOutputAttachments,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      UnifiedTicketingTicketOutputAttachments$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'UnifiedTicketingTicketOutputAttachments' from JSON`,
  );
}

/** @internal */
export const Comment$inboundSchema: z.ZodType<Comment, z.ZodTypeDef, unknown> =
  z.object({
    body: z.nullable(z.string()),
    html_body: z.nullable(z.string()).optional(),
    is_private: z.nullable(z.boolean()).optional(),
    creator_type: z.nullable(z.string()).optional(),
    ticket_id: z.nullable(z.string()).optional(),
    contact_id: z.nullable(z.string()).optional(),
    user_id: z.nullable(z.string()).optional(),
    attachments: z.nullable(
      z.array(
        z.union([UnifiedTicketingAttachmentOutput$inboundSchema, z.string()]),
      ),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "html_body": "htmlBody",
      "is_private": "isPrivate",
      "creator_type": "creatorType",
      "ticket_id": "ticketId",
      "contact_id": "contactId",
      "user_id": "userId",
    });
  });

/** @internal */
export type Comment$Outbound = {
  body: string | null;
  html_body?: string | null | undefined;
  is_private?: boolean | null | undefined;
  creator_type?: string | null | undefined;
  ticket_id?: string | null | undefined;
  contact_id?: string | null | undefined;
  user_id?: string | null | undefined;
  attachments?:
    | Array<UnifiedTicketingAttachmentOutput$Outbound | string>
    | null
    | undefined;
};

/** @internal */
export const Comment$outboundSchema: z.ZodType<
  Comment$Outbound,
  z.ZodTypeDef,
  Comment
> = z.object({
  body: z.nullable(z.string()),
  htmlBody: z.nullable(z.string()).optional(),
  isPrivate: z.nullable(z.boolean()).optional(),
  creatorType: z.nullable(z.string()).optional(),
  ticketId: z.nullable(z.string()).optional(),
  contactId: z.nullable(z.string()).optional(),
  userId: z.nullable(z.string()).optional(),
  attachments: z.nullable(
    z.array(
      z.union([UnifiedTicketingAttachmentOutput$outboundSchema, z.string()]),
    ),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    htmlBody: "html_body",
    isPrivate: "is_private",
    creatorType: "creator_type",
    ticketId: "ticket_id",
    contactId: "contact_id",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Comment$ {
  /** @deprecated use `Comment$inboundSchema` instead. */
  export const inboundSchema = Comment$inboundSchema;
  /** @deprecated use `Comment$outboundSchema` instead. */
  export const outboundSchema = Comment$outboundSchema;
  /** @deprecated use `Comment$Outbound` instead. */
  export type Outbound = Comment$Outbound;
}

export function commentToJSON(comment: Comment): string {
  return JSON.stringify(Comment$outboundSchema.parse(comment));
}

export function commentFromJSON(
  jsonString: string,
): SafeParseResult<Comment, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Comment$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Comment' from JSON`,
  );
}

/** @internal */
export const Attachments$inboundSchema: z.ZodType<
  Attachments,
  z.ZodTypeDef,
  unknown
> = z.union([UnifiedTicketingAttachmentInput$inboundSchema, z.string()]);

/** @internal */
export type Attachments$Outbound =
  | UnifiedTicketingAttachmentInput$Outbound
  | string;

/** @internal */
export const Attachments$outboundSchema: z.ZodType<
  Attachments$Outbound,
  z.ZodTypeDef,
  Attachments
> = z.union([UnifiedTicketingAttachmentInput$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Attachments$ {
  /** @deprecated use `Attachments$inboundSchema` instead. */
  export const inboundSchema = Attachments$inboundSchema;
  /** @deprecated use `Attachments$outboundSchema` instead. */
  export const outboundSchema = Attachments$outboundSchema;
  /** @deprecated use `Attachments$Outbound` instead. */
  export type Outbound = Attachments$Outbound;
}

export function attachmentsToJSON(attachments: Attachments): string {
  return JSON.stringify(Attachments$outboundSchema.parse(attachments));
}

export function attachmentsFromJSON(
  jsonString: string,
): SafeParseResult<Attachments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Attachments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Attachments' from JSON`,
  );
}

/** @internal */
export const UnifiedTicketingTicketOutput$inboundSchema: z.ZodType<
  UnifiedTicketingTicketOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  status: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()),
  due_date: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  type: z.nullable(z.string()).optional(),
  parent_ticket: z.nullable(z.string()).optional(),
  collections: z.nullable(
    z.array(
      z.union([UnifiedTicketingCollectionOutput$inboundSchema, z.string()]),
    ),
  ).optional(),
  tags: z.nullable(
    z.array(z.union([UnifiedTicketingTagOutput$inboundSchema, z.string()])),
  ).optional(),
  completed_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  priority: z.nullable(z.string()).optional(),
  assigned_to: z.nullable(z.array(z.string())).optional(),
  comment: z.nullable(z.lazy(() => Comment$inboundSchema)).optional(),
  account_id: z.nullable(z.string()).optional(),
  contact_id: z.nullable(z.string()).optional(),
  attachments: z.nullable(
    z.array(
      z.union([UnifiedTicketingAttachmentInput$inboundSchema, z.string()]),
    ),
  ).optional(),
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
    "due_date": "dueDate",
    "parent_ticket": "parentTicket",
    "completed_at": "completedAt",
    "assigned_to": "assignedTo",
    "account_id": "accountId",
    "contact_id": "contactId",
    "field_mappings": "fieldMappings",
    "remote_id": "remoteId",
    "remote_data": "remoteData",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type UnifiedTicketingTicketOutput$Outbound = {
  name: string | null;
  status?: string | null | undefined;
  description: string | null;
  due_date?: string | null | undefined;
  type?: string | null | undefined;
  parent_ticket?: string | null | undefined;
  collections?:
    | Array<UnifiedTicketingCollectionOutput$Outbound | string>
    | null
    | undefined;
  tags?: Array<UnifiedTicketingTagOutput$Outbound | string> | null | undefined;
  completed_at?: string | null | undefined;
  priority?: string | null | undefined;
  assigned_to?: Array<string> | null | undefined;
  comment?: Comment$Outbound | null | undefined;
  account_id?: string | null | undefined;
  contact_id?: string | null | undefined;
  attachments?:
    | Array<UnifiedTicketingAttachmentInput$Outbound | string>
    | null
    | undefined;
  field_mappings?: { [k: string]: any } | null | undefined;
  id?: string | null | undefined;
  remote_id?: string | null | undefined;
  remote_data?: { [k: string]: any } | null | undefined;
  created_at?: string | null | undefined;
  modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedTicketingTicketOutput$outboundSchema: z.ZodType<
  UnifiedTicketingTicketOutput$Outbound,
  z.ZodTypeDef,
  UnifiedTicketingTicketOutput
> = z.object({
  name: z.nullable(z.string()),
  status: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()),
  dueDate: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  type: z.nullable(z.string()).optional(),
  parentTicket: z.nullable(z.string()).optional(),
  collections: z.nullable(
    z.array(
      z.union([UnifiedTicketingCollectionOutput$outboundSchema, z.string()]),
    ),
  ).optional(),
  tags: z.nullable(
    z.array(z.union([UnifiedTicketingTagOutput$outboundSchema, z.string()])),
  ).optional(),
  completedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  priority: z.nullable(z.string()).optional(),
  assignedTo: z.nullable(z.array(z.string())).optional(),
  comment: z.nullable(z.lazy(() => Comment$outboundSchema)).optional(),
  accountId: z.nullable(z.string()).optional(),
  contactId: z.nullable(z.string()).optional(),
  attachments: z.nullable(
    z.array(
      z.union([UnifiedTicketingAttachmentInput$outboundSchema, z.string()]),
    ),
  ).optional(),
  fieldMappings: z.nullable(z.record(z.any())).optional(),
  id: z.nullable(z.string()).optional(),
  remoteId: z.nullable(z.string()).optional(),
  remoteData: z.nullable(z.record(z.any())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    dueDate: "due_date",
    parentTicket: "parent_ticket",
    completedAt: "completed_at",
    assignedTo: "assigned_to",
    accountId: "account_id",
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
export namespace UnifiedTicketingTicketOutput$ {
  /** @deprecated use `UnifiedTicketingTicketOutput$inboundSchema` instead. */
  export const inboundSchema = UnifiedTicketingTicketOutput$inboundSchema;
  /** @deprecated use `UnifiedTicketingTicketOutput$outboundSchema` instead. */
  export const outboundSchema = UnifiedTicketingTicketOutput$outboundSchema;
  /** @deprecated use `UnifiedTicketingTicketOutput$Outbound` instead. */
  export type Outbound = UnifiedTicketingTicketOutput$Outbound;
}

export function unifiedTicketingTicketOutputToJSON(
  unifiedTicketingTicketOutput: UnifiedTicketingTicketOutput,
): string {
  return JSON.stringify(
    UnifiedTicketingTicketOutput$outboundSchema.parse(
      unifiedTicketingTicketOutput,
    ),
  );
}

export function unifiedTicketingTicketOutputFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedTicketingTicketOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedTicketingTicketOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedTicketingTicketOutput' from JSON`,
  );
}
