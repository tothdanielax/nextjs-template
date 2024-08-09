import { describe, expect, test } from 'vitest';
import { getPathname, Link, permanentRedirect, redirect, usePathname, useRouter } from '@/navigation';

describe('Navigation', () => {
  test('exports ok', async () => {
    expect(Link).toBeDefined();
    expect(getPathname).toBeDefined();
    expect(redirect).toBeDefined();
    expect(usePathname).toBeDefined();
    expect(useRouter).toBeDefined();
    expect(permanentRedirect).toBeDefined();
  });
});
