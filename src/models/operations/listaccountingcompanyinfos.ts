/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingCompanyInfosRequest = {
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

export type ListAccountingCompanyInfosResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedAccountingCompanyinfoOutput>;
};

export type ListAccountingCompanyInfosResponse = {
  result: ListAccountingCompanyInfosResponseBody;
};

/** @internal */
export const ListAccountingCompanyInfosRequest$inboundSchema: z.ZodType<
  ListAccountingCompanyInfosRequest,
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
export type ListAccountingCompanyInfosRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListAccountingCompanyInfosRequest$outboundSchema: z.ZodType<
  ListAccountingCompanyInfosRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingCompanyInfosRequest
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
export namespace ListAccountingCompanyInfosRequest$ {
  /** @deprecated use `ListAccountingCompanyInfosRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountingCompanyInfosRequest$inboundSchema;
  /** @deprecated use `ListAccountingCompanyInfosRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingCompanyInfosRequest$outboundSchema;
  /** @deprecated use `ListAccountingCompanyInfosRequest$Outbound` instead. */
  export type Outbound = ListAccountingCompanyInfosRequest$Outbound;
}

export function listAccountingCompanyInfosRequestToJSON(
  listAccountingCompanyInfosRequest: ListAccountingCompanyInfosRequest,
): string {
  return JSON.stringify(
    ListAccountingCompanyInfosRequest$outboundSchema.parse(
      listAccountingCompanyInfosRequest,
    ),
  );
}

export function listAccountingCompanyInfosRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingCompanyInfosRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingCompanyInfosRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingCompanyInfosRequest' from JSON`,
  );
}

/** @internal */
export const ListAccountingCompanyInfosResponseBody$inboundSchema: z.ZodType<
  ListAccountingCompanyInfosResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAccountingCompanyinfoOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListAccountingCompanyInfosResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedAccountingCompanyinfoOutput$Outbound>;
};

/** @internal */
export const ListAccountingCompanyInfosResponseBody$outboundSchema: z.ZodType<
  ListAccountingCompanyInfosResponseBody$Outbound,
  z.ZodTypeDef,
  ListAccountingCompanyInfosResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAccountingCompanyinfoOutput$outboundSchema),
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
export namespace ListAccountingCompanyInfosResponseBody$ {
  /** @deprecated use `ListAccountingCompanyInfosResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingCompanyInfosResponseBody$inboundSchema;
  /** @deprecated use `ListAccountingCompanyInfosResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingCompanyInfosResponseBody$outboundSchema;
  /** @deprecated use `ListAccountingCompanyInfosResponseBody$Outbound` instead. */
  export type Outbound = ListAccountingCompanyInfosResponseBody$Outbound;
}

export function listAccountingCompanyInfosResponseBodyToJSON(
  listAccountingCompanyInfosResponseBody:
    ListAccountingCompanyInfosResponseBody,
): string {
  return JSON.stringify(
    ListAccountingCompanyInfosResponseBody$outboundSchema.parse(
      listAccountingCompanyInfosResponseBody,
    ),
  );
}

export function listAccountingCompanyInfosResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingCompanyInfosResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingCompanyInfosResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingCompanyInfosResponseBody' from JSON`,
  );
}

/** @internal */
export const ListAccountingCompanyInfosResponse$inboundSchema: z.ZodType<
  ListAccountingCompanyInfosResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListAccountingCompanyInfosResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAccountingCompanyInfosResponse$Outbound = {
  Result: ListAccountingCompanyInfosResponseBody$Outbound;
};

/** @internal */
export const ListAccountingCompanyInfosResponse$outboundSchema: z.ZodType<
  ListAccountingCompanyInfosResponse$Outbound,
  z.ZodTypeDef,
  ListAccountingCompanyInfosResponse
> = z.object({
  result: z.lazy(() => ListAccountingCompanyInfosResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingCompanyInfosResponse$ {
  /** @deprecated use `ListAccountingCompanyInfosResponse$inboundSchema` instead. */
  export const inboundSchema = ListAccountingCompanyInfosResponse$inboundSchema;
  /** @deprecated use `ListAccountingCompanyInfosResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingCompanyInfosResponse$outboundSchema;
  /** @deprecated use `ListAccountingCompanyInfosResponse$Outbound` instead. */
  export type Outbound = ListAccountingCompanyInfosResponse$Outbound;
}

export function listAccountingCompanyInfosResponseToJSON(
  listAccountingCompanyInfosResponse: ListAccountingCompanyInfosResponse,
): string {
  return JSON.stringify(
    ListAccountingCompanyInfosResponse$outboundSchema.parse(
      listAccountingCompanyInfosResponse,
    ),
  );
}

export function listAccountingCompanyInfosResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingCompanyInfosResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingCompanyInfosResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingCompanyInfosResponse' from JSON`,
  );
}
