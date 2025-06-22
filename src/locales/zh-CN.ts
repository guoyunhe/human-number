import { Locale } from '../Locale';

export default {
  names: [
    {
      base: 1000000000000,
      // 在中国，现代汉语中的兆更常用来指代百万，容易引起歧义。因此更常使用万亿来表示古汉语中的兆。
      // https://zh.wikipedia.org/zh-cn/%E6%B1%89%E5%AD%97%E6%95%B0%E5%AD%97#%E5%85%86%E5%AD%97%E4%BB%A3%E8%A1%A8%E7%9A%84%E5%80%BC
      name: ' 万亿',
    },
    { base: 100000000, name: ' 亿' },
    { base: 10000, name: ' 万' },
  ],
} satisfies Locale;
