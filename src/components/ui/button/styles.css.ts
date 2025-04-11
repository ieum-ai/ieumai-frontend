import { styleVariants, style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layout.center,
  flexShrink: 0,
  height: 'fit-content',
  border: `${rem(1)} solid transparent`,
  borderRadius: rem(10),
  lineHeight: 1,
  transition: 'color 0.3s, border-color 0.3s, background-color 0.3s',
});

export const sizeVariants = styleVariants({
  xs: { fontSize: theme.fontSize.xs, padding: `${rem(4)} ${rem(8)}` },
  sm: { fontSize: theme.fontSize.sm, padding: `${rem(8)} ${rem(12)}` },
  md: { fontSize: theme.fontSize.md, padding: `${rem(12)} ${rem(20)}` },
  lg: { fontSize: theme.fontSize.lg, padding: `${rem(12)} ${rem(28)}` },
  xl: { fontSize: theme.fontSize.xl, padding: `${rem(14)} ${rem(32)}` },
});

export const colorVariants = styleVariants({
  primary: {
    color: theme.color.buttonPrimaryColor,
    borderColor: theme.color.buttonPrimaryBorder,
    backgroundColor: theme.color.buttonPrimaryBackground,

    ':hover': {
      color: theme.color.buttonPrimaryHoverColor,
      borderColor: theme.color.buttonPrimaryHoverBorder,
      backgroundColor: theme.color.buttonPrimaryHoverBackground,
    },
  },
  secondary: {
    color: theme.color.buttonSecondaryColor,
    borderColor: theme.color.buttonSecondaryBorder,
    backgroundColor: theme.color.buttonSecondaryBackground,

    ':hover': {
      color: theme.color.buttonSecondaryHoverColor,
      borderColor: theme.color.buttonSecondaryHoverBorder,
      backgroundColor: theme.color.buttonSecondaryHoverBackground,
    },
  },
  disabled: {
    color: theme.color.buttonDisabledColor,
    borderColor: theme.color.buttonDisabledBorder,
    backgroundColor: theme.color.buttonDisabledBackground,
  },
});

export const fullWidth = styleVariants({
  true: { width: '100%' },
  false: { width: 'fit-content' },
});

export const justifyVariants = styleVariants({
  start: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  end: { justifyContent: 'flex-end' },
});

export const fontWeightVariants = styleVariants({
  light: { fontWeight: 300 },
  normal: { fontWeight: 400 },
  medium: { fontWeight: 500 },
  semibold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
});
