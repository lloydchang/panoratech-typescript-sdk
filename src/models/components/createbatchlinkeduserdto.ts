/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateBatchLinkedUserDto = {
  /**
   * The ids of the users in the context of your own software
   */
  linkedUserOriginIds: Array<string> | null;
  /**
   * Your company alias
   */
  alias: string | null;
};

/** @internal */
export const CreateBatchLinkedUserDto$inboundSchema: z.ZodType<
  CreateBatchLinkedUserDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  linked_user_origin_ids: z.nullable(z.array(z.string())),
  alias: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "linked_user_origin_ids": "linkedUserOriginIds",
  });
});

/** @internal */
export type CreateBatchLinkedUserDto$Outbound = {
  linked_user_origin_ids: Array<string> | null;
  alias: string | null;
};

/** @internal */
export const CreateBatchLinkedUserDto$outboundSchema: z.ZodType<
  CreateBatchLinkedUserDto$Outbound,
  z.ZodTypeDef,
  CreateBatchLinkedUserDto
> = z.object({
  linkedUserOriginIds: z.nullable(z.array(z.string())),
  alias: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    linkedUserOriginIds: "linked_user_origin_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBatchLinkedUserDto$ {
  /** @deprecated use `CreateBatchLinkedUserDto$inboundSchema` instead. */
  export const inboundSchema = CreateBatchLinkedUserDto$inboundSchema;
  /** @deprecated use `CreateBatchLinkedUserDto$outboundSchema` instead. */
  export const outboundSchema = CreateBatchLinkedUserDto$outboundSchema;
  /** @deprecated use `CreateBatchLinkedUserDto$Outbound` instead. */
  export type Outbound = CreateBatchLinkedUserDto$Outbound;
}

export function createBatchLinkedUserDtoToJSON(
  createBatchLinkedUserDto: CreateBatchLinkedUserDto,
): string {
  return JSON.stringify(
    CreateBatchLinkedUserDto$outboundSchema.parse(createBatchLinkedUserDto),
  );
}

export function createBatchLinkedUserDtoFromJSON(
  jsonString: string,
): SafeParseResult<CreateBatchLinkedUserDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateBatchLinkedUserDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBatchLinkedUserDto' from JSON`,
  );
}
