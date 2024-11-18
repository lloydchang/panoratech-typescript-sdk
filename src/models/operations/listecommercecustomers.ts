/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListEcommerceCustomersRequest = {
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

export type ListEcommerceCustomersResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedEcommerceCustomerOutput>;
};

export type ListEcommerceCustomersResponse = {
  result: ListEcommerceCustomersResponseBody;
};

/** @internal */
export const ListEcommerceCustomersRequest$inboundSchema: z.ZodType<
  ListEcommerceCustomersRequest,
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
export type ListEcommerceCustomersRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListEcommerceCustomersRequest$outboundSchema: z.ZodType<
  ListEcommerceCustomersRequest$Outbound,
  z.ZodTypeDef,
  ListEcommerceCustomersRequest
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
export namespace ListEcommerceCustomersRequest$ {
  /** @deprecated use `ListEcommerceCustomersRequest$inboundSchema` instead. */
  export const inboundSchema = ListEcommerceCustomersRequest$inboundSchema;
  /** @deprecated use `ListEcommerceCustomersRequest$outboundSchema` instead. */
  export const outboundSchema = ListEcommerceCustomersRequest$outboundSchema;
  /** @deprecated use `ListEcommerceCustomersRequest$Outbound` instead. */
  export type Outbound = ListEcommerceCustomersRequest$Outbound;
}

export function listEcommerceCustomersRequestToJSON(
  listEcommerceCustomersRequest: ListEcommerceCustomersRequest,
): string {
  return JSON.stringify(
    ListEcommerceCustomersRequest$outboundSchema.parse(
      listEcommerceCustomersRequest,
    ),
  );
}

export function listEcommerceCustomersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListEcommerceCustomersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListEcommerceCustomersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEcommerceCustomersRequest' from JSON`,
  );
}

/** @internal */
export const ListEcommerceCustomersResponseBody$inboundSchema: z.ZodType<
  ListEcommerceCustomersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedEcommerceCustomerOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListEcommerceCustomersResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedEcommerceCustomerOutput$Outbound>;
};

/** @internal */
export const ListEcommerceCustomersResponseBody$outboundSchema: z.ZodType<
  ListEcommerceCustomersResponseBody$Outbound,
  z.ZodTypeDef,
  ListEcommerceCustomersResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedEcommerceCustomerOutput$outboundSchema),
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
export namespace ListEcommerceCustomersResponseBody$ {
  /** @deprecated use `ListEcommerceCustomersResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListEcommerceCustomersResponseBody$inboundSchema;
  /** @deprecated use `ListEcommerceCustomersResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListEcommerceCustomersResponseBody$outboundSchema;
  /** @deprecated use `ListEcommerceCustomersResponseBody$Outbound` instead. */
  export type Outbound = ListEcommerceCustomersResponseBody$Outbound;
}

export function listEcommerceCustomersResponseBodyToJSON(
  listEcommerceCustomersResponseBody: ListEcommerceCustomersResponseBody,
): string {
  return JSON.stringify(
    ListEcommerceCustomersResponseBody$outboundSchema.parse(
      listEcommerceCustomersResponseBody,
    ),
  );
}

export function listEcommerceCustomersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListEcommerceCustomersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListEcommerceCustomersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEcommerceCustomersResponseBody' from JSON`,
  );
}

/** @internal */
export const ListEcommerceCustomersResponse$inboundSchema: z.ZodType<
  ListEcommerceCustomersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListEcommerceCustomersResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListEcommerceCustomersResponse$Outbound = {
  Result: ListEcommerceCustomersResponseBody$Outbound;
};

/** @internal */
export const ListEcommerceCustomersResponse$outboundSchema: z.ZodType<
  ListEcommerceCustomersResponse$Outbound,
  z.ZodTypeDef,
  ListEcommerceCustomersResponse
> = z.object({
  result: z.lazy(() => ListEcommerceCustomersResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListEcommerceCustomersResponse$ {
  /** @deprecated use `ListEcommerceCustomersResponse$inboundSchema` instead. */
  export const inboundSchema = ListEcommerceCustomersResponse$inboundSchema;
  /** @deprecated use `ListEcommerceCustomersResponse$outboundSchema` instead. */
  export const outboundSchema = ListEcommerceCustomersResponse$outboundSchema;
  /** @deprecated use `ListEcommerceCustomersResponse$Outbound` instead. */
  export type Outbound = ListEcommerceCustomersResponse$Outbound;
}

export function listEcommerceCustomersResponseToJSON(
  listEcommerceCustomersResponse: ListEcommerceCustomersResponse,
): string {
  return JSON.stringify(
    ListEcommerceCustomersResponse$outboundSchema.parse(
      listEcommerceCustomersResponse,
    ),
  );
}

export function listEcommerceCustomersResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListEcommerceCustomersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListEcommerceCustomersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListEcommerceCustomersResponse' from JSON`,
  );
}
