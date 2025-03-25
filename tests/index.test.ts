// https://www.testim.io/blog/typescript-unit-testing-101/
import { add } from '../src/index';

describe('testing the add method', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the number itself if only one number is provided', () => {
        expect(add('5')).toBe(5);
    });

    test('should return the sum of two numbers', () => {
        expect(add('1,2')).toBe(3);
    });

    test('should return the sum of multiple numbers', () => {
        expect(add('1,2,3,4,5')).toBe(15);
    });

    test('should throw an error for negative numbers', () => {
        expect(add('-1,-2,-3,-4,-5')).toBe(-15);
    });

    test('should handle numbers with leading and trailing spaces', () => {
        expect(add(' 2 , 3 , 4 ')).toBe(9);
    });

    test('should handle large valid numbers', () => {
        expect(add('500,500')).toBe(1000);
    });
  });