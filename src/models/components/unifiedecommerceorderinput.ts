/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  LineItem,
  LineItem$inboundSchema,
  LineItem$Outbound,
  LineItem$outboundSchema,
} from "./lineitem.js";

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedEcommerceOrderInputFieldMappings = {};

export type UnifiedEcommerceOrderInput = {
  /**
   * The status of the order
   */
  orderStatus?: string | null | undefined;
  /**
   * The number of the order
   */
  orderNumber?: string | null | undefined;
  /**
   * The payment status of the order
   */
  paymentStatus?: string | null | undefined;
  /**
   * The currency of the order. Authorized value must be of type CurrencyCode (ISO 4217)
   */
  currency?: string | null | undefined;
  /**
   * The total price of the order
   */
  totalPrice?: number | null | undefined;
  /**
   * The total discount on the order
   */
  totalDiscount?: number | null | undefined;
  /**
   * The total shipping cost of the order
   */
  totalShipping?: number | null | undefined;
  /**
   * The total tax on the order
   */
  totalTax?: number | null | undefined;
  /**
   * The fulfillment status of the order
   */
  fulfillmentStatus?: string | null | undefined;
  /**
   * The UUID of the customer associated with the order
   */
  customerId?: string | null | undefined;
  /**
   * The items in the order
   */
  items?: Array<LineItem> | null | undefined;
  /**
   * The custom field mappings of the object between the remote 3rd party & Panora
   */
  fieldMappings?: UnifiedEcommerceOrderInputFieldMappings | null | undefined;
};

/** @internal */
export const UnifiedEcommerceOrderInputFieldMappings$inboundSchema: z.ZodType<
  UnifiedEcommerceOrderInputFieldMappings,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type UnifiedEcommerceOrderInputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedEcommerceOrderInputFieldMappings$outboundSchema: z.ZodType<
  UnifiedEcommerceOrderInputFieldMappings$Outbound,
  z.ZodTypeDef,
  UnifiedEcommerceOrderInputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedEcommerceOrderInputFieldMappings$ {
  /** @deprecated use `UnifiedEcommerceOrderInputFieldMappings$inboundSchema` instead. */
  export const inboundSchema =
    UnifiedEcommerceOrderInputFieldMappings$inboundSchema;
  /** @deprecated use `UnifiedEcommerceOrderInputFieldMappings$outboundSchema` instead. */
  export const outboundSchema =
    UnifiedEcommerceOrderInputFieldMappings$outboundSchema;
  /** @deprecated use `UnifiedEcommerceOrderInputFieldMappings$Outbound` instead. */
  export type Outbound = UnifiedEcommerceOrderInputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedEcommerceOrderInput$inboundSchema: z.ZodType<
  UnifiedEcommerceOrderInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  order_status: z.nullable(z.string()).optional(),
  order_number: z.nullable(z.string()).optional(),
  payment_status: z.nullable(z.string()).optional(),
  currency: z.nullable(z.string()).optional(),
  total_price: z.nullable(z.number()).optional(),
  total_discount: z.nullable(z.number()).optional(),
  total_shipping: z.nullable(z.number()).optional(),
  total_tax: z.nullable(z.number()).optional(),
  fulfillment_status: z.nullable(z.string()).optional(),
  customer_id: z.nullable(z.string()).optional(),
  items: z.nullable(z.array(LineItem$inboundSchema)).optional(),
  field_mappings: z.nullable(
    z.lazy(() => UnifiedEcommerceOrderInputFieldMappings$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "order_status": "orderStatus",
    "order_number": "orderNumber",
    "payment_status": "paymentStatus",
    "total_price": "totalPrice",
    "total_discount": "totalDiscount",
    "total_shipping": "totalShipping",
    "total_tax": "totalTax",
    "fulfillment_status": "fulfillmentStatus",
    "customer_id": "customerId",
    "field_mappings": "fieldMappings",
  });
});

/** @internal */
export type UnifiedEcommerceOrderInput$Outbound = {
  order_status?: string | null | undefined;
  order_number?: string | null | undefined;
  payment_status?: string | null | undefined;
  currency?: string | null | undefined;
  total_price?: number | null | undefined;
  total_discount?: number | null | undefined;
  total_shipping?: number | null | undefined;
  total_tax?: number | null | undefined;
  fulfillment_status?: string | null | undefined;
  customer_id?: string | null | undefined;
  items?: Array<LineItem$Outbound> | null | undefined;
  field_mappings?:
    | UnifiedEcommerceOrderInputFieldMappings$Outbound
    | null
    | undefined;
};

/** @internal */
export const UnifiedEcommerceOrderInput$outboundSchema: z.ZodType<
  UnifiedEcommerceOrderInput$Outbound,
  z.ZodTypeDef,
  UnifiedEcommerceOrderInput
> = z.object({
  orderStatus: z.nullable(z.string()).optional(),
  orderNumber: z.nullable(z.string()).optional(),
  paymentStatus: z.nullable(z.string()).optional(),
  currency: z.nullable(z.string()).optional(),
  totalPrice: z.nullable(z.number()).optional(),
  totalDiscount: z.nullable(z.number()).optional(),
  totalShipping: z.nullable(z.number()).optional(),
  totalTax: z.nullable(z.number()).optional(),
  fulfillmentStatus: z.nullable(z.string()).optional(),
  customerId: z.nullable(z.string()).optional(),
  items: z.nullable(z.array(LineItem$outboundSchema)).optional(),
  fieldMappings: z.nullable(
    z.lazy(() => UnifiedEcommerceOrderInputFieldMappings$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    orderStatus: "order_status",
    orderNumber: "order_number",
    paymentStatus: "payment_status",
    totalPrice: "total_price",
    totalDiscount: "total_discount",
    totalShipping: "total_shipping",
    totalTax: "total_tax",
    fulfillmentStatus: "fulfillment_status",
    customerId: "customer_id",
    fieldMappings: "field_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedEcommerceOrderInput$ {
  /** @deprecated use `UnifiedEcommerceOrderInput$inboundSchema` instead. */
  export const inboundSchema = UnifiedEcommerceOrderInput$inboundSchema;
  /** @deprecated use `UnifiedEcommerceOrderInput$outboundSchema` instead. */
  export const outboundSchema = UnifiedEcommerceOrderInput$outboundSchema;
  /** @deprecated use `UnifiedEcommerceOrderInput$Outbound` instead. */
  export type Outbound = UnifiedEcommerceOrderInput$Outbound;
}
