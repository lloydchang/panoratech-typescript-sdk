/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksCreate } from "../funcs/webhooksCreate.js";
import { webhooksDelete } from "../funcs/webhooksDelete.js";
import { webhooksList } from "../funcs/webhooksList.js";
import { webhooksUpdateStatus } from "../funcs/webhooksUpdateStatus.js";
import { webhooksVerifyEvent } from "../funcs/webhooksVerifyEvent.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Webhooks extends ClientSDK {
  /**
   * List webhooks
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.WebhookResponse>> {
    return unwrapAsync(webhooksList(
      this,
      options,
    ));
  }

  /**
   * Create webhook
   */
  async create(
    request: components.WebhookDto,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(webhooksCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Webhook
   */
  async delete(
    request: operations.DeleteRequest,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(webhooksDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Update webhook status
   */
  async updateStatus(
    request: operations.UpdateStatusRequest,
    options?: RequestOptions,
  ): Promise<components.WebhookResponse> {
    return unwrapAsync(webhooksUpdateStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Verify payload signature of the webhook
   */
  async verifyEvent(
    request: components.SignatureVerificationDto,
    options?: RequestOptions,
  ): Promise<{ [k: string]: any }> {
    return unwrapAsync(webhooksVerifyEvent(
      this,
      request,
      options,
    ));
  }
}
