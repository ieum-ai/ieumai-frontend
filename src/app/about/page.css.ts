import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme, breakpoint } from '@ieum/styles';

export const hero = style({
  ...theme.layout.column,
  color: theme.color.text,
  gap: rem(12),
});

globalStyle(`${hero} > h2`, {
  fontSize: theme.fontSize.lg,
  fontWeight: 600,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '100%',
  marginTop: `calc(${theme.size.appSpace} * 4)`,
  gap: theme.size.appSpace,

  ...breakpoint({
    mobile: {
      flexDirection: 'row',
      gap: `calc(${theme.size.appSpace} * 2)`,
    },
    tablet: {
      gap: `calc(${theme.size.appSpace} * 3)`,
    },
  }),
});

export const imageContainer = style({
  position: 'relative',
  flexShrink: 0,
  width: '100%',
  aspectRatio: '16/9',
  border: `${rem(1)} solid ${theme.color.formBorder}`,
  borderRadius: rem(10),
  overflow: 'hidden',
  userSelect: 'none',

  ...breakpoint({
    mobile: {
      width: '35%',
    },
    tablet: {
      width: '30%',
    },
  }),
});

globalStyle(`${imageContainer} > img`, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const reverse = style({
  ...breakpoint({
    mobile: {
      flexDirection: 'row-reverse',
    },
  }),
});

export const header = style({
  ...theme.layout.centerY,
  marginBottom: rem(28),
  color: theme.color.text,
});

globalStyle(`${header} > span`, {
  fontSize: rem(42),
  fontWeight: 600,
  lineHeight: 1,
});

export const headerTitle = style({
  ...theme.layout.column,
  marginLeft: rem(16),
});

globalStyle(`${headerTitle} > h3`, {
  fontSize: theme.fontSize.md,
  fontWeight: 600,
});

globalStyle(`${headerTitle} > p`, {
  fontSize: theme.fontSize.xs,
});

export const content = style({
  fontSize: theme.fontSize.sm,
  lineHeight: 1.6,
});

globalStyle(`${content} > p`, {
  color: theme.color.text,
  marginBottom: rem(16),
});

globalStyle(`${content} > p:last-child`, {
  marginBottom: 0,
});

globalStyle(`${content} code`, {
  padding: `${rem(2)} ${rem(4)}`,
  fontFamily: theme.fontFamily.mono,
  fontSize: theme.fontSize.xs,
  fontWeight: 500,
  border: `${rem(1)} solid ${theme.color.formBorder}`,
  borderRadius: rem(4),
  backgroundColor: theme.color.formBackground,
});
