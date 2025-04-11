import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const header = style({
  ...theme.layout.center,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: theme.size.headerHeightMobile,
  zIndex: theme.zIndex.header,

  ...breakpoint({ tablet: { height: theme.size.headerHeight } }),
});

export const inner = style({
  ...theme.layout.rowBetween,
  width: '100%',
  maxWidth: theme.size.app,
  paddingInline: theme.size.appSpace,
  marginInline: 'auto',

  ...breakpoint({ tablet: { justifyContent: 'center' } }),
});

export const list = style({
  ...theme.layout.centerY,
  listStyle: 'none',
  gap: rem(48),
});

export const item = style({
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.md,
  fontWeight: 500,
});

export const active = style({
  color: theme.color.text,
  fontWeight: 600,
});

globalStyle(`${item} a`, {
  padding: rem(16),
  opacity: 1,
  transition: 'opacity 300ms, color 300ms',
});

globalStyle(`${item} a:hover`, { opacity: 0.7 });

globalStyle(`${item} svg`, { color: `${theme.color.textSecondary}`, transition: 'color 300ms' });

globalStyle(`${active} svg`, { color: `${theme.color.text}` });

export const desktop = style({
  display: 'none',
  ...breakpoint({ tablet: { display: 'flex' } }),
});

export const mobile = style({
  display: 'flex',
  color: theme.color.text,
  ...breakpoint({ tablet: { display: 'none' } }),
});

export const branding = style({
  opacity: 1,
  transition: 'opacity 300ms',

  ':hover': { opacity: 0.7 },
});

export const mobileMenuContainer = style({
  position: 'fixed',
  top: theme.size.headerHeightMobile,
  width: '100%',
  backgroundColor: theme.color.background,
  zIndex: theme.zIndex.overlay,
});

export const mobileMenuList = style({
  paddingBlock: rem(16),
  paddingInline: theme.size.appSpace,
  listStyle: 'none',
});

globalStyle(`${mobileMenuList} a`, {
  display: 'inline-flex',
  paddingBlock: rem(12),
  paddingInline: 0,
});
