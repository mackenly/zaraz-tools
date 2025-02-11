import { Client, ClientSetOptions } from '@managed-components/types';

/**
 * actionAlreadyFired
 * Checks if an action has already been fired based on a unique action key and a specified duration.
 * @param client The client object to get/set the timestamp. Not private because it is stored in the client.
 * @param actionKey The unique action key.
 * @param scope The duration to remember the action (default: 'session').
 * @param expiry The expiry date for the action (default: null).
 * @param dontStore If true, the timestamp will not be stored in the client (default: false). Useful for checking without setting.
 * @returns: The Date of when the action was fired, or false if not.
 * @throws: Error if the operation fails.
 * @since 2024-09-19
 */
export function actionAlreadyFired(
    client: Client,
    actionKey: string,
    scope: 'page' | 'session' | 'infinite'= 'session',
    expiry: Date | number | null = null,
    dontStore: boolean = false
): Date | false {
    try {
        const storageKey = `action-fired-${actionKey}`;
        const timestamp = client.get(storageKey);

        if (timestamp) {
            return new Date(timestamp);
        }

        const now = new Date().toISOString();
        let options: ClientSetOptions = { scope };
        if (expiry) {
            options = { ...options, expiry };
        }
        if (!dontStore) {
            client.set(storageKey, now, options);
        }

        return false;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
