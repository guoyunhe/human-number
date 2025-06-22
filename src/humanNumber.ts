import { Locale } from './Locale';
import en from './locales/en';

export interface HumanNumberOptions {
  locale?: Locale;
  /**
   * Minimum precision digits to keep.
   * @default 2
   */
  precision?: number;
}

export function humanNumber(num: number, options?: HumanNumberOptions) {
  const locale = options?.locale || en;
  const precision = options?.precision || 2;

  const absNum = Math.abs(num);

  let shortNumStr = String(absNum);
  let shortName = '';
  for (const { base, name } of locale.names) {
    if (absNum >= base) {
      shortNumStr = String(absNum / base);
      shortName = name;
      break;
    }
  }

  const dotIndex = shortNumStr.indexOf('.');
  if (dotIndex > -1) {
    if (dotIndex < precision) {
      shortNumStr = shortNumStr.substring(0, precision + 1);
      // a simple trick to remove trailing zeros
      shortNumStr = String((shortNumStr as any) / 1);
    } else {
      shortNumStr = shortNumStr.substring(0, dotIndex);
    }
  }

  return `${shortNumStr}${shortName}`;
}
