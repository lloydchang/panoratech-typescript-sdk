/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingIncomeStatementRequest = {
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

export type ListAccountingIncomeStatementResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedAccountingIncomestatementOutput>;
};

export type ListAccountingIncomeStatementResponse = {
  result: ListAccountingIncomeStatementResponseBody;
};

/** @internal */
export const ListAccountingIncomeStatementRequest$inboundSchema: z.ZodType<
  ListAccountingIncomeStatementRequest,
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
export type ListAccountingIncomeStatementRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListAccountingIncomeStatementRequest$outboundSchema: z.ZodType<
  ListAccountingIncomeStatementRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingIncomeStatementRequest
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
export namespace ListAccountingIncomeStatementRequest$ {
  /** @deprecated use `ListAccountingIncomeStatementRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingIncomeStatementRequest$inboundSchema;
  /** @deprecated use `ListAccountingIncomeStatementRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingIncomeStatementRequest$outboundSchema;
  /** @deprecated use `ListAccountingIncomeStatementRequest$Outbound` instead. */
  export type Outbound = ListAccountingIncomeStatementRequest$Outbound;
}

export function listAccountingIncomeStatementRequestToJSON(
  listAccountingIncomeStatementRequest: ListAccountingIncomeStatementRequest,
): string {
  return JSON.stringify(
    ListAccountingIncomeStatementRequest$outboundSchema.parse(
      listAccountingIncomeStatementRequest,
    ),
  );
}

export function listAccountingIncomeStatementRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingIncomeStatementRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingIncomeStatementRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingIncomeStatementRequest' from JSON`,
  );
}

/** @internal */
export const ListAccountingIncomeStatementResponseBody$inboundSchema: z.ZodType<
  ListAccountingIncomeStatementResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(
    components.UnifiedAccountingIncomestatementOutput$inboundSchema,
  ),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListAccountingIncomeStatementResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedAccountingIncomestatementOutput$Outbound>;
};

/** @internal */
export const ListAccountingIncomeStatementResponseBody$outboundSchema:
  z.ZodType<
    ListAccountingIncomeStatementResponseBody$Outbound,
    z.ZodTypeDef,
    ListAccountingIncomeStatementResponseBody
  > = z.object({
    prevCursor: z.nullable(z.string()),
    nextCursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedAccountingIncomestatementOutput$outboundSchema,
    ),
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
export namespace ListAccountingIncomeStatementResponseBody$ {
  /** @deprecated use `ListAccountingIncomeStatementResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingIncomeStatementResponseBody$inboundSchema;
  /** @deprecated use `ListAccountingIncomeStatementResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingIncomeStatementResponseBody$outboundSchema;
  /** @deprecated use `ListAccountingIncomeStatementResponseBody$Outbound` instead. */
  export type Outbound = ListAccountingIncomeStatementResponseBody$Outbound;
}

export function listAccountingIncomeStatementResponseBodyToJSON(
  listAccountingIncomeStatementResponseBody:
    ListAccountingIncomeStatementResponseBody,
): string {
  return JSON.stringify(
    ListAccountingIncomeStatementResponseBody$outboundSchema.parse(
      listAccountingIncomeStatementResponseBody,
    ),
  );
}

export function listAccountingIncomeStatementResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ListAccountingIncomeStatementResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingIncomeStatementResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListAccountingIncomeStatementResponseBody' from JSON`,
  );
}

/** @internal */
export const ListAccountingIncomeStatementResponse$inboundSchema: z.ZodType<
  ListAccountingIncomeStatementResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListAccountingIncomeStatementResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAccountingIncomeStatementResponse$Outbound = {
  Result: ListAccountingIncomeStatementResponseBody$Outbound;
};

/** @internal */
export const ListAccountingIncomeStatementResponse$outboundSchema: z.ZodType<
  ListAccountingIncomeStatementResponse$Outbound,
  z.ZodTypeDef,
  ListAccountingIncomeStatementResponse
> = z.object({
  result: z.lazy(() =>
    ListAccountingIncomeStatementResponseBody$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingIncomeStatementResponse$ {
  /** @deprecated use `ListAccountingIncomeStatementResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingIncomeStatementResponse$inboundSchema;
  /** @deprecated use `ListAccountingIncomeStatementResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingIncomeStatementResponse$outboundSchema;
  /** @deprecated use `ListAccountingIncomeStatementResponse$Outbound` instead. */
  export type Outbound = ListAccountingIncomeStatementResponse$Outbound;
}

export function listAccountingIncomeStatementResponseToJSON(
  listAccountingIncomeStatementResponse: ListAccountingIncomeStatementResponse,
): string {
  return JSON.stringify(
    ListAccountingIncomeStatementResponse$outboundSchema.parse(
      listAccountingIncomeStatementResponse,
    ),
  );
}

export function listAccountingIncomeStatementResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingIncomeStatementResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingIncomeStatementResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingIncomeStatementResponse' from JSON`,
  );
}
