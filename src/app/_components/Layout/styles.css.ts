import { style } from '@vanilla-extract/css';

import { breakpoint, theme } from '@ieum/styles';

export const root = style({
  ...theme.layout.column,
  width: '100%',
  maxWidth: theme.size.app,
  height: '100%',
  marginInline: 'auto',
});

export const main = style({
  ...theme.layout.column,
  flex: 1,
  paddingBlock: `calc(${theme.size.headerHeightMobile} + ${theme.size.appSpace})`,
  paddingInline: theme.size.appSpace,

  ...breakpoint({
    tablet: { paddingTop: `calc(${theme.size.headerHeight} + ${theme.size.appSpace})` },
  }),
});
