import { add } from '../src/stringCalculator';

test('should handle new lines as delimiters', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('should handle custom delimiters', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('should throw an error for negative numbers', () => {
  expect(() => add('1,-2,3,-4')).toThrow('Negative numbers not allowed: -2, -4');
});

