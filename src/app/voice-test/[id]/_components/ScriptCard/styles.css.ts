import { style } from '@vanilla-extract/css';

import { breakpoint, theme } from '@ieum/styles';

export const card = style({
  ...theme.layouts.column,
  marginBlock: theme.sizes.appSpace,
});

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
