import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layouts.centerY,
  width: 'fit-content',
  gap: rem(8),
});

export const checkbox = style({
  ...theme.layouts.center,
  width: rem(16),
  height: rem(16),
  border: `${rem(2)} solid ${theme.colors.formBorder}`,
  borderRadius: rem(4),
  backgroundColor: 'transparent',
  transition: 'border-width 0.2s, border-color 0.2s',
});

globalStyle(`${checkbox}[aria-checked=true]`, {
  borderWidth: rem(5),
  borderColor: theme.colors.formIconFill,
});

export const label = style({
  color: theme.colors.text,
  fontSize: theme.fontSizes.sm,
  lineHeight: 1,
  cursor: 'pointer',
});

export const indicator = style({
  fill: theme.colors.text,
});

export const labelAlignVariants = styleVariants({
  start: { flexDirection: 'row' },
  end: { flexDirection: 'row-reverse' },
});
