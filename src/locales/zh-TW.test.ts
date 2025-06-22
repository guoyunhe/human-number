import { humanNumber } from '..';
import zhTW from './zh-TW';

test('< 1,0000', async () => {
  expect(humanNumber(0, { locale: zhTW })).toBe('0');
  expect(humanNumber(123, { locale: zhTW })).toBe('123');
  expect(humanNumber(9999, { locale: zhTW })).toBe('9999');
});

test('>= 1,0000', async () => {
  expect(humanNumber(10000, { locale: zhTW })).toBe('1 萬');
  expect(humanNumber(12345, { locale: zhTW })).toBe('1.2 萬');
  expect(humanNumber(9999_9999, { locale: zhTW })).toBe('9999 萬');
});

test('>= 1,0000,0000', async () => {
  expect(humanNumber(1_0000_0000, { locale: zhTW })).toBe('1 億');
  expect(humanNumber(1_2345_6789, { locale: zhTW })).toBe('1.2 億');
  expect(humanNumber(9999_9999_9999, { locale: zhTW })).toBe('9999 億');
});

test('>= 1,0000,0000,0000', async () => {
  expect(humanNumber(1_0000_0000_0000, { locale: zhTW })).toBe('1 兆');
  expect(humanNumber(1_2345_6789_0000, { locale: zhTW })).toBe('1.2 兆');
});
