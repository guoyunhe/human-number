import { humanNumber } from '..';

test('< 1,000', async () => {
  expect(humanNumber(0)).toBe('0');
  expect(humanNumber(123)).toBe('123');
  expect(humanNumber(999)).toBe('999');
});

test('>= 1,000', async () => {
  expect(humanNumber(1000)).toBe('1K');
  expect(humanNumber(1234)).toBe('1.2K');
  expect(humanNumber(999_999)).toBe('999K');
});

test('>= 1,000,000', async () => {
  expect(humanNumber(1_000_000)).toBe('1M');
  expect(humanNumber(1_234_456)).toBe('1.2M');
  expect(humanNumber(999_999_999)).toBe('999M');
});

test('>= 1,000,000,000', async () => {
  expect(humanNumber(1_000_000_000)).toBe('1B');
  expect(humanNumber(1_234_456_789)).toBe('1.2B');
  expect(humanNumber(999_999_999_999)).toBe('999B');
});

test('>= 1,000,000,000,000', async () => {
  expect(humanNumber(1_000_000_000_000)).toBe('1T');
  expect(humanNumber(1_234_456_789_000)).toBe('1.2T');
  expect(humanNumber(999_999_999_999_999)).toBe('999T');
});
