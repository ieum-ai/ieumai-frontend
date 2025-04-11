import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint, rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layout.center,
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: theme.color.cardBackground,
});

globalStyle(`${root} > div`, {
  ...theme.layout.columnCenter,
  width: '100%',
  height: '100%',
});

export const introText = style({
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.xl,
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: '180%',
  wordBreak: 'keep-all',

  ...breakpoint({
    mobile: { fontSize: theme.fontSize.xxl },
    tablet: { fontSize: theme.fontSize.xxxl },
  }),
});

export const privacyCheckbox = style({
  marginTop: rem(36),
});

export const testButton = style({
  marginTop: theme.size.appSpace,
});
