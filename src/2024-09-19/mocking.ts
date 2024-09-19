import { Manager, MCEvent } from '@managed-components/types';

/**
 * Mocks a manager object for use in tests.
 * @type {Manager}
 * @since 2024-09-19
 */
export const mockManager: Manager = {
    name: 'test-mc',
    // @ts-expect-error Not all methods are implemented
    addEventListener() { },
    // @ts-expect-error Not all methods are implemented
    createEventListener() { },
    // @ts-expect-error Not all methods are implemented
    get() { },
    // @ts-expect-error Not all methods are implemented
    set() { },
    // @ts-expect-error Not all methods are implemented
    route() { },
    // @ts-expect-error Not all methods are implemented
    proxy() { },
    // @ts-expect-error Not all methods are implemented
    serve() { },
    // @ts-expect-error Not all methods are implemented
    useCache() { },
    // @ts-expect-error Not all methods are implemented
    invalidateCache() { },
    // @ts-expect-error Not all methods are implemented
    registerEmbed() { },
    // @ts-expect-error Not all methods are implemented
    registerWidget() { },
    fetch(input, init) {
        return fetch(input, init);
    },
    ext: {},
};

/**
 * Mocks an event object for use in tests.
 * @example 
 * ```typescript
 * const event = {
 *    ...mockEvent,
 *    payload: {
 *      ...mockEvent.payload,
 *      customValue: 'hello-there',
 *    },
 *  };
 * ```
 * @type {MCEvent}
 * @since 2024-09-19
*/
export const mockEvent: MCEvent = {
    payload: {},
    client: {
        timestamp: 1723563630,
        timezoneOffset: 0,
        emitter: 'website',
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        language: 'en-US',
        referer: 'https://google.com',
        ip: '192.168.0.1',
        url: new URL('https://example.com'),
        // @ts-expect-error Not all methods are implemented
        fetch() { },
        // @ts-expect-error Not all methods are implemented
        execute() { },
        return() { },
    },
};