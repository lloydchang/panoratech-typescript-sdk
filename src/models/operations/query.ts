/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type QueryRequest = {
  /**
   * The connection token
   */
  xConnectionToken: string;
  queryBody: components.QueryBody;
};

export type QueryResponseBody = {};

/** @internal */
export const QueryRequest$inboundSchema: z.ZodType<
  QueryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-connection-token": z.string(),
  QueryBody: components.QueryBody$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "x-connection-token": "xConnectionToken",
    "QueryBody": "queryBody",
  });
});

/** @internal */
export type QueryRequest$Outbound = {
  "x-connection-token": string;
  QueryBody: components.QueryBody$Outbound;
};

/** @internal */
export const QueryRequest$outboundSchema: z.ZodType<
  QueryRequest$Outbound,
  z.ZodTypeDef,
  QueryRequest
> = z.object({
  xConnectionToken: z.string(),
  queryBody: components.QueryBody$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xConnectionToken: "x-connection-token",
    queryBody: "QueryBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryRequest$ {
  /** @deprecated use `QueryRequest$inboundSchema` instead. */
  export const inboundSchema = QueryRequest$inboundSchema;
  /** @deprecated use `QueryRequest$outboundSchema` instead. */
  export const outboundSchema = QueryRequest$outboundSchema;
  /** @deprecated use `QueryRequest$Outbound` instead. */
  export type Outbound = QueryRequest$Outbound;
}

/** @internal */
export const QueryResponseBody$inboundSchema: z.ZodType<
  QueryResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type QueryResponseBody$Outbound = {};

/** @internal */
export const QueryResponseBody$outboundSchema: z.ZodType<
  QueryResponseBody$Outbound,
  z.ZodTypeDef,
  QueryResponseBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryResponseBody$ {
  /** @deprecated use `QueryResponseBody$inboundSchema` instead. */
  export const inboundSchema = QueryResponseBody$inboundSchema;
  /** @deprecated use `QueryResponseBody$outboundSchema` instead. */
  export const outboundSchema = QueryResponseBody$outboundSchema;
  /** @deprecated use `QueryResponseBody$Outbound` instead. */
  export type Outbound = QueryResponseBody$Outbound;
}
