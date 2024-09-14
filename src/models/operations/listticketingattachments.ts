/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ListTicketingAttachmentsRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  /**
   * Set to true to include data from the original software.
   */
  remoteData?: boolean | undefined;
  /**
   * Set to get the number of records.
   */
  limit?: number | undefined;
  /**
   * Set to get the number of records after this cursor.
   */
  cursor?: string | undefined;
};

export type ListTicketingAttachmentsResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedTicketingAttachmentOutput>;
};

export type ListTicketingAttachmentsResponse = {
  result: ListTicketingAttachmentsResponseBody;
};

/** @internal */
export const ListTicketingAttachmentsRequest$inboundSchema: z.ZodType<
  ListTicketingAttachmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  limit: z.number().default(50),
  cursor: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
  });
});

/** @internal */
export type ListTicketingAttachmentsRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit: number;
  cursor?: string | undefined;
};

/** @internal */
export const ListTicketingAttachmentsRequest$outboundSchema: z.ZodType<
  ListTicketingAttachmentsRequest$Outbound,
  z.ZodTypeDef,
  ListTicketingAttachmentsRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  limit: z.number().default(50),
  cursor: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    remoteData: "remote_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTicketingAttachmentsRequest$ {
  /** @deprecated use `ListTicketingAttachmentsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTicketingAttachmentsRequest$inboundSchema;
  /** @deprecated use `ListTicketingAttachmentsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTicketingAttachmentsRequest$outboundSchema;
  /** @deprecated use `ListTicketingAttachmentsRequest$Outbound` instead. */
  export type Outbound = ListTicketingAttachmentsRequest$Outbound;
}

/** @internal */
export const ListTicketingAttachmentsResponseBody$inboundSchema: z.ZodType<
  ListTicketingAttachmentsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedTicketingAttachmentOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListTicketingAttachmentsResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedTicketingAttachmentOutput$Outbound>;
};

/** @internal */
export const ListTicketingAttachmentsResponseBody$outboundSchema: z.ZodType<
  ListTicketingAttachmentsResponseBody$Outbound,
  z.ZodTypeDef,
  ListTicketingAttachmentsResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedTicketingAttachmentOutput$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    prevCursor: "prev_cursor",
    nextCursor: "next_cursor",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTicketingAttachmentsResponseBody$ {
  /** @deprecated use `ListTicketingAttachmentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListTicketingAttachmentsResponseBody$inboundSchema;
  /** @deprecated use `ListTicketingAttachmentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListTicketingAttachmentsResponseBody$outboundSchema;
  /** @deprecated use `ListTicketingAttachmentsResponseBody$Outbound` instead. */
  export type Outbound = ListTicketingAttachmentsResponseBody$Outbound;
}

/** @internal */
export const ListTicketingAttachmentsResponse$inboundSchema: z.ZodType<
  ListTicketingAttachmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListTicketingAttachmentsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListTicketingAttachmentsResponse$Outbound = {
  Result: ListTicketingAttachmentsResponseBody$Outbound;
};

/** @internal */
export const ListTicketingAttachmentsResponse$outboundSchema: z.ZodType<
  ListTicketingAttachmentsResponse$Outbound,
  z.ZodTypeDef,
  ListTicketingAttachmentsResponse
> = z.object({
  result: z.lazy(() => ListTicketingAttachmentsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTicketingAttachmentsResponse$ {
  /** @deprecated use `ListTicketingAttachmentsResponse$inboundSchema` instead. */
  export const inboundSchema = ListTicketingAttachmentsResponse$inboundSchema;
  /** @deprecated use `ListTicketingAttachmentsResponse$outboundSchema` instead. */
  export const outboundSchema = ListTicketingAttachmentsResponse$outboundSchema;
  /** @deprecated use `ListTicketingAttachmentsResponse$Outbound` instead. */
  export type Outbound = ListTicketingAttachmentsResponse$Outbound;
}
