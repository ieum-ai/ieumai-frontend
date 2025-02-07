import { style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layouts.rowBetween,
  padding: rem(36),
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: rem(16),
  backgroundColor: theme.colors.cardBackground,
});

export const header = style({
  color: theme.colors.text,
  fontSize: theme.fontSizes.xxl,
  fontWeight: 600,
});

export const body = style({});
