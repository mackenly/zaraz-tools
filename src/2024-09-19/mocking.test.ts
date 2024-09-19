import { describe, it, expect } from 'vitest';
import * as mocking from './mocking';

describe('mocking', async () => {
    it('should export mockManager', async () => {
        expect(mocking).toHaveProperty('mockManager');
    });
    it('should export mockEvent', async () => {
        expect(mocking).toHaveProperty('mockEvent');
    });
});
