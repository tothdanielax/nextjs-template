import {describe, expect, it} from 'vitest';
import {cn} from "@/utils/utils";

describe('cn function', () => {
    it('should merge multiple class names into one string', () => {
        const result = cn('class1', 'class2');
        expect(result).toBe('class1 class2');
    });

    it('should handle conditional class names correctly', () => {
        const result = cn('class1', false, 'class3');
        expect(result).toBe('class1 class3');
    });

    it('should handle empty inputs gracefully', () => {
        const result = cn();
        expect(result).toBe('');
    });

    it('should merge tailwind classes correctly', () => {
        const result = cn('p-4', 'p-4 md:p-8');
        expect(result).toBe('p-4 md:p-8');
    });

    it('should merge classes with different conditional expressions', () => {
        const result = cn('class1', true && 'class2', false && 'class3', 'class4');
        expect(result).toBe('class1 class2 class4');
    });

    it('should handle a mix of strings and undefined values', () => {
        const result = cn('class1', undefined, 'class2');
        expect(result).toBe('class1 class2');
    });
});