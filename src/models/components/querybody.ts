/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type QueryBody = {
  /**
   * The query you want to received embeddings and chunks for
   */
  query: string;
  /**
   * The number of most appropriate documents for your query.
   */
  topK?: number | null | undefined;
};

/** @internal */
export const QueryBody$inboundSchema: z.ZodType<
  QueryBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string(),
  topK: z.nullable(z.number()).optional(),
});

/** @internal */
export type QueryBody$Outbound = {
  query: string;
  topK?: number | null | undefined;
};

/** @internal */
export const QueryBody$outboundSchema: z.ZodType<
  QueryBody$Outbound,
  z.ZodTypeDef,
  QueryBody
> = z.object({
  query: z.string(),
  topK: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryBody$ {
  /** @deprecated use `QueryBody$inboundSchema` instead. */
  export const inboundSchema = QueryBody$inboundSchema;
  /** @deprecated use `QueryBody$outboundSchema` instead. */
  export const outboundSchema = QueryBody$outboundSchema;
  /** @deprecated use `QueryBody$Outbound` instead. */
  export type Outbound = QueryBody$Outbound;
}

export function queryBodyToJSON(queryBody: QueryBody): string {
  return JSON.stringify(QueryBody$outboundSchema.parse(queryBody));
}

export function queryBodyFromJSON(
  jsonString: string,
): SafeParseResult<QueryBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QueryBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueryBody' from JSON`,
  );
}
