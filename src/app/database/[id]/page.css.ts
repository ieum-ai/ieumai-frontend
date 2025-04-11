import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const script = style({
  width: '100%',
  maxWidth: theme.size.appContent,
  marginBlock: theme.size.appSpace,
  marginInline: 'auto',
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.xl,
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: '160%',
  wordBreak: 'keep-all',

  ...breakpoint({
    mobile: {
      marginBlock: `calc(${theme.size.appSpace} * 2)`,
      fontSize: theme.fontSize.xxl,
    },
    tablet: {
      marginBlock: `calc(${theme.size.appSpace} * 3)`,
      fontSize: theme.fontSize.xxxl,
    },
  }),
});

export const scriptDetail = style({
  marginTop: `calc(${theme.size.appSpace} * 2)`,
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: rem(24),

  ...breakpoint({ tablet: { gridTemplateColumns: '1fr 1fr' } }),
});

export const metadata = style({
  ...theme.layout.column,
  width: '100%',
  listStyle: 'none',
  gap: theme.size.appSpace,
});

globalStyle(`${metadata} li`, {
  ...theme.layout.rowBetween,
  width: '100%',
  gap: rem(16),
});

globalStyle(`${metadata} li h3`, {
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  fontWeight: 600,
  whiteSpace: 'nowrap',
});

globalStyle(`${metadata} li p`, {
  color: theme.color.text,
  fontSize: theme.fontSize.md,
  fontWeight: 500,
});

export const contribution = style({
  ...theme.layout.column,
  width: '100%',
  justifyContent: 'flex-start',
});

globalStyle(`${contribution} ul`, {
  ...theme.layout.column,
  width: '100%',
  listStyle: 'none',
  gap: rem(16),
});

globalStyle(`${contribution} li`, {
  ...theme.layout.rowBetween,
  width: '100%',
});

globalStyle(`${contribution} li > div`, {
  ...theme.layout.centerY,
  gap: rem(16),
});

export const contributionMetadata = style({
  ...theme.layout.column,
  gap: rem(2),
});

export const contributionIndex = style({
  ...theme.layout.center,
  width: rem(32),
  height: rem(32),
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  fontWeight: 600,
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderRadius: '50%',
  backgroundColor: theme.color.background,
  userSelect: 'none',
});

export const contributionDate = style({
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.xs,
  fontWeight: 500,
});

export const contributionTitle = style({
  color: theme.color.text,
  fontSize: theme.fontSize.base,
  fontWeight: 500,
});
