import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const root = style({
  position: 'relative',
  width: '100%',
  minWidth: theme.size.formComponentMinWidthMobile,
  maxWidth: theme.size.formComponentMaxWidth,
  height: theme.size.formComponentHeight,
  border: `${rem(1)} solid ${theme.color.formBorder}`,
  borderRadius: rem(10),
  backgroundColor: theme.color.formBackground,
  overflow: 'hidden',

  ...breakpoint({ mobile: { minWidth: theme.size.formComponentMinWidth } }),
});

export const disabled = style({
  backgroundColor: theme.color.formDisabledBackground,
});

globalStyle(`${disabled} label`, {
  color: theme.color.formDisabledColor,
});

globalStyle(`${disabled} select`, {
  cursor: 'not-allowed',
});

export const select = style({
  width: '100%',
  height: '100%',
  padding: `${theme.size.formComponentPadding} ${theme.size.formComponentPadding} 0 ${theme.size.formComponentPadding}`,
  color: theme.color.text,
  fontSize: theme.fontSize.md,
  fontWeight: 500,
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  appearance: 'none',
  cursor: 'pointer',
});

export const label = style({
  position: 'absolute',
  left: theme.size.formComponentPadding,
  bottom: rem(22),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.md,
  fontWeight: 500,
  transition: 'font-size 0.2s ease, bottom 0.2s ease',
  pointerEvents: 'none',
  userSelect: 'none',
});

globalStyle(`${select}:not(:placeholder-shown):valid ~ label`, {
  fontSize: theme.fontSize.xs,
  bottom: rem(38),
});

export const icon = style({
  position: 'absolute',
  color: theme.color.formIconFill,
  top: '50%',
  transform: 'translateY(-50%)',
  right: theme.size.formComponentPadding,
  width: rem(28),
  height: rem(28),
  pointerEvents: 'none',
});
