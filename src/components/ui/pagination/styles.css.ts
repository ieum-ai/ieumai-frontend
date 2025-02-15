import { style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layouts.center,
  width: '100%',
  gap: rem(8),
});

export const item = style({
  ...theme.layouts.center,
  width: rem(28),
  height: rem(28),
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.sm,
  fontWeight: 400,
  borderRadius: rem(10),
  cursor: 'pointer',
  backgroundColor: theme.colors.cardBackground,
});

export const active = style({
  color: theme.colors.background,
  backgroundColor: theme.colors.text,
});

export const arrow = style({
  ...theme.layouts.center,
  width: rem(28),
  height: rem(28),
});
