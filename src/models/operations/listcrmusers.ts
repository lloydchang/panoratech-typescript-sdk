/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCrmUsersRequest = {
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

export type ListCrmUsersResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedCrmUserOutput>;
};

export type ListCrmUsersResponse = {
  result: ListCrmUsersResponseBody;
};

/** @internal */
export const ListCrmUsersRequest$inboundSchema: z.ZodType<
  ListCrmUsersRequest,
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
export type ListCrmUsersRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListCrmUsersRequest$outboundSchema: z.ZodType<
  ListCrmUsersRequest$Outbound,
  z.ZodTypeDef,
  ListCrmUsersRequest
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
export namespace ListCrmUsersRequest$ {
  /** @deprecated use `ListCrmUsersRequest$inboundSchema` instead. */
  export const inboundSchema = ListCrmUsersRequest$inboundSchema;
  /** @deprecated use `ListCrmUsersRequest$outboundSchema` instead. */
  export const outboundSchema = ListCrmUsersRequest$outboundSchema;
  /** @deprecated use `ListCrmUsersRequest$Outbound` instead. */
  export type Outbound = ListCrmUsersRequest$Outbound;
}

export function listCrmUsersRequestToJSON(
  listCrmUsersRequest: ListCrmUsersRequest,
): string {
  return JSON.stringify(
    ListCrmUsersRequest$outboundSchema.parse(listCrmUsersRequest),
  );
}

export function listCrmUsersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCrmUsersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCrmUsersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCrmUsersRequest' from JSON`,
  );
}

/** @internal */
export const ListCrmUsersResponseBody$inboundSchema: z.ZodType<
  ListCrmUsersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedCrmUserOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListCrmUsersResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedCrmUserOutput$Outbound>;
};

/** @internal */
export const ListCrmUsersResponseBody$outboundSchema: z.ZodType<
  ListCrmUsersResponseBody$Outbound,
  z.ZodTypeDef,
  ListCrmUsersResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedCrmUserOutput$outboundSchema),
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
export namespace ListCrmUsersResponseBody$ {
  /** @deprecated use `ListCrmUsersResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListCrmUsersResponseBody$inboundSchema;
  /** @deprecated use `ListCrmUsersResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListCrmUsersResponseBody$outboundSchema;
  /** @deprecated use `ListCrmUsersResponseBody$Outbound` instead. */
  export type Outbound = ListCrmUsersResponseBody$Outbound;
}

export function listCrmUsersResponseBodyToJSON(
  listCrmUsersResponseBody: ListCrmUsersResponseBody,
): string {
  return JSON.stringify(
    ListCrmUsersResponseBody$outboundSchema.parse(listCrmUsersResponseBody),
  );
}

export function listCrmUsersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListCrmUsersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCrmUsersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCrmUsersResponseBody' from JSON`,
  );
}

/** @internal */
export const ListCrmUsersResponse$inboundSchema: z.ZodType<
  ListCrmUsersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListCrmUsersResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListCrmUsersResponse$Outbound = {
  Result: ListCrmUsersResponseBody$Outbound;
};

/** @internal */
export const ListCrmUsersResponse$outboundSchema: z.ZodType<
  ListCrmUsersResponse$Outbound,
  z.ZodTypeDef,
  ListCrmUsersResponse
> = z.object({
  result: z.lazy(() => ListCrmUsersResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCrmUsersResponse$ {
  /** @deprecated use `ListCrmUsersResponse$inboundSchema` instead. */
  export const inboundSchema = ListCrmUsersResponse$inboundSchema;
  /** @deprecated use `ListCrmUsersResponse$outboundSchema` instead. */
  export const outboundSchema = ListCrmUsersResponse$outboundSchema;
  /** @deprecated use `ListCrmUsersResponse$Outbound` instead. */
  export type Outbound = ListCrmUsersResponse$Outbound;
}

export function listCrmUsersResponseToJSON(
  listCrmUsersResponse: ListCrmUsersResponse,
): string {
  return JSON.stringify(
    ListCrmUsersResponse$outboundSchema.parse(listCrmUsersResponse),
  );
}

export function listCrmUsersResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListCrmUsersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCrmUsersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCrmUsersResponse' from JSON`,
  );
}
