import { humanNumber } from '..';
import zhCN from './zh-CN';

test('< 1,0000', async () => {
  expect(humanNumber(0, { locale: zhCN })).toBe('0');
  expect(humanNumber(123, { locale: zhCN })).toBe('123');
  expect(humanNumber(9999, { locale: zhCN })).toBe('9999');
});

test('>= 1,0000', async () => {
  expect(humanNumber(10000, { locale: zhCN })).toBe('1 万');
  expect(humanNumber(12345, { locale: zhCN })).toBe('1.2 万');
  expect(humanNumber(9999_9999, { locale: zhCN })).toBe('9999 万');
});

test('>= 1,0000,0000', async () => {
  expect(humanNumber(1_0000_0000, { locale: zhCN })).toBe('1 亿');
  expect(humanNumber(1_2345_6789, { locale: zhCN })).toBe('1.2 亿');
  expect(humanNumber(9999_9999_9999, { locale: zhCN })).toBe('9999 亿');
});

test('>= 1,0000,0000,0000', async () => {
  expect(humanNumber(1_0000_0000_0000, { locale: zhCN })).toBe('1 万亿');
  expect(humanNumber(1_2345_6789_0000, { locale: zhCN })).toBe('1.2 万亿');
});
