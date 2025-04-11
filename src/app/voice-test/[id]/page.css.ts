import { style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const controlPanel = style({
  position: 'relative',
  width: '100%',
  marginTop: `calc(${theme.size.appSpace} * 2)`,
});

export const recordButton = style({
  ...theme.layout.center,
  width: rem(52),
  height: rem(52),
  marginInline: 'auto',
  border: `${rem(1)} solid ${theme.color.recordButtonBorder}`,
  borderRadius: '50%',
  color: theme.color.text,
  backgroundColor: theme.color.recordButtonBackground,
  filter: `drop-shadow(${rem(1)} ${rem(1)} ${rem(6)} ${theme.color.blackAlpha05})`,
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
  color: theme.color.recordRippleBackground,
  transform: 'translate(-50%, -50%)',
});
