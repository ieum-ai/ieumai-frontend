import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layouts.center,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: theme.sizes.headerHeightMobile,
  backgroundColor: theme.colors.background,
  zIndex: theme.zIndices.header,

  ...breakpoint({ tablet: { height: theme.sizes.headerHeight } }),
});

export const inner = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  maxWidth: theme.sizes.app,
  paddingInline: theme.sizes.appSpace,
  marginInline: 'auto',

  ...breakpoint({ tablet: { justifyContent: 'center' } }),
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

export const desktop = style({
  display: 'none',
  ...breakpoint({ tablet: { display: 'flex' } }),
});

export const mobile = style({
  display: 'flex',
  ...breakpoint({ tablet: { display: 'none' } }),
});

export const branding = style({
  opacity: 1,
  transition: 'opacity 0.3s, fill 0.3s, color 0.3s',

  ':hover': { opacity: 0.7 },
});

export const mobileMenuContainer = style({
  position: 'fixed',
  top: theme.sizes.headerHeightMobile,
  width: '100%',
  backgroundColor: theme.colors.background,
  zIndex: theme.zIndices.overlay,
});

export const mobileMenuList = style({
  paddingBlock: rem(16),
  paddingInline: theme.sizes.appSpace,
  listStyle: 'none',
});

globalStyle(`${mobileMenuList} a`, {
  display: 'inline-flex',
  paddingBlock: rem(12),
  paddingInline: 0,
});
