import { style } from '@vanilla-extract/css';

import { breakpoint, theme } from '@ieum/styles';

export const card = style({
  ...theme.layout.column,
  marginBlock: theme.size.appSpace,
});

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
