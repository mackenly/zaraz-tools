import { describe, it, expect } from 'vitest';
import * as index from '.';

describe('Index', async () => {
    it('should export ZarazContext', async () => {
        const contextObject = {} as index.ZarazContext;
        expect(contextObject).toBeDefined();
    });
    it('should export mockManager', async () => {
        expect(index).toHaveProperty('mockManager');
    });
    it('should export mockEvent', async () => {
        expect(index).toHaveProperty('mockEvent');
    });
    it('should export sha256', async () => {
        expect(index).toHaveProperty('sha256');
    });
});