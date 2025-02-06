import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const navigation = style({
  ...theme.layouts.center,
  width: '100%',
  maxWidth: theme.sizes.app,
  paddingBlock: rem(16),
  marginInline: 'auto',
});

export const list = style({
  ...theme.layouts.centerY,
  listStyle: 'none',
  gap: rem(48),
});

export const item = style({
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
  opacity: 1,
  transition: 'opacity 0.3s, fill 0.3s, color 0.3s',

  ':hover': { opacity: 0.7 },
});

export const active = style({
  color: theme.colors.text,
});

globalStyle(`${item} a`, { padding: rem(16) });

globalStyle(`${item} svg`, { fill: `${theme.colors.textSecondary} !important` });

globalStyle(`${active} svg`, { fill: `${theme.colors.text} !important` });
