import { style } from '@vanilla-extract/css';

import { rem, theme, breakpoint } from '@ieum/styles';

export const root = style({
  ...theme.layouts.column,
  gap: rem(24),
});

export const card = style({
  ...theme.layouts.column,
  alignItems: 'flex-start',
  gap: rem(24),

  ...breakpoint({
    tablet: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: rem(16),

  ...breakpoint({ tablet: { gridTemplateColumns: '1fr 1fr' } }),
});

export const formContainer = style({
  position: 'relative',
});

export const formInnerButton = style({
  position: 'absolute',
  top: '50%',
  right: rem(16),
  transform: 'translateY(-50%)',
});
