import { Client } from '@managed-components/types';

/**
 * System Object Interface.
 * Contains the page, cookies, device, consent, clientKV, and misc objects.
 * @since 2024-08-30
 * @version 0.1.0
 * @author mackenly
 * @see https://developers.cloudflare.com/zaraz/reference/context/
 */
interface System {
    page: {
        query: Object | any;
        title: string;
        url: URL;
        referrer: string;
        encoding: string;
    },
    cookies: Object | any;
    device: {
        ip: string;
        resolution: string;
        viewport: string;
        language: string;
        location: Object | any;
        'user-agent': {
            ua: string;
            browser: {
                name: string;
                version: string;
            };
            engine: {
                name: string;
                version: string;
            };
            os: {
                name: string;
                version: string;
            };
            device: string;
            cpu: string;
        };
    },
    consent: Object | any;
    clientKV: Object | any;
    misc: {
        random: number;
        timestamp: number;
        timestampMilliseconds: number;
    }
}

/**
 * Config Object Interface.
 * Contains the consent, dataLayer, debugKey, dlp, historyChange, settings, tools, triggers, variables, and zarazVersion objects.
 * @since 2024-11-16
 * @version 0.2.0
 * @author mackenly
 * @see https://developers.cloudflare.com/zaraz/reference/context/
 */
interface Config {
    consent: {
        buttonTextTranslations: {
            accept_all: Record<string, string>;
            confirm_my_choices: Record<string, string>;
            reject_all: Record<string, string>;
        };
        companyEmail: string;
        consentModalIntroHTMLWithTranslations: Record<string, string>;
        cookieName: string;
        customCSS: string;
        customIntroDisclaimerDismissed: boolean;
        defaultLanguage: string;
        enabled: boolean;
        hideModal: boolean;
        purposesWithTranslations: Record<string, {
            description: Record<string, string>;
            name: Record<string, string>;
            order: number;
        }>;
        tcfCompliant: boolean;
    };
    dataLayer: boolean;
    debugKey: string;
    dlp: any[];
    historyChange: boolean;
    settings: {
        autoInjectScript: boolean;
        botScoreThreshold: number;
        contextEnricher: {
            escapedWorkerName: string;
            workerTag: string;
            mutableId: string;
        };
        ecommerce: boolean;
    };
    tools: Record<string, {
        actions: Record<string, {
            actionType: string;
            blockingTriggers: string[];
            data: Record<string, any>;
            firingTriggers: string[];
            enabled?: boolean;
        }>;
        component: string;
        defaultFields: Record<string, any>;
        defaultPurpose?: string;
        enabled: boolean;
        name: string;
        permissions: string[];
        settings: Record<string, any>;
        type: string;
        worker?: {
            accountId: string;
            escapedWorkerName: string;
            mutableId: string;
            workerTag: string;
        };
        blockingTriggers?: string[];
    }>;
    triggers: Record<string, {
        description: string;
        excludeRules: any[];
        loadRules: Array<{
            id?: string;
            match: string;
            op: string;
            value: string;
        }>;
        name: string;
        triggerId: string;
        clientRules?: any[];
        system?: string;
    }>;
    variables: Record<string, {
        name: string;
        type: string;
        value: string;
    }>;
    zarazVersion: number;
}

/**
 * Zaraz Context Enricher Interface.
 * Contains the system, client, and config objects.
 * @since 2024-08-30
 * @version 0.1.0
 * @author mackenly
 * @see https://developers.cloudflare.com/zaraz/advanced/context-enricher/
 */
export interface ZarazContext {
    system: System;
    client: Client;
    config: Config;
}