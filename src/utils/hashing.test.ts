import { describe, it, expect } from 'vitest';
import { sha256 } from './hashing';

describe('sha256', async () => {
    it('should hash an input', async () => {
        const input = 'hEllo@example.com';
        const output = await sha256(input);
        expect(output).toBe(
            'fed93bd41b367d435f8cab3e68285d5141c1207b38ee3a69610aadc74fdcec1e'
        );
    });

    it('should hash an input after lowercasing', async () => {
        const input = 'hEllo@example.com';
        const output = await sha256(input, true);
        expect(output).toBe(
            '1753bdb368271a785887ddbfb926164f2f7c6a88f609c07ff0401c5572955206'
        );
    });

    it('should hash an input without lowercasing', async () => {
        const input = 'hEllo@example.com';
        const output = await sha256(input, false);
        expect(output).toBe(
            'fed93bd41b367d435f8cab3e68285d5141c1207b38ee3a69610aadc74fdcec1e'
        );
        const output2 = await sha256(input);
        expect(output2).toBe(
            'fed93bd41b367d435f8cab3e68285d5141c1207b38ee3a69610aadc74fdcec1e'
        );
    });

    // it should return a string
    it('should return a string', async () => {
        const input = 'hello';
        const output = await sha256(input);
        expect(typeof output).toBe('string');
    });
});