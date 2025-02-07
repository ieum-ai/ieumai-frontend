import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  position: 'relative',
  width: '100%',
  minWidth: rem(330),
  maxWidth: rem(370),
  height: rem(68),
  border: `${rem(1)} solid ${theme.colors.formBorder}`,
  borderRadius: rem(10),
  backgroundColor: theme.colors.formBackground,
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
  padding: `${rem(16)} ${rem(26)} 0 ${rem(26)}`,
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
  left: rem(26),
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
  fill: theme.colors.formIconFill,
  top: '50%',
  transform: 'translateY(-50%)',
  right: rem(16),
  width: rem(28),
  height: rem(28),
  pointerEvents: 'none',
});
