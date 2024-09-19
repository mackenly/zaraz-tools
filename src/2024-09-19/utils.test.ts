import { describe, it, expect } from 'vitest';
import { sha256 } from './utils';

describe('sha256', async () => {
    it('should hash an input', async () => {
        const input = 'hello';
        const output = await sha256(input);
        expect(output).toBe(
            '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
        );
    });

    it('should hash an input after lowercasing', async () => {
        const input = 'Hello';
        const output = await sha256(input, true);
        expect(output).toBe(
            '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'
        );
    });

    it('should hash an input without lowercasing', async () => {
        const input = 'Hello';
        const output = await sha256(input, false);
        expect(output).toBe(
            '185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969'
        );
        const output2 = await sha256(input);
        expect(output2).toBe(
            '185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969'
        );
    });
});