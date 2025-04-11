import { style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layout.center,
  width: '100%',
  gap: rem(8),
});

export const item = style({
  ...theme.layout.center,
  width: rem(28),
  height: rem(28),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  fontWeight: 400,
  borderRadius: rem(10),
  cursor: 'pointer',
  backgroundColor: theme.color.cardBackground,
});

export const active = style({
  color: theme.color.background,
  backgroundColor: theme.color.text,
});

export const arrow = style({
  ...theme.layout.center,
  width: rem(28),
  height: rem(28),
  color: theme.color.text,
  opacity: 1,
  transition: 'opacity 300ms',

  ':hover': { opacity: 0.7 },
});
