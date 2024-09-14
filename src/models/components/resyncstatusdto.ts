/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum Vertical {
  Ticketing = "ticketing",
  Ats = "ats",
  Accounting = "accounting",
  Hris = "hris",
  Crm = "crm",
  Filestorage = "filestorage",
  Ecommerce = "ecommerce",
  Marketingautomation = "marketingautomation",
}

export enum Status {
  Success = "success",
  Fail = "fail",
}

export type ResyncStatusDto = {
  timestamp: Date | null;
  vertical: Vertical | null;
  provider: string | null;
  status: Status | null;
};

/** @internal */
export const Vertical$inboundSchema: z.ZodNativeEnum<typeof Vertical> = z
  .nativeEnum(Vertical);

/** @internal */
export const Vertical$outboundSchema: z.ZodNativeEnum<typeof Vertical> =
  Vertical$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Vertical$ {
  /** @deprecated use `Vertical$inboundSchema` instead. */
  export const inboundSchema = Vertical$inboundSchema;
  /** @deprecated use `Vertical$outboundSchema` instead. */
  export const outboundSchema = Vertical$outboundSchema;
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const ResyncStatusDto$inboundSchema: z.ZodType<
  ResyncStatusDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  timestamp: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  vertical: z.nullable(Vertical$inboundSchema),
  provider: z.nullable(z.string()),
  status: z.nullable(Status$inboundSchema),
});

/** @internal */
export type ResyncStatusDto$Outbound = {
  timestamp: string | null;
  vertical: string | null;
  provider: string | null;
  status: string | null;
};

/** @internal */
export const ResyncStatusDto$outboundSchema: z.ZodType<
  ResyncStatusDto$Outbound,
  z.ZodTypeDef,
  ResyncStatusDto
> = z.object({
  timestamp: z.nullable(z.date().transform(v => v.toISOString())),
  vertical: z.nullable(Vertical$outboundSchema),
  provider: z.nullable(z.string()),
  status: z.nullable(Status$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResyncStatusDto$ {
  /** @deprecated use `ResyncStatusDto$inboundSchema` instead. */
  export const inboundSchema = ResyncStatusDto$inboundSchema;
  /** @deprecated use `ResyncStatusDto$outboundSchema` instead. */
  export const outboundSchema = ResyncStatusDto$outboundSchema;
  /** @deprecated use `ResyncStatusDto$Outbound` instead. */
  export type Outbound = ResyncStatusDto$Outbound;
}
