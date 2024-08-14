/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * The currency used by the company
 */
export enum UnifiedAccountingCompanyinfoOutputCurrency {
    Aed = "AED",
    Afn = "AFN",
    All = "ALL",
    Amd = "AMD",
    Ang = "ANG",
    Aoa = "AOA",
    Ars = "ARS",
    Aud = "AUD",
    Awg = "AWG",
    Azn = "AZN",
    Bam = "BAM",
    Bbd = "BBD",
    Bdt = "BDT",
    Bgn = "BGN",
    Bhd = "BHD",
    Bif = "BIF",
    Bmd = "BMD",
    Bnd = "BND",
    Bob = "BOB",
    Brl = "BRL",
    Bsd = "BSD",
    Btn = "BTN",
    Bwp = "BWP",
    Byn = "BYN",
    Bzd = "BZD",
    Cad = "CAD",
    Cdf = "CDF",
    Chf = "CHF",
    Clp = "CLP",
    Cny = "CNY",
    Cop = "COP",
    Crc = "CRC",
    Cup = "CUP",
    Cve = "CVE",
    Czk = "CZK",
    Djf = "DJF",
    Dkk = "DKK",
    Dop = "DOP",
    Dzd = "DZD",
    Egp = "EGP",
    Ern = "ERN",
    Etb = "ETB",
    Eur = "EUR",
    Fjd = "FJD",
    Fkp = "FKP",
    Fok = "FOK",
    Gbp = "GBP",
    Gel = "GEL",
    Ggp = "GGP",
    Ghs = "GHS",
    Gip = "GIP",
    Gmd = "GMD",
    Gnf = "GNF",
    Gtq = "GTQ",
    Gyd = "GYD",
    Hkd = "HKD",
    Hnl = "HNL",
    Hrk = "HRK",
    Htg = "HTG",
    Huf = "HUF",
    Idr = "IDR",
    Ils = "ILS",
    Imp = "IMP",
    Inr = "INR",
    Iqd = "IQD",
    Irr = "IRR",
    Isk = "ISK",
    Jep = "JEP",
    Jmd = "JMD",
    Jod = "JOD",
    Jpy = "JPY",
    Kes = "KES",
    Kgs = "KGS",
    Khr = "KHR",
    Kid = "KID",
    Kmf = "KMF",
    Krw = "KRW",
    Kwd = "KWD",
    Kyd = "KYD",
    Kzt = "KZT",
    Lak = "LAK",
    Lbp = "LBP",
    Lkr = "LKR",
    Lrd = "LRD",
    Lsl = "LSL",
    Lyd = "LYD",
    Mad = "MAD",
    Mdl = "MDL",
    Mga = "MGA",
    Mkd = "MKD",
    Mmk = "MMK",
    Mnt = "MNT",
    Mop = "MOP",
    Mru = "MRU",
    Mur = "MUR",
    Mvr = "MVR",
    Mwk = "MWK",
    Mxn = "MXN",
    Myr = "MYR",
    Mzn = "MZN",
    Nad = "NAD",
    Ngn = "NGN",
    Nio = "NIO",
    Nok = "NOK",
    Npr = "NPR",
    Nzd = "NZD",
    Omr = "OMR",
    Pab = "PAB",
    Pen = "PEN",
    Pgk = "PGK",
    Php = "PHP",
    Pkr = "PKR",
    Pln = "PLN",
    Pyg = "PYG",
    Qar = "QAR",
    Ron = "RON",
    Rsd = "RSD",
    Rub = "RUB",
    Rwf = "RWF",
    Sar = "SAR",
    Sbd = "SBD",
    Scr = "SCR",
    Sdg = "SDG",
    Sek = "SEK",
    Sgd = "SGD",
    Shp = "SHP",
    Sle = "SLE",
    Sll = "SLL",
    Sos = "SOS",
    Srd = "SRD",
    Ssp = "SSP",
    Stn = "STN",
    Syp = "SYP",
    Szl = "SZL",
    Thb = "THB",
    Tjs = "TJS",
    Tmt = "TMT",
    Tnd = "TND",
    Top = "TOP",
    Try = "TRY",
    Ttd = "TTD",
    Tvd = "TVD",
    Twd = "TWD",
    Tzs = "TZS",
    Uah = "UAH",
    Ugx = "UGX",
    Usd = "USD",
    Uyu = "UYU",
    Uzs = "UZS",
    Ves = "VES",
    Vnd = "VND",
    Vuv = "VUV",
    Wst = "WST",
    Xaf = "XAF",
    Xcd = "XCD",
    Xdr = "XDR",
    Xof = "XOF",
    Xpf = "XPF",
    Yer = "YER",
    Zar = "ZAR",
    Zmw = "ZMW",
    Zwl = "ZWL",
}

/**
 * The custom field mappings of the object between the remote 3rd party & Panora
 */
export type UnifiedAccountingCompanyinfoOutputFieldMappings = {};

/**
 * The remote data of the company info in the context of the 3rd Party
 */
export type UnifiedAccountingCompanyinfoOutputRemoteData = {};

export type UnifiedAccountingCompanyinfoOutput = {
    /**
     * The name of the company
     */
    name?: string | null | undefined;
    /**
     * The legal name of the company
     */
    legalName?: string | null | undefined;
    /**
     * The tax number of the company
     */
    taxNumber?: string | null | undefined;
    /**
     * The month of the fiscal year end (1-12)
     */
    fiscalYearEndMonth?: number | null | undefined;
    /**
     * The day of the fiscal year end (1-31)
     */
    fiscalYearEndDay?: number | null | undefined;
    /**
     * The currency used by the company
     */
    currency?: UnifiedAccountingCompanyinfoOutputCurrency | null | undefined;
    /**
     * The URLs associated with the company
     */
    urls?: Array<string> | null | undefined;
    /**
     * The UUIDs of the tracking categories used by the company
     */
    trackingCategories?: Array<string> | null | undefined;
    /**
     * The custom field mappings of the object between the remote 3rd party & Panora
     */
    fieldMappings?: UnifiedAccountingCompanyinfoOutputFieldMappings | null | undefined;
    /**
     * The UUID of the company info record
     */
    id?: string | null | undefined;
    /**
     * The remote ID of the company info in the context of the 3rd Party
     */
    remoteId?: string | null | undefined;
    /**
     * The remote data of the company info in the context of the 3rd Party
     */
    remoteData?: UnifiedAccountingCompanyinfoOutputRemoteData | null | undefined;
    /**
     * The date when the company info was created in the remote system
     */
    remoteCreatedAt?: Date | null | undefined;
    /**
     * The created date of the company info record
     */
    createdAt?: Date | null | undefined;
    /**
     * The last modified date of the company info record
     */
    modifiedAt?: Date | null | undefined;
};

/** @internal */
export const UnifiedAccountingCompanyinfoOutputCurrency$inboundSchema: z.ZodNativeEnum<
    typeof UnifiedAccountingCompanyinfoOutputCurrency
> = z.nativeEnum(UnifiedAccountingCompanyinfoOutputCurrency);

/** @internal */
export const UnifiedAccountingCompanyinfoOutputCurrency$outboundSchema: z.ZodNativeEnum<
    typeof UnifiedAccountingCompanyinfoOutputCurrency
> = UnifiedAccountingCompanyinfoOutputCurrency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCompanyinfoOutputCurrency$ {
    /** @deprecated use `UnifiedAccountingCompanyinfoOutputCurrency$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingCompanyinfoOutputCurrency$inboundSchema;
    /** @deprecated use `UnifiedAccountingCompanyinfoOutputCurrency$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingCompanyinfoOutputCurrency$outboundSchema;
}

/** @internal */
export const UnifiedAccountingCompanyinfoOutputFieldMappings$inboundSchema: z.ZodType<
    UnifiedAccountingCompanyinfoOutputFieldMappings,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound = {};

/** @internal */
export const UnifiedAccountingCompanyinfoOutputFieldMappings$outboundSchema: z.ZodType<
    UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCompanyinfoOutputFieldMappings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCompanyinfoOutputFieldMappings$ {
    /** @deprecated use `UnifiedAccountingCompanyinfoOutputFieldMappings$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingCompanyinfoOutputFieldMappings$inboundSchema;
    /** @deprecated use `UnifiedAccountingCompanyinfoOutputFieldMappings$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingCompanyinfoOutputFieldMappings$outboundSchema;
    /** @deprecated use `UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound` instead. */
    export type Outbound = UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound;
}

/** @internal */
export const UnifiedAccountingCompanyinfoOutputRemoteData$inboundSchema: z.ZodType<
    UnifiedAccountingCompanyinfoOutputRemoteData,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type UnifiedAccountingCompanyinfoOutputRemoteData$Outbound = {};

/** @internal */
export const UnifiedAccountingCompanyinfoOutputRemoteData$outboundSchema: z.ZodType<
    UnifiedAccountingCompanyinfoOutputRemoteData$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCompanyinfoOutputRemoteData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCompanyinfoOutputRemoteData$ {
    /** @deprecated use `UnifiedAccountingCompanyinfoOutputRemoteData$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingCompanyinfoOutputRemoteData$inboundSchema;
    /** @deprecated use `UnifiedAccountingCompanyinfoOutputRemoteData$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingCompanyinfoOutputRemoteData$outboundSchema;
    /** @deprecated use `UnifiedAccountingCompanyinfoOutputRemoteData$Outbound` instead. */
    export type Outbound = UnifiedAccountingCompanyinfoOutputRemoteData$Outbound;
}

/** @internal */
export const UnifiedAccountingCompanyinfoOutput$inboundSchema: z.ZodType<
    UnifiedAccountingCompanyinfoOutput,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.nullable(z.string()).optional(),
        legal_name: z.nullable(z.string()).optional(),
        tax_number: z.nullable(z.string()).optional(),
        fiscal_year_end_month: z.nullable(z.number()).optional(),
        fiscal_year_end_day: z.nullable(z.number()).optional(),
        currency: z.nullable(UnifiedAccountingCompanyinfoOutputCurrency$inboundSchema).optional(),
        urls: z.nullable(z.array(z.string())).optional(),
        tracking_categories: z.nullable(z.array(z.string())).optional(),
        field_mappings: z
            .nullable(z.lazy(() => UnifiedAccountingCompanyinfoOutputFieldMappings$inboundSchema))
            .optional(),
        id: z.nullable(z.string()).optional(),
        remote_id: z.nullable(z.string()).optional(),
        remote_data: z
            .nullable(z.lazy(() => UnifiedAccountingCompanyinfoOutputRemoteData$inboundSchema))
            .optional(),
        remote_created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        created_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        modified_at: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            legal_name: "legalName",
            tax_number: "taxNumber",
            fiscal_year_end_month: "fiscalYearEndMonth",
            fiscal_year_end_day: "fiscalYearEndDay",
            tracking_categories: "trackingCategories",
            field_mappings: "fieldMappings",
            remote_id: "remoteId",
            remote_data: "remoteData",
            remote_created_at: "remoteCreatedAt",
            created_at: "createdAt",
            modified_at: "modifiedAt",
        });
    });

/** @internal */
export type UnifiedAccountingCompanyinfoOutput$Outbound = {
    name?: string | null | undefined;
    legal_name?: string | null | undefined;
    tax_number?: string | null | undefined;
    fiscal_year_end_month?: number | null | undefined;
    fiscal_year_end_day?: number | null | undefined;
    currency?: string | null | undefined;
    urls?: Array<string> | null | undefined;
    tracking_categories?: Array<string> | null | undefined;
    field_mappings?: UnifiedAccountingCompanyinfoOutputFieldMappings$Outbound | null | undefined;
    id?: string | null | undefined;
    remote_id?: string | null | undefined;
    remote_data?: UnifiedAccountingCompanyinfoOutputRemoteData$Outbound | null | undefined;
    remote_created_at?: string | null | undefined;
    created_at?: string | null | undefined;
    modified_at?: string | null | undefined;
};

/** @internal */
export const UnifiedAccountingCompanyinfoOutput$outboundSchema: z.ZodType<
    UnifiedAccountingCompanyinfoOutput$Outbound,
    z.ZodTypeDef,
    UnifiedAccountingCompanyinfoOutput
> = z
    .object({
        name: z.nullable(z.string()).optional(),
        legalName: z.nullable(z.string()).optional(),
        taxNumber: z.nullable(z.string()).optional(),
        fiscalYearEndMonth: z.nullable(z.number()).optional(),
        fiscalYearEndDay: z.nullable(z.number()).optional(),
        currency: z.nullable(UnifiedAccountingCompanyinfoOutputCurrency$outboundSchema).optional(),
        urls: z.nullable(z.array(z.string())).optional(),
        trackingCategories: z.nullable(z.array(z.string())).optional(),
        fieldMappings: z
            .nullable(z.lazy(() => UnifiedAccountingCompanyinfoOutputFieldMappings$outboundSchema))
            .optional(),
        id: z.nullable(z.string()).optional(),
        remoteId: z.nullable(z.string()).optional(),
        remoteData: z
            .nullable(z.lazy(() => UnifiedAccountingCompanyinfoOutputRemoteData$outboundSchema))
            .optional(),
        remoteCreatedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        createdAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            legalName: "legal_name",
            taxNumber: "tax_number",
            fiscalYearEndMonth: "fiscal_year_end_month",
            fiscalYearEndDay: "fiscal_year_end_day",
            trackingCategories: "tracking_categories",
            fieldMappings: "field_mappings",
            remoteId: "remote_id",
            remoteData: "remote_data",
            remoteCreatedAt: "remote_created_at",
            createdAt: "created_at",
            modifiedAt: "modified_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedAccountingCompanyinfoOutput$ {
    /** @deprecated use `UnifiedAccountingCompanyinfoOutput$inboundSchema` instead. */
    export const inboundSchema = UnifiedAccountingCompanyinfoOutput$inboundSchema;
    /** @deprecated use `UnifiedAccountingCompanyinfoOutput$outboundSchema` instead. */
    export const outboundSchema = UnifiedAccountingCompanyinfoOutput$outboundSchema;
    /** @deprecated use `UnifiedAccountingCompanyinfoOutput$Outbound` instead. */
    export type Outbound = UnifiedAccountingCompanyinfoOutput$Outbound;
}
