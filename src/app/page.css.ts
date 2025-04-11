import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const section = style({
  ...theme.layout.columnCenter,
  paddingBlock: `calc(${theme.size.appSpace} * 4)`,
  backgroundColor: theme.color.background,
});

export const heading = style({
  color: theme.color.text,
  fontSize: theme.fontSize.xxxl,
  fontWeight: 600,

  ...breakpoint({
    mobile: { fontSize: rem(32) },
    tablet: { fontSize: rem(36) },
  }),
});

export const description = style({
  marginTop: rem(12),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.base,
  fontWeight: 500,
  wordBreak: 'keep-all',
  textAlign: 'center',

  ...breakpoint({
    mobile: { fontSize: theme.fontSize.md },
    tablet: { fontSize: theme.fontSize.lg },
  }),
});

export const aboutLink = style({
  marginTop: rem(36),
});

export const mapSection = style({
  ...theme.layout.column,
  paddingBlock: `calc(${theme.size.appSpace} * 4)`,
  alignItems: 'flex-end',

  ...breakpoint({ tablet: { flexDirection: 'row', justifyContent: 'space-between' } }),
});

export const mapMetadata = style({
  ...theme.layout.columnCenter,
  alignItems: 'flex-end',
});

export const region = style({
  color: theme.color.text,
  fontSize: rem(24),
  fontWeight: 600,
});

export const metadataTitle = style({
  marginTop: rem(4),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.md,
  fontWeight: 500,
});

export const recordTime = style({
  marginTop: rem(12),
  color: theme.color.text,
  fontSize: rem(36),
  fontWeight: 500,
});

export const slogan = style({
  alignSelf: 'flex-start',
  color: theme.color.text,
  fontSize: rem(36),
  fontWeight: 400,
  textAlign: 'left',
  lineHeight: '130%',
});

globalStyle(`${slogan} strong`, {
  fontWeight: 600,
});

export const contributionLink = style({
  marginTop: theme.size.appSpace,
  alignSelf: 'flex-start',
  color: theme.color.text,
  fontSize: theme.fontSize.lg,
  fontWeight: 400,
  textAlign: 'left',
});
