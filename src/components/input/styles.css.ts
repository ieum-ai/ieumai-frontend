import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const root = style({
  position: 'relative',
  width: '100%',
  minWidth: theme.sizes.formComponentMinWidthMobile,
  maxWidth: theme.sizes.formComponentMaxWidth,
  height: theme.sizes.formComponentHeight,
  border: `${rem(1)} solid ${theme.colors.formBorder}`,
  borderRadius: rem(10),
  backgroundColor: theme.colors.formBackground,
  overflow: 'hidden',

  ...breakpoint({ mobile: { minWidth: theme.sizes.formComponentMinWidth } }),
});

export const disabled = style({
  backgroundColor: theme.colors.formDisabledBackground,
});

globalStyle(`${disabled} label, ${disabled} input`, {
  color: theme.colors.formDisabledColor,
});

globalStyle(`${disabled} input`, {
  cursor: 'not-allowed',
});

export const input = style({
  width: '100%',
  height: '100%',
  padding: `${rem(16)} ${rem(26)} 0 ${rem(26)}`,
  color: theme.colors.text,
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
});

export const label = style({
  position: 'absolute',
  left: rem(26),
  bottom: rem(22),
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
  color: theme.colors.textSecondary,
  transition: 'font-size 0.2s ease, bottom 0.2s ease',
  pointerEvents: 'none',
  userSelect: 'none',
});

globalStyle(`${input}:focus ~ label, ${input}:valid ~ label`, {
  fontSize: theme.fontSizes.xs,
  bottom: rem(38),
});
