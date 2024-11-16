import { describe, it, expect } from 'vitest';
import type { ZarazContext } from '.';

describe('enrichment', async () => {
    it('should export type ZarazContext', async () => {
        const contextObject = {} as ZarazContext;
        expect(contextObject).toBeDefined();
    });
});
