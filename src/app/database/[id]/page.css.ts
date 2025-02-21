import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const script = style({
  width: '100%',
  maxWidth: theme.sizes.appContent,
  marginBlock: theme.sizes.appSpace,
  marginInline: 'auto',
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.xl,
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: '160%',
  wordBreak: 'keep-all',

  ...breakpoint({
    mobile: {
      marginBlock: `calc(${theme.sizes.appSpace} * 2)`,
      fontSize: theme.fontSizes.xxl,
    },
    tablet: {
      marginBlock: `calc(${theme.sizes.appSpace} * 3)`,
      fontSize: theme.fontSizes.xxxl,
    },
  }),
});

export const scriptDetail = style({
  marginTop: `calc(${theme.sizes.appSpace} * 2)`,
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: rem(24),

  ...breakpoint({ tablet: { gridTemplateColumns: '1fr 1fr' } }),
});

export const metadata = style({
  ...theme.layouts.column,
  width: '100%',
  listStyle: 'none',
  gap: theme.sizes.appSpace,
});

globalStyle(`${metadata} li`, {
  ...theme.layouts.rowBetween,
  width: '100%',
  gap: rem(16),
});

globalStyle(`${metadata} li h3`, {
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.sm,
  fontWeight: 600,
  whiteSpace: 'nowrap',
});

globalStyle(`${metadata} li p`, {
  color: theme.colors.text,
  fontSize: theme.fontSizes.md,
  fontWeight: 500,
});

export const contribution = style({
  ...theme.layouts.column,
  width: '100%',
  justifyContent: 'flex-start',
});

globalStyle(`${contribution} ul`, {
  ...theme.layouts.column,
  width: '100%',
  listStyle: 'none',
  gap: rem(16),
});

globalStyle(`${contribution} li`, {
  ...theme.layouts.rowBetween,
  width: '100%',
});

globalStyle(`${contribution} li > div`, {
  ...theme.layouts.centerY,
  gap: rem(16),
});

export const contributionMetadata = style({
  ...theme.layouts.column,
  gap: rem(2),
});

export const contributionIndex = style({
  ...theme.layouts.center,
  width: rem(32),
  height: rem(32),
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.sm,
  fontWeight: 600,
  border: `${rem(1)} solid ${theme.colors.cardBorder}`,
  borderRadius: '50%',
  backgroundColor: theme.colors.background,
  userSelect: 'none',
});

export const contributionDate = style({
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.xs,
  fontWeight: 500,
});

export const contributionTitle = style({
  color: theme.colors.text,
  fontSize: theme.fontSizes.base,
  fontWeight: 500,
});
