import { style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const recordButton = style({
  ...theme.layouts.center,
  width: rem(52),
  height: rem(52),
  borderRadius: '50%',
  color: theme.colors.text,
  backgroundColor: theme.colors.white,
  filter: `drop-shadow(${rem(1)} ${rem(1)} ${rem(6)} ${theme.colors.blackAlpha05})`,
  transition: 'color 300ms, background-color 300ms',

  ':hover': {
    color: theme.colors.blackAlpha80,
    backgroundColor: '#F9F9F9',
  },
});
