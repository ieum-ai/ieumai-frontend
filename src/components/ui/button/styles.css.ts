import { styleVariants, style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const root = style({
  ...theme.layouts.center,
  flexShrink: 0,
  height: 'fit-content',
  border: `${rem(1)} solid transparent`,
  borderRadius: rem(10),
  lineHeight: 1,
  transition: 'color 0.3s, border-color 0.3s, background-color 0.3s',
});

export const sizeVariants = styleVariants({
  xs: { fontSize: theme.fontSizes.xs, padding: `${rem(4)} ${rem(8)}` },
  sm: { fontSize: theme.fontSizes.sm, padding: `${rem(8)} ${rem(12)}` },
  md: { fontSize: theme.fontSizes.md, padding: `${rem(12)} ${rem(20)}` },
  lg: { fontSize: theme.fontSizes.lg, padding: `${rem(12)} ${rem(28)}` },
  xl: { fontSize: theme.fontSizes.xl, padding: `${rem(14)} ${rem(32)}` },
});

export const colorVariants = styleVariants({
  primary: {
    color: theme.colors.buttonPrimaryColor,
    borderColor: theme.colors.buttonPrimaryBorder,
    backgroundColor: theme.colors.buttonPrimaryBackground,

    ':hover': {
      color: theme.colors.buttonPrimaryHoverColor,
      borderColor: theme.colors.buttonPrimaryHoverBorder,
      backgroundColor: theme.colors.buttonPrimaryHoverBackground,
    },
  },
  secondary: {
    color: theme.colors.buttonSecondaryColor,
    borderColor: theme.colors.buttonSecondaryBorder,
    backgroundColor: theme.colors.buttonSecondaryBackground,

    ':hover': {
      color: theme.colors.buttonSecondaryHoverColor,
      borderColor: theme.colors.buttonSecondaryHoverBorder,
      backgroundColor: theme.colors.buttonSecondaryHoverBackground,
    },
  },
  disabled: {
    color: theme.colors.buttonDisabledColor,
    borderColor: theme.colors.buttonDisabledBorder,
    backgroundColor: theme.colors.buttonDisabledBackground,
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
