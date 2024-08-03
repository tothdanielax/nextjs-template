import {describe, expect, expectTypeOf, test} from "vitest";
import middleware, {config} from "@/middleware";

describe('Middleware', () => {
    test('exports ok', () => {
        expect(middleware).toBeDefined();
        
        expect(config).toBeDefined();
        expect(config.matcher).toBeDefined();
        expectTypeOf(config).toBeObject();
        expectTypeOf(config.matcher).toBeArray();
    });
    
    test('one of the matchers should be nextjs specific matcher', () => {
        expect(config.matcher).toContain('/((?!api|_next/static|_next/image|favicon.ico).*)');
    });
});