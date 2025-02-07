import { style } from '@vanilla-extract/css';

import { breakpoint, theme } from '@ieum/styles';

export const root = style({
  ...theme.layouts.column,
  width: '100%',
  maxWidth: theme.sizes.app,
  height: '100%',
  marginInline: 'auto',
});

export const main = style({
  ...theme.layouts.column,
  flex: 1,
  paddingBlock: `calc(${theme.sizes.headerHeightMobile} + ${theme.sizes.appSpace})`,
  paddingInline: theme.sizes.appSpace,

  ...breakpoint({
    tablet: { paddingTop: `calc(${theme.sizes.headerHeight} + ${theme.sizes.appSpace})` },
  }),
});
