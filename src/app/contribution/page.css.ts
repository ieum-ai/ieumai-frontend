import { style } from '@vanilla-extract/css';

import { rem, theme, breakpoint } from '@ieum/styles';

export const root = style({
  ...theme.layouts.column,
  marginTop: rem(24),
  gap: rem(24),
});

export const card = style({
  alignItems: 'flex-start',
  justifyContent: 'flex-start',

  ...breakpoint({ tablet: { justifyContent: 'space-between' } }),
});
