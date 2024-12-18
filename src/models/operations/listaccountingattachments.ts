/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingAttachmentsRequest = {
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

export type ListAccountingAttachmentsResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedAccountingAttachmentOutput>;
};

export type ListAccountingAttachmentsResponse = {
  result: ListAccountingAttachmentsResponseBody;
};

/** @internal */
export const ListAccountingAttachmentsRequest$inboundSchema: z.ZodType<
  ListAccountingAttachmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  remote_data: z.boolean().optional(),
  limit: z.number().optional(),
  cursor: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "remote_data": "remoteData",
  });
});

/** @internal */
export type ListAccountingAttachmentsRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListAccountingAttachmentsRequest$outboundSchema: z.ZodType<
  ListAccountingAttachmentsRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingAttachmentsRequest
> = z.object({
  xConnectionToken: z.string(),
  remoteData: z.boolean().optional(),
  limit: z.number().optional(),
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
export namespace ListAccountingAttachmentsRequest$ {
  /** @deprecated use `ListAccountingAttachmentsRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountingAttachmentsRequest$inboundSchema;
  /** @deprecated use `ListAccountingAttachmentsRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccountingAttachmentsRequest$outboundSchema;
  /** @deprecated use `ListAccountingAttachmentsRequest$Outbound` instead. */
  export type Outbound = ListAccountingAttachmentsRequest$Outbound;
}

export function listAccountingAttachmentsRequestToJSON(
  listAccountingAttachmentsRequest: ListAccountingAttachmentsRequest,
): string {
  return JSON.stringify(
    ListAccountingAttachmentsRequest$outboundSchema.parse(
      listAccountingAttachmentsRequest,
    ),
  );
}

export function listAccountingAttachmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingAttachmentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingAttachmentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingAttachmentsRequest' from JSON`,
  );
}

/** @internal */
export const ListAccountingAttachmentsResponseBody$inboundSchema: z.ZodType<
  ListAccountingAttachmentsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAccountingAttachmentOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListAccountingAttachmentsResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedAccountingAttachmentOutput$Outbound>;
};

/** @internal */
export const ListAccountingAttachmentsResponseBody$outboundSchema: z.ZodType<
  ListAccountingAttachmentsResponseBody$Outbound,
  z.ZodTypeDef,
  ListAccountingAttachmentsResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAccountingAttachmentOutput$outboundSchema),
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
export namespace ListAccountingAttachmentsResponseBody$ {
  /** @deprecated use `ListAccountingAttachmentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingAttachmentsResponseBody$inboundSchema;
  /** @deprecated use `ListAccountingAttachmentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingAttachmentsResponseBody$outboundSchema;
  /** @deprecated use `ListAccountingAttachmentsResponseBody$Outbound` instead. */
  export type Outbound = ListAccountingAttachmentsResponseBody$Outbound;
}

export function listAccountingAttachmentsResponseBodyToJSON(
  listAccountingAttachmentsResponseBody: ListAccountingAttachmentsResponseBody,
): string {
  return JSON.stringify(
    ListAccountingAttachmentsResponseBody$outboundSchema.parse(
      listAccountingAttachmentsResponseBody,
    ),
  );
}

export function listAccountingAttachmentsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingAttachmentsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingAttachmentsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingAttachmentsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListAccountingAttachmentsResponse$inboundSchema: z.ZodType<
  ListAccountingAttachmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListAccountingAttachmentsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAccountingAttachmentsResponse$Outbound = {
  Result: ListAccountingAttachmentsResponseBody$Outbound;
};

/** @internal */
export const ListAccountingAttachmentsResponse$outboundSchema: z.ZodType<
  ListAccountingAttachmentsResponse$Outbound,
  z.ZodTypeDef,
  ListAccountingAttachmentsResponse
> = z.object({
  result: z.lazy(() => ListAccountingAttachmentsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingAttachmentsResponse$ {
  /** @deprecated use `ListAccountingAttachmentsResponse$inboundSchema` instead. */
  export const inboundSchema = ListAccountingAttachmentsResponse$inboundSchema;
  /** @deprecated use `ListAccountingAttachmentsResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingAttachmentsResponse$outboundSchema;
  /** @deprecated use `ListAccountingAttachmentsResponse$Outbound` instead. */
  export type Outbound = ListAccountingAttachmentsResponse$Outbound;
}

export function listAccountingAttachmentsResponseToJSON(
  listAccountingAttachmentsResponse: ListAccountingAttachmentsResponse,
): string {
  return JSON.stringify(
    ListAccountingAttachmentsResponse$outboundSchema.parse(
      listAccountingAttachmentsResponse,
    ),
  );
}

export function listAccountingAttachmentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingAttachmentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingAttachmentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingAttachmentsResponse' from JSON`,
  );
}
