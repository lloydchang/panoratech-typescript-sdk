/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListMarketingautomationMessagesRequest = {
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

export type ListMarketingautomationMessagesResponseBody = {
  prevCursor: string | null;
  nextCursor: string | null;
  data: Array<components.UnifiedMarketingautomationMessageOutput>;
};

export type ListMarketingautomationMessagesResponse = {
  result: ListMarketingautomationMessagesResponseBody;
};

/** @internal */
export const ListMarketingautomationMessagesRequest$inboundSchema: z.ZodType<
  ListMarketingautomationMessagesRequest,
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
export type ListMarketingautomationMessagesRequest$Outbound = {
  "x-connection-token": string;
  remote_data?: boolean | undefined;
  limit?: number | undefined;
  cursor?: string | undefined;
};

/** @internal */
export const ListMarketingautomationMessagesRequest$outboundSchema: z.ZodType<
  ListMarketingautomationMessagesRequest$Outbound,
  z.ZodTypeDef,
  ListMarketingautomationMessagesRequest
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
export namespace ListMarketingautomationMessagesRequest$ {
  /** @deprecated use `ListMarketingautomationMessagesRequest$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationMessagesRequest$inboundSchema;
  /** @deprecated use `ListMarketingautomationMessagesRequest$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationMessagesRequest$outboundSchema;
  /** @deprecated use `ListMarketingautomationMessagesRequest$Outbound` instead. */
  export type Outbound = ListMarketingautomationMessagesRequest$Outbound;
}

export function listMarketingautomationMessagesRequestToJSON(
  listMarketingautomationMessagesRequest:
    ListMarketingautomationMessagesRequest,
): string {
  return JSON.stringify(
    ListMarketingautomationMessagesRequest$outboundSchema.parse(
      listMarketingautomationMessagesRequest,
    ),
  );
}

export function listMarketingautomationMessagesRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListMarketingautomationMessagesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ListMarketingautomationMessagesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListMarketingautomationMessagesRequest' from JSON`,
  );
}

/** @internal */
export const ListMarketingautomationMessagesResponseBody$inboundSchema:
  z.ZodType<
    ListMarketingautomationMessagesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    prev_cursor: z.nullable(z.string()),
    next_cursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedMarketingautomationMessageOutput$inboundSchema,
    ),
  }).transform((v) => {
    return remap$(v, {
      "prev_cursor": "prevCursor",
      "next_cursor": "nextCursor",
    });
  });

/** @internal */
export type ListMarketingautomationMessagesResponseBody$Outbound = {
  prev_cursor: string | null;
  next_cursor: string | null;
  data: Array<components.UnifiedMarketingautomationMessageOutput$Outbound>;
};

/** @internal */
export const ListMarketingautomationMessagesResponseBody$outboundSchema:
  z.ZodType<
    ListMarketingautomationMessagesResponseBody$Outbound,
    z.ZodTypeDef,
    ListMarketingautomationMessagesResponseBody
  > = z.object({
    prevCursor: z.nullable(z.string()),
    nextCursor: z.nullable(z.string()),
    data: z.array(
      components.UnifiedMarketingautomationMessageOutput$outboundSchema,
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
export namespace ListMarketingautomationMessagesResponseBody$ {
  /** @deprecated use `ListMarketingautomationMessagesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationMessagesResponseBody$inboundSchema;
  /** @deprecated use `ListMarketingautomationMessagesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationMessagesResponseBody$outboundSchema;
  /** @deprecated use `ListMarketingautomationMessagesResponseBody$Outbound` instead. */
  export type Outbound = ListMarketingautomationMessagesResponseBody$Outbound;
}

export function listMarketingautomationMessagesResponseBodyToJSON(
  listMarketingautomationMessagesResponseBody:
    ListMarketingautomationMessagesResponseBody,
): string {
  return JSON.stringify(
    ListMarketingautomationMessagesResponseBody$outboundSchema.parse(
      listMarketingautomationMessagesResponseBody,
    ),
  );
}

export function listMarketingautomationMessagesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  ListMarketingautomationMessagesResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListMarketingautomationMessagesResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListMarketingautomationMessagesResponseBody' from JSON`,
  );
}

/** @internal */
export const ListMarketingautomationMessagesResponse$inboundSchema: z.ZodType<
  ListMarketingautomationMessagesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() =>
    ListMarketingautomationMessagesResponseBody$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListMarketingautomationMessagesResponse$Outbound = {
  Result: ListMarketingautomationMessagesResponseBody$Outbound;
};

/** @internal */
export const ListMarketingautomationMessagesResponse$outboundSchema: z.ZodType<
  ListMarketingautomationMessagesResponse$Outbound,
  z.ZodTypeDef,
  ListMarketingautomationMessagesResponse
> = z.object({
  result: z.lazy(() =>
    ListMarketingautomationMessagesResponseBody$outboundSchema
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
export namespace ListMarketingautomationMessagesResponse$ {
  /** @deprecated use `ListMarketingautomationMessagesResponse$inboundSchema` instead. */
  export const inboundSchema =
    ListMarketingautomationMessagesResponse$inboundSchema;
  /** @deprecated use `ListMarketingautomationMessagesResponse$outboundSchema` instead. */
  export const outboundSchema =
    ListMarketingautomationMessagesResponse$outboundSchema;
  /** @deprecated use `ListMarketingautomationMessagesResponse$Outbound` instead. */
  export type Outbound = ListMarketingautomationMessagesResponse$Outbound;
}

export function listMarketingautomationMessagesResponseToJSON(
  listMarketingautomationMessagesResponse:
    ListMarketingautomationMessagesResponse,
): string {
  return JSON.stringify(
    ListMarketingautomationMessagesResponse$outboundSchema.parse(
      listMarketingautomationMessagesResponse,
    ),
  );
}

export function listMarketingautomationMessagesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ListMarketingautomationMessagesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ListMarketingautomationMessagesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ListMarketingautomationMessagesResponse' from JSON`,
  );
}
