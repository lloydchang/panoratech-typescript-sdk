/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisTimesheetentriesCreate } from "../funcs/hrisTimesheetentriesCreate.js";
import { hrisTimesheetentriesList } from "../funcs/hrisTimesheetentriesList.js";
import { hrisTimesheetentriesRetrieve } from "../funcs/hrisTimesheetentriesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Timesheetentries extends ClientSDK {
  /**
   * List Timesheetentries
   */
  async list(
    request: operations.ListHrisTimesheetentriesRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListHrisTimesheetentriesResponse>> {
    return unwrapResultIterator(hrisTimesheetentriesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Timesheetentrys
   *
   * @remarks
   * Create Timesheetentrys in any supported Hris software
   */
  async create(
    request: operations.CreateHrisTimesheetentryRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedHrisTimesheetEntryOutput> {
    return unwrapAsync(hrisTimesheetentriesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Timesheetentry
   *
   * @remarks
   * Retrieve an Timesheetentry from any connected Hris software
   */
  async retrieve(
    request: operations.RetrieveHrisTimesheetentryRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedHrisTimesheetEntryOutput> {
    return unwrapAsync(hrisTimesheetentriesRetrieve(
      this,
      request,
      options,
    ));
  }
}
