import { humanNumber } from '.';

test('precision', async () => {
  expect(humanNumber(1234, { precision: 2 })).toBe('1.2K');
  expect(humanNumber(1234, { precision: 3 })).toBe('1.23K');
  expect(humanNumber(1204, { precision: 3 })).toBe('1.2K'); // not 1.20K
});

test('negative', async () => {
  expect(humanNumber(-1234)).toBe('-1.2K');
});
