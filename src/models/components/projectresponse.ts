/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ProjectResponse = {
    /**
     * Unique identifier for the project
     */
    idProject: string;
    /**
     * Name of the project
     */
    name: string;
    /**
     * Synchronization mode of the project
     */
    syncMode: string;
    /**
     * Frequency of pulling data in seconds
     */
    pullFrequency?: number | undefined;
    /**
     * Redirect URL for the project
     */
    redirectUrl?: string | undefined;
    /**
     * User ID associated with the project
     */
    idUser: string;
    /**
     * Connector set ID associated with the project
     */
    idConnectorSet: string;
};

/** @internal */
export const ProjectResponse$inboundSchema: z.ZodType<ProjectResponse, z.ZodTypeDef, unknown> = z
    .object({
        id_project: z.string(),
        name: z.string(),
        sync_mode: z.string(),
        pull_frequency: z.number().optional(),
        redirect_url: z.string().optional(),
        id_user: z.string(),
        id_connector_set: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            id_project: "idProject",
            sync_mode: "syncMode",
            pull_frequency: "pullFrequency",
            redirect_url: "redirectUrl",
            id_user: "idUser",
            id_connector_set: "idConnectorSet",
        });
    });

/** @internal */
export type ProjectResponse$Outbound = {
    id_project: string;
    name: string;
    sync_mode: string;
    pull_frequency?: number | undefined;
    redirect_url?: string | undefined;
    id_user: string;
    id_connector_set: string;
};

/** @internal */
export const ProjectResponse$outboundSchema: z.ZodType<
    ProjectResponse$Outbound,
    z.ZodTypeDef,
    ProjectResponse
> = z
    .object({
        idProject: z.string(),
        name: z.string(),
        syncMode: z.string(),
        pullFrequency: z.number().optional(),
        redirectUrl: z.string().optional(),
        idUser: z.string(),
        idConnectorSet: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            idProject: "id_project",
            syncMode: "sync_mode",
            pullFrequency: "pull_frequency",
            redirectUrl: "redirect_url",
            idUser: "id_user",
            idConnectorSet: "id_connector_set",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProjectResponse$ {
    /** @deprecated use `ProjectResponse$inboundSchema` instead. */
    export const inboundSchema = ProjectResponse$inboundSchema;
    /** @deprecated use `ProjectResponse$outboundSchema` instead. */
    export const outboundSchema = ProjectResponse$outboundSchema;
    /** @deprecated use `ProjectResponse$Outbound` instead. */
    export type Outbound = ProjectResponse$Outbound;
}
