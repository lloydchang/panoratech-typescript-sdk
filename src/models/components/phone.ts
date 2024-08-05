/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The phone type. Authorized values are either MOBILE or WORK
 */
export enum PhoneType {
    Mobile = "MOBILE",
    Work = "WORK",
}

export type Phone = {
    /**
     * The phone number starting with a plus (+) followed by the country code (e.g +336676778890 for France)
     */
    phoneNumber: string | null;
    /**
     * The phone type. Authorized values are either MOBILE or WORK
     */
    phoneType: PhoneType | null;
    /**
     * The owner type of a phone number
     */
    ownerType?: string | null | undefined;
};

/** @internal */
export const PhoneType$inboundSchema: z.ZodNativeEnum<typeof PhoneType> = z.nativeEnum(PhoneType);

/** @internal */
export const PhoneType$outboundSchema: z.ZodNativeEnum<typeof PhoneType> = PhoneType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PhoneType$ {
    /** @deprecated use `PhoneType$inboundSchema` instead. */
    export const inboundSchema = PhoneType$inboundSchema;
    /** @deprecated use `PhoneType$outboundSchema` instead. */
    export const outboundSchema = PhoneType$outboundSchema;
}

/** @internal */
export const Phone$inboundSchema: z.ZodType<Phone, z.ZodTypeDef, unknown> = z
    .object({
        phone_number: z.nullable(z.string()),
        phone_type: z.nullable(PhoneType$inboundSchema),
        owner_type: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            phone_number: "phoneNumber",
            phone_type: "phoneType",
            owner_type: "ownerType",
        });
    });

/** @internal */
export type Phone$Outbound = {
    phone_number: string | null;
    phone_type: string | null;
    owner_type?: string | null | undefined;
};

/** @internal */
export const Phone$outboundSchema: z.ZodType<Phone$Outbound, z.ZodTypeDef, Phone> = z
    .object({
        phoneNumber: z.nullable(z.string()),
        phoneType: z.nullable(PhoneType$outboundSchema),
        ownerType: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            phoneNumber: "phone_number",
            phoneType: "phone_type",
            ownerType: "owner_type",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Phone$ {
    /** @deprecated use `Phone$inboundSchema` instead. */
    export const inboundSchema = Phone$inboundSchema;
    /** @deprecated use `Phone$outboundSchema` instead. */
    export const outboundSchema = Phone$outboundSchema;
    /** @deprecated use `Phone$Outbound` instead. */
    export type Outbound = Phone$Outbound;
}
