import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const section = style({
  ...theme.layouts.columnCenter,
  paddingBlock: `calc(${theme.sizes.appSpace} * 4)`,
  backgroundColor: theme.colors.background,
});

export const heading = style({
  color: theme.colors.text,
  fontSize: theme.fontSizes.xxxl,
  fontWeight: 600,

  ...breakpoint({
    mobile: { fontSize: rem(32) },
    tablet: { fontSize: rem(36) },
  }),
});

export const description = style({
  marginTop: rem(12),
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
  wordBreak: 'keep-all',
  textAlign: 'center',

  ...breakpoint({
    mobile: { fontSize: theme.fontSizes.md },
    tablet: { fontSize: theme.fontSizes.lg },
  }),
});

export const aboutLink = style({
  marginTop: rem(36),
});

export const mapSection = style({
  ...theme.layouts.column,
  paddingBlock: `calc(${theme.sizes.appSpace} * 4)`,
  alignItems: 'flex-end',

  ...breakpoint({ tablet: { flexDirection: 'row', justifyContent: 'space-between' } }),
});

export const mapMetadata = style({
  ...theme.layouts.columnCenter,
  alignItems: 'flex-end',
});

export const region = style({
  color: theme.colors.text,
  fontSize: rem(24),
  fontWeight: 600,
});

export const metadataTitle = style({
  marginTop: rem(4),
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
});

export const recordTime = style({
  marginTop: rem(12),
  color: theme.colors.text,
  fontSize: rem(36),
  fontWeight: 500,
});

export const slogan = style({
  alignSelf: 'flex-start',
  color: theme.colors.text,
  fontSize: rem(36),
  fontWeight: 400,
  textAlign: 'left',
  lineHeight: '130%',
});

globalStyle(`${slogan} strong`, {
  fontWeight: 600,
});

export const contributionLink = style({
  marginTop: theme.sizes.appSpace,
  alignSelf: 'flex-start',
  color: theme.colors.text,
  fontSize: theme.fontSizes.lg,
  fontWeight: 400,
  textAlign: 'left',
});
