import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layouts.center,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.cardBackground,
});

globalStyle(`${root} > div`, {
  ...theme.layouts.columnCenter,
  width: '100%',
  height: '100%',
});

export const introText = style({
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.xl,
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: '180%',
  wordBreak: 'keep-all',

  ...breakpoint({
    mobile: { fontSize: theme.fontSizes.xxl },
    tablet: { fontSize: theme.fontSizes.xxxl },
  }),
});

export const privacyCheckbox = style({
  marginTop: rem(36),
});

export const testButton = style({
  marginTop: theme.sizes.appSpace,
});
