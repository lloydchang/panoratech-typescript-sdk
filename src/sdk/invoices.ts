/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingInvoicesCreate } from "../funcs/accountingInvoicesCreate.js";
import { accountingInvoicesList } from "../funcs/accountingInvoicesList.js";
import { accountingInvoicesRetrieve } from "../funcs/accountingInvoicesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Invoices extends ClientSDK {
    /**
     * List  Invoices
     */
    async list(
        request: operations.ListAccountingInvoiceRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListAccountingInvoiceResponse>> {
        return unwrapResultIterator(accountingInvoicesList(this, request, options));
    }

    /**
     * Create Invoices
     *
     * @remarks
     * Create invoices in any supported Accounting software
     */
    async create(
        request: operations.CreateAccountingInvoiceRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAccountingInvoiceOutput> {
        return unwrapAsync(accountingInvoicesCreate(this, request, options));
    }

    /**
     * Retrieve Invoices
     *
     * @remarks
     * Retrieve Invoices from any connected Accounting software
     */
    async retrieve(
        request: operations.RetrieveAccountingInvoiceRequest,
        options?: RequestOptions
    ): Promise<components.UnifiedAccountingInvoiceOutput> {
        return unwrapAsync(accountingInvoicesRetrieve(this, request, options));
    }
}
