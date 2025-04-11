import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme, breakpoint } from '@ieum/styles';

export const hero = style({
  ...theme.layout.column,
  gap: rem(12),
});

globalStyle(`${hero} > h2`, {
  color: theme.color.text,
  fontSize: theme.fontSize.lg,
  fontWeight: 600,
});

export const section = style({
  display: 'flex',
  marginTop: `calc(${theme.size.appSpace} * 4)`,
  gap: theme.size.appSpace,
});

export const cardReverse = style({
  ...theme.layout.column,
  alignItems: 'flex-start',
  marginBottom: theme.size.appSpace,
  gap: theme.size.appSpace,
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
  position: 'relative',
  width: '100%',
  height: '500px',

  ...breakpoint({ tablet: { width: '33%' } }),
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
