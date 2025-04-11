import { style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layout.rowBetween,
  padding: rem(36),
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderRadius: rem(16),
  backgroundColor: theme.color.cardBackground,
});

export const header = style({
  color: theme.color.text,
  fontSize: theme.fontSize.xxl,
  fontWeight: 600,
});

export const body = style({});
