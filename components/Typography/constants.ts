import { COLORS } from '@/settings/colors';

export const TEXT_SIZE = {
  12: 'text-xs',
  14: 'text-sm',
  16: 'text-base',
  32: 'text-lg',
  42: 'text-xl',
} as const;

export const TRACKING = {
  '-1': 'tracking-tighter',
  '-0.3': 'tracking-tight',
  '0': 'tracking-normal',
} as const;

export const TEXT_COLOR: { [k in keyof typeof COLORS]: `text-${k}` } = {
  white: 'text-white',
  gray0: 'text-gray0',
  gray1: 'text-gray1',
  gray3: 'text-gray3',
  gray4: 'text-gray4',
  gray5: 'text-gray5',
  gray10: 'text-gray10',
  gray40: 'text-gray40',
  gray50: 'text-gray50',
  gray60: 'text-gray60',
  gray70: 'text-gray70',
  gray90: 'text-gray90',
  black: 'text-black',
  red100: 'text-red100',
  green100: 'text-green100',
  purple5: 'text-purple5',
  purple10: 'text-purple10',
  purple20: 'text-purple20',
  purple100: 'text-purple100',
  purple120: 'text-purple120',
} as const;

export const FONT_WEIGHT = {
  '700': 'font-bold',
  '500': 'font-medium',
  '400': 'font-normal',
} as const;
