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

globalStyle(`${disabled} label`, {
  color: theme.colors.formDisabledColor,
});

globalStyle(`${disabled} select`, {
  cursor: 'not-allowed',
});

export const select = style({
  width: '100%',
  height: '100%',
  padding: `${theme.sizes.formComponentPadding} ${theme.sizes.formComponentPadding} 0 ${theme.sizes.formComponentPadding}`,
  color: theme.colors.text,
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  appearance: 'none',
  cursor: 'pointer',
});

export const label = style({
  position: 'absolute',
  left: theme.sizes.formComponentPadding,
  bottom: rem(22),
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
  transition: 'font-size 0.2s ease, bottom 0.2s ease',
  pointerEvents: 'none',
  userSelect: 'none',
});

globalStyle(`${select}:not(:placeholder-shown):valid ~ label`, {
  fontSize: theme.fontSizes.xs,
  bottom: rem(38),
});

export const icon = style({
  position: 'absolute',
  color: theme.colors.formIconFill,
  top: '50%',
  transform: 'translateY(-50%)',
  right: theme.sizes.formComponentPadding,
  width: rem(28),
  height: rem(28),
  pointerEvents: 'none',
});
