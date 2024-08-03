import { describe, expect, it } from 'vitest';
import { isBrowser } from '@/utils/isBrowser';

describe('isBrowser', () => {
  it('should return true when running in a browser environment', () => {
    // Simulate a browser environment
    (global as unknown as { window?: object }).window = {};
    expect(isBrowser()).toBe(true);
    delete (global as unknown as { window?: object }).window; // Clean up
  });

  it('should return false when not running in a browser environment', () => {
    expect(isBrowser()).toBe(false);
  });
});
