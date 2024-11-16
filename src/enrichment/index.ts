import { Client } from '@managed-components/types';

/**
 * System Object Type.
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
 * Zaraz Context Enricher Type.
 * Contains the system and client objects.
 * @since 2024-08-30
 * @version 0.1.0
 * @author mackenly
 * @see https://developers.cloudflare.com/zaraz/advanced/context-enricher/
 */
export interface ZarazContext {
    system: System;
    client: Client;
}