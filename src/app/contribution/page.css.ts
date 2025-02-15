import { style } from '@vanilla-extract/css';

import { rem, theme, breakpoint } from '@ieum/styles';

export const card = style({
  ...theme.layouts.column,
  alignItems: 'flex-start',
  marginBottom: theme.sizes.appSpace,
  gap: theme.sizes.appSpace,

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
  right: theme.sizes.formComponentPadding,
  transform: 'translateY(-50%)',
});

export const formSubmitContainer = style({
  ...theme.layouts.centerY,
  justifyContent: 'flex-end',
  marginTop: rem(16),
  gap: theme.sizes.appSpace,
});
