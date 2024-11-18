/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListAccountingPhonenumberRequest = {
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

export type ListAccountingPhonenumberResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedAccountingPhonenumberOutput>;
};

export type ListAccountingPhonenumberResponse = {
  result: ListAccountingPhonenumberResponseBody;
};

/** @internal */
export const ListAccountingPhonenumberRequest$inboundSchema: z.ZodType<
  ListAccountingPhonenumberRequest,
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
export type ListAccountingPhonenumberRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListAccountingPhonenumberRequest$outboundSchema: z.ZodType<
  ListAccountingPhonenumberRequest$Outbound,
  z.ZodTypeDef,
  ListAccountingPhonenumberRequest
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
export namespace ListAccountingPhonenumberRequest$ {
  /** @deprecated use `ListAccountingPhonenumberRequest$inboundSchema` instead. */
  export const inboundSchema = ListAccountingPhonenumberRequest$inboundSchema;
  /** @deprecated use `ListAccountingPhonenumberRequest$outboundSchema` instead. */
  export const outboundSchema = ListAccountingPhonenumberRequest$outboundSchema;
  /** @deprecated use `ListAccountingPhonenumberRequest$Outbound` instead. */
  export type Outbound = ListAccountingPhonenumberRequest$Outbound;
}

export function listAccountingPhonenumberRequestToJSON(
  listAccountingPhonenumberRequest: ListAccountingPhonenumberRequest,
): string {
  return JSON.stringify(
    ListAccountingPhonenumberRequest$outboundSchema.parse(
      listAccountingPhonenumberRequest,
    ),
  );
}

export function listAccountingPhonenumberRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingPhonenumberRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingPhonenumberRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingPhonenumberRequest' from JSON`,
  );
}

/** @internal */
export const ListAccountingPhonenumberResponseBody$inboundSchema: z.ZodType<
  ListAccountingPhonenumberResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  prev_cursor: z.nullable(z.string()),
  next_cursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAccountingPhonenumberOutput$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "prev_cursor": "prevCursor",
    "next_cursor": "nextCursor",
  });
});

/** @internal */
export type ListAccountingPhonenumberResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedAccountingPhonenumberOutput$Outbound>;
};

/** @internal */
export const ListAccountingPhonenumberResponseBody$outboundSchema: z.ZodType<
  ListAccountingPhonenumberResponseBody$Outbound,
  z.ZodTypeDef,
  ListAccountingPhonenumberResponseBody
> = z.object({
  prevCursor: z.nullable(z.string()),
  nextCursor: z.nullable(z.string()),
  data: z.array(components.UnifiedAccountingPhonenumberOutput$outboundSchema),
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
export namespace ListAccountingPhonenumberResponseBody$ {
  /** @deprecated use `ListAccountingPhonenumberResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListAccountingPhonenumberResponseBody$inboundSchema;
  /** @deprecated use `ListAccountingPhonenumberResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingPhonenumberResponseBody$outboundSchema;
  /** @deprecated use `ListAccountingPhonenumberResponseBody$Outbound` instead. */
  export type Outbound = ListAccountingPhonenumberResponseBody$Outbound;
}

export function listAccountingPhonenumberResponseBodyToJSON(
  listAccountingPhonenumberResponseBody: ListAccountingPhonenumberResponseBody,
): string {
  return JSON.stringify(
    ListAccountingPhonenumberResponseBody$outboundSchema.parse(
      listAccountingPhonenumberResponseBody,
    ),
  );
}

export function listAccountingPhonenumberResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingPhonenumberResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListAccountingPhonenumberResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingPhonenumberResponseBody' from JSON`,
  );
}

/** @internal */
export const ListAccountingPhonenumberResponse$inboundSchema: z.ZodType<
  ListAccountingPhonenumberResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListAccountingPhonenumberResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListAccountingPhonenumberResponse$Outbound = {
  Result: ListAccountingPhonenumberResponseBody$Outbound;
};

/** @internal */
export const ListAccountingPhonenumberResponse$outboundSchema: z.ZodType<
  ListAccountingPhonenumberResponse$Outbound,
  z.ZodTypeDef,
  ListAccountingPhonenumberResponse
> = z.object({
  result: z.lazy(() => ListAccountingPhonenumberResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAccountingPhonenumberResponse$ {
  /** @deprecated use `ListAccountingPhonenumberResponse$inboundSchema` instead. */
  export const inboundSchema = ListAccountingPhonenumberResponse$inboundSchema;
  /** @deprecated use `ListAccountingPhonenumberResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListAccountingPhonenumberResponse$outboundSchema;
  /** @deprecated use `ListAccountingPhonenumberResponse$Outbound` instead. */
  export type Outbound = ListAccountingPhonenumberResponse$Outbound;
}

export function listAccountingPhonenumberResponseToJSON(
  listAccountingPhonenumberResponse: ListAccountingPhonenumberResponse,
): string {
  return JSON.stringify(
    ListAccountingPhonenumberResponse$outboundSchema.parse(
      listAccountingPhonenumberResponse,
    ),
  );
}

export function listAccountingPhonenumberResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListAccountingPhonenumberResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListAccountingPhonenumberResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListAccountingPhonenumberResponse' from JSON`,
  );
}
