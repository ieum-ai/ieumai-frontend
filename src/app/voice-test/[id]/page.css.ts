import { style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const controlPanel = style({
  position: 'relative',
  width: '100%',
  marginTop: `calc(${theme.sizes.appSpace} * 2)`,
});

export const recordButton = style({
  ...theme.layouts.center,
  width: rem(52),
  height: rem(52),
  marginInline: 'auto',
  border: `${rem(1)} solid ${theme.colors.recordButtonBorder}`,
  borderRadius: '50%',
  color: theme.colors.text,
  backgroundColor: theme.colors.recordButtonBackground,
  filter: `drop-shadow(${rem(1)} ${rem(1)} ${rem(6)} ${theme.colors.blackAlpha05})`,
  transition: 'opacity 300ms',

  ':hover': {
    opacity: 0.7,
  },
});

export const rippleContainer = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: rem(180),
  height: rem(180),
  color: theme.colors.recordRippleBackground,
  transform: 'translate(-50%, -50%)',
});
