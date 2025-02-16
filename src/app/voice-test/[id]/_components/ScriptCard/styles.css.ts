import { style } from '@vanilla-extract/css';

import { theme } from '@ieum/styles';

export const root = style({
  marginBlock: theme.sizes.appSpace,
});

export const script = style({
  width: '100%',
  maxWidth: theme.sizes.appContent,
  marginBlock: `calc(${theme.sizes.appSpace} * 3)`,
  marginInline: 'auto',
  color: theme.colors.textSecondary,
  fontSize: theme.fontSizes.xxxl,
  fontWeight: 600,
  textAlign: 'center',
  wordBreak: 'keep-all',
});
