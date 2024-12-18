/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListTicketingTagsRequest = {
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

export type ListTicketingTagsResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedTicketingTagOutput>;
};

export type ListTicketingTagsResponse = {
  result: ListTicketingTagsResponseBody;
};

/** @internal */
export const ListTicketingTagsRequest$inboundSchema: z.ZodType<
  ListTicketingTagsRequest,
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
export type ListTicketingTagsRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListTicketingTagsRequest$outboundSchema: z.ZodType<
  ListTicketingTagsRequest$Outbound,
  z.ZodTypeDef,
  ListTicketingTagsRequest
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
export namespace ListTicketingTagsRequest$ {
  /** @deprecated use `ListTicketingTagsRequest$inboundSchema` instead. */
  export const inboundSchema = ListTicketingTagsRequest$inboundSchema;
  /** @deprecated use `ListTicketingTagsRequest$outboundSchema` instead. */
  export const outboundSchema = ListTicketingTagsRequest$outboundSchema;
  /** @deprecated use `ListTicketingTagsRequest$Outbound` instead. */
  export type Outbound = ListTicketingTagsRequest$Outbound;
}

export function listTicketingTagsRequestToJSON(
  listTicketingTagsRequest: ListTicketingTagsRequest,
): string {
  return JSON.stringify(
    ListTicketingTagsRequest$outboundSchema.parse(listTicketingTagsRequest),
  );
}

export function listTicketingTagsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListTicketingTagsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTicketingTagsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTicketingTagsRequest' from JSON`,
  );
}

/** @internal */
export const ListTicketingTagsResponseBody$inboundSchema: z.ZodType<
  ListTicketingTagsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedTicketingTagOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListTicketingTagsResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedTicketingTagOutput$Outbound>;
};

/** @internal */
export const ListTicketingTagsResponseBody$outboundSchema: z.ZodType<
  ListTicketingTagsResponseBody$Outbound,
  z.ZodTypeDef,
  ListTicketingTagsResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedTicketingTagOutput$outboundSchema),
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
export namespace ListTicketingTagsResponseBody$ {
  /** @deprecated use `ListTicketingTagsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListTicketingTagsResponseBody$inboundSchema;
  /** @deprecated use `ListTicketingTagsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListTicketingTagsResponseBody$outboundSchema;
  /** @deprecated use `ListTicketingTagsResponseBody$Outbound` instead. */
  export type Outbound = ListTicketingTagsResponseBody$Outbound;
}

export function listTicketingTagsResponseBodyToJSON(
  listTicketingTagsResponseBody: ListTicketingTagsResponseBody,
): string {
  return JSON.stringify(
    ListTicketingTagsResponseBody$outboundSchema.parse(
      listTicketingTagsResponseBody,
    ),
  );
}

export function listTicketingTagsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListTicketingTagsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTicketingTagsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTicketingTagsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListTicketingTagsResponse$inboundSchema: z.ZodType<
  ListTicketingTagsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListTicketingTagsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListTicketingTagsResponse$Outbound = {
  Result: ListTicketingTagsResponseBody$Outbound;
};

/** @internal */
export const ListTicketingTagsResponse$outboundSchema: z.ZodType<
  ListTicketingTagsResponse$Outbound,
  z.ZodTypeDef,
  ListTicketingTagsResponse
> = z.object({
  result: z.lazy(() => ListTicketingTagsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTicketingTagsResponse$ {
  /** @deprecated use `ListTicketingTagsResponse$inboundSchema` instead. */
  export const inboundSchema = ListTicketingTagsResponse$inboundSchema;
  /** @deprecated use `ListTicketingTagsResponse$outboundSchema` instead. */
  export const outboundSchema = ListTicketingTagsResponse$outboundSchema;
  /** @deprecated use `ListTicketingTagsResponse$Outbound` instead. */
  export type Outbound = ListTicketingTagsResponse$Outbound;
}

export function listTicketingTagsResponseToJSON(
  listTicketingTagsResponse: ListTicketingTagsResponse,
): string {
  return JSON.stringify(
    ListTicketingTagsResponse$outboundSchema.parse(listTicketingTagsResponse),
  );
}

export function listTicketingTagsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListTicketingTagsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListTicketingTagsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListTicketingTagsResponse' from JSON`,
  );
}
