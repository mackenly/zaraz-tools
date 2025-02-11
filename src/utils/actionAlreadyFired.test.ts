import { describe, it, expect, vi, beforeEach } from 'vitest';
import { actionAlreadyFired } from './actionAlreadyFired';
import { mockEvent } from '../mocking';

const { client } = mockEvent;

// Mock client.get and client.set
let storage: { [key: string]: { value: string, options: { scope?: 'page' | 'session' | 'infinite', expiry?: Date | number } } } = {};
client.get = vi.fn((key: string) => {
    return storage[key]?.value;
});

client.set = vi.fn((key: string, value: string, options: any) => {
    storage[key] = { value, options };
    if (!options.scope) {
        storage[key].options.scope = 'session';
    }
    return true;
});

beforeEach(() => {
    vi.clearAllMocks();
});

describe('actionAlreadyFired - session duration', () => {
    it('should return false if action has not been fired', () => {
        storage = {};
        const result = actionAlreadyFired(client, 'test-action', 'session');
        expect(result).toBe(false);
        expect(client.get).toHaveBeenCalledTimes(1);
        expect(client.set).toBeCalledTimes(1);
        expect(client.set).toHaveBeenCalledWith('action-fired-test-action', expect.any(String), { scope: 'session' });
    });

    it('should return timestamp if action has been fired', () => {
        storage = {};
        actionAlreadyFired(client, 'test-action', 'session');
        expect(client.set).toHaveBeenCalledTimes(1);
        const result = actionAlreadyFired(client, 'test-action', 'session');
        expect(result).not.toBe(false);
        expect(client.get).toHaveBeenCalledTimes(2);
        expect(result).toBeInstanceOf(Date);
        expect(result).toEqual(new Date(storage['action-fired-test-action'].value));
        expect(client.get).toHaveBeenCalledWith('action-fired-test-action');
    });
});

describe('actionAlreadyFired - page duration', () => {
    it('should return false if action has not been fired', () => {
        storage = {};
        const result = actionAlreadyFired(client, 'test-action', 'page');
        expect(result).toBe(false);
        expect(client.get).toHaveBeenCalledTimes(1);
        expect(client.set).toBeCalledTimes(1);
        expect(client.set).toHaveBeenCalledWith('action-fired-test-action', expect.any(String), { scope: 'page' });
    });

    it('should return timestamp if action has been fired', () => {
        storage = {};
        actionAlreadyFired(client, 'test-action', 'page');
        expect(client.set).toHaveBeenCalledTimes(1);
        const result = actionAlreadyFired(client, 'test-action', 'page');
        expect(result).not.toBe(false);
        expect(client.get).toHaveBeenCalledTimes(2);
        expect(result).toBeInstanceOf(Date);
        expect(client.get).toHaveBeenCalledWith('action-fired-test-action');
    });
});

describe('actionAlreadyFired - infinite duration', () => {
    it('should return false if action has not been fired', () => {
        storage = {};
        const result = actionAlreadyFired(client, 'test-action', 'infinite');
        expect(result).toBe(false);
        expect(client.get).toHaveBeenCalledTimes(1);
        expect(client.set).toBeCalledTimes(1);
        expect(client.set).toHaveBeenCalledWith('action-fired-test-action', expect.any(String), { scope: 'infinite' });
    });

    it('should return timestamp if action has been fired', () => {
        storage = {};
        actionAlreadyFired(client, 'test-action', 'infinite');
        expect(client.set).toHaveBeenCalledTimes(1);
        const result = actionAlreadyFired(client, 'test-action', 'infinite');
        expect(result).not.toBe(false);
        expect(client.get).toHaveBeenCalledTimes(2);
        expect(result).toBeInstanceOf(Date);
        expect(client.get).toHaveBeenCalledWith('action-fired-test-action');
    });
});

describe('actionAlreadyFired - with expiry', () => {
    it('should set expiry correctly', () => {
        storage = {};
        const expiryDate = new Date(Date.now() + 1000 * 60 * 60); // 1 hour from now
        actionAlreadyFired(client, 'test-action', 'session', expiryDate);
        expect(client.set).toHaveBeenCalledWith('action-fired-test-action', expect.any(String), { scope: 'session', expiry: expiryDate });
        expect(client.get).toHaveBeenCalledTimes(1);
        expect(client.set).toHaveBeenCalledTimes(1);
        expect(storage['action-fired-test-action'].options.expiry).toBe(expiryDate);
        expect(storage['action-fired-test-action'].options.scope).toBe('session');
        expect(new Date(storage['action-fired-test-action'].value)).toBeInstanceOf(Date);
        expect(new Date(storage['action-fired-test-action'].value).getTime()).toBeCloseTo(Date.now(), -1);
    });
});

describe('actionAlreadyFired - with dontSave', () => {
    it('should not set data if dontSave', () => {
        storage = {};
        const result = actionAlreadyFired(client, 'test-action', 'session', 1000, true);
        expect(client.set).toHaveBeenCalledTimes(0);
        expect(result).toBe(false);
    });
});