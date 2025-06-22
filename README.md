# @guoyunhe/human-number

![Version](https://img.shields.io/npm/v/@guoyunhe/human-number)
![Downloads](https://img.shields.io/npm/dw/@guoyunhe/human-number)
![Bundle size](https://img.shields.io/bundlephobia/minzip/@guoyunhe/human-number)

Human readable number format with locale support

## Install

```bash
npm i -S @guoyunhe/human-number
```

## Example

```js
import { humanNumber, zhCN, zhTW } from '@guoyunhe/human-number';

humanNumber(123); // 123
humanNumber(12345); // 12K
humanNumber(1234567); // 1.2M

humanNumber(1234567, { precision: 3 }); // 1.23M

humanNumber(123456789, { locale: zhCN }); // 1.2 万亿
humanNumber(123456789, { locale: zhTW }); // 1.2 兆
```
