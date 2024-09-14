/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RemoteIdRequest = {
  remoteId: string;
};

/** @internal */
export const RemoteIdRequest$inboundSchema: z.ZodType<
  RemoteIdRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  remoteId: z.string(),
});

/** @internal */
export type RemoteIdRequest$Outbound = {
  remoteId: string;
};

/** @internal */
export const RemoteIdRequest$outboundSchema: z.ZodType<
  RemoteIdRequest$Outbound,
  z.ZodTypeDef,
  RemoteIdRequest
> = z.object({
  remoteId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemoteIdRequest$ {
  /** @deprecated use `RemoteIdRequest$inboundSchema` instead. */
  export const inboundSchema = RemoteIdRequest$inboundSchema;
  /** @deprecated use `RemoteIdRequest$outboundSchema` instead. */
  export const outboundSchema = RemoteIdRequest$outboundSchema;
  /** @deprecated use `RemoteIdRequest$Outbound` instead. */
  export type Outbound = RemoteIdRequest$Outbound;
}
