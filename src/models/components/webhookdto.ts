/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type WebhookDto = {
    /**
     * The endpoint url of the webhook.
     */
    url: string | null;
    /**
     * The description of the webhook.
     */
    description?: string | null | undefined;
    /**
     * The events that the webhook listen to.
     */
    scope: Array<string> | null;
};

/** @internal */
export const WebhookDto$inboundSchema: z.ZodType<WebhookDto, z.ZodTypeDef, unknown> = z.object({
    url: z.nullable(z.string()),
    description: z.nullable(z.string()).optional(),
    scope: z.nullable(z.array(z.string())),
});

/** @internal */
export type WebhookDto$Outbound = {
    url: string | null;
    description?: string | null | undefined;
    scope: Array<string> | null;
};

/** @internal */
export const WebhookDto$outboundSchema: z.ZodType<WebhookDto$Outbound, z.ZodTypeDef, WebhookDto> =
    z.object({
        url: z.nullable(z.string()),
        description: z.nullable(z.string()).optional(),
        scope: z.nullable(z.array(z.string())),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookDto$ {
    /** @deprecated use `WebhookDto$inboundSchema` instead. */
    export const inboundSchema = WebhookDto$inboundSchema;
    /** @deprecated use `WebhookDto$outboundSchema` instead. */
    export const outboundSchema = WebhookDto$outboundSchema;
    /** @deprecated use `WebhookDto$Outbound` instead. */
    export type Outbound = WebhookDto$Outbound;
}
