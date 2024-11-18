/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LoginDto = {
  idUser: string;
  email: string;
  passwordHash: string;
};

/** @internal */
export const LoginDto$inboundSchema: z.ZodType<
  LoginDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  id_user: z.string(),
  email: z.string(),
  password_hash: z.string(),
}).transform((v) => {
  return remap$(v, {
    "id_user": "idUser",
    "password_hash": "passwordHash",
  });
});

/** @internal */
export type LoginDto$Outbound = {
  id_user: string;
  email: string;
  password_hash: string;
};

/** @internal */
export const LoginDto$outboundSchema: z.ZodType<
  LoginDto$Outbound,
  z.ZodTypeDef,
  LoginDto
> = z.object({
  idUser: z.string(),
  email: z.string(),
  passwordHash: z.string(),
}).transform((v) => {
  return remap$(v, {
    idUser: "id_user",
    passwordHash: "password_hash",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginDto$ {
  /** @deprecated use `LoginDto$inboundSchema` instead. */
  export const inboundSchema = LoginDto$inboundSchema;
  /** @deprecated use `LoginDto$outboundSchema` instead. */
  export const outboundSchema = LoginDto$outboundSchema;
  /** @deprecated use `LoginDto$Outbound` instead. */
  export type Outbound = LoginDto$Outbound;
}

export function loginDtoToJSON(loginDto: LoginDto): string {
  return JSON.stringify(LoginDto$outboundSchema.parse(loginDto));
}

export function loginDtoFromJSON(
  jsonString: string,
): SafeParseResult<LoginDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LoginDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LoginDto' from JSON`,
  );
}
