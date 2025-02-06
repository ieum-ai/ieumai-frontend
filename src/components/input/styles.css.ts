import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  position: 'relative',
  width: '100%',
  maxWidth: rem(370),
  height: rem(68),
  border: `${rem(1)} solid #F0F0F0`,
  borderRadius: rem(10),
  backgroundColor: theme.colors.background,
  overflow: 'hidden',
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
});

globalStyle(`${input}:focus ~ label, ${input}:valid ~ label`, {
  fontSize: theme.fontSizes.xs,
  bottom: rem(38),
});

export const label = style({
  position: 'absolute',
  left: rem(26),
  bottom: rem(22),
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
  color: theme.colors.textSecondary,
  transition: 'font-size 0.3s ease, bottom 0.3s ease',
  pointerEvents: 'none',
  userSelect: 'none',
});
