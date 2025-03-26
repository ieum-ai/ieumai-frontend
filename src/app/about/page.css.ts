import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme, breakpoint } from '@ieum/styles';

export const hero = style({
  ...theme.layouts.column,
  alignItems: 'flex-start',
  marginBottom: rem(64),
});

export const brandName = style({
  marginTop: rem(8),
  marginBottom: rem(64),
  color: theme.colors.text,
});

export const card = style({
  ...theme.layouts.column,
  alignItems: 'flex-start',
  marginBottom: theme.sizes.appSpace,
  gap: theme.sizes.appSpace,
  backgroundColor: 'transparent',
  border: 'none',

  ...breakpoint({
    tablet: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
});

export const cardReverse = style({
  ...theme.layouts.column,
  alignItems: 'flex-start',
  marginBottom: theme.sizes.appSpace,
  gap: theme.sizes.appSpace,
  backgroundColor: 'transparent',
  border: 'none',

  ...breakpoint({
    tablet: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
  }),
});

export const cardImage = style({
  width: '100%',
  height: 'auto',

  ...breakpoint({
    tablet: {
      width: '33%',
    },
  }),
});

globalStyle(`${cardImage} > img`, {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
});

export const sectionNumber = style({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: rem(32),
});

globalStyle(`${sectionNumber} > span`, {
  fontSize: rem(48),
  fontWeight: 700,
  lineHeight: 1,
});

export const sectionTitle = style({
  marginLeft: rem(16),
});

globalStyle(`${sectionTitle} > h2`, {
  fontWeight: 500,
  marginBottom: rem(4),
});

globalStyle(`${sectionTitle} > p`, {
  fontSize: rem(14),
});

export const sectionContent = style({
  fontSize: rem(14),
  lineHeight: 1.6,
});

globalStyle(`${sectionContent} > p`, {
  marginBottom: rem(24),
});