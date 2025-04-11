import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

import { rem } from './pxto';

const size = {
  app: rem(1200),
  appSpace: rem(24),
  appContent: rem(740),

  headerHeight: rem(80),
  headerHeightMobile: rem(56),

  formComponentMinWidth: rem(340),
  formComponentMinWidthMobile: rem(260),
  formComponentMaxWidth: rem(370),
  formComponentHeight: rem(68),
  formComponentPadding: rem(16),
};

const fontFamily = {
  mono: `"Courier New", Courier, var(--font-pretendard), "Pretendard Variable", monospace`,
  sans: `var(--font-pretendard), "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const layout = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const zIndex = {
  behind: '-1',
  select: '50',
  overlay: '100',
  header: '150',
  modal: '200',
  modalContent: '250',
};

const fontSize = {
  xxxl: rem(28),
  xxl: rem(24),
  xl: rem(20),
  lg: rem(18),
  md: rem(16),
  base: rem(15),
  sm: rem(14),
  xs: rem(12),
  xxs: rem(10),
  xxxs: rem(8),
};

const modeColor = createThemeContract({
  background: 'var(--ieum-color-background)',

  text: 'var(--ieum-color-text)',
  textSecondary: 'var(--ieum-color-text-secondary)',

  cardBackground: 'var(--ieum-color-card-background)',
  cardBorder: 'var(--ieum-color-card-border)',

  formBackground: 'var(--ieum-color-form-background)',
  formBorder: 'var(--ieum-color-form-border)',
  formDisabledColor: 'var(--ieum-color-form-disabled-color)',
  formDisabledBackground: 'var(--ieum-color-form-disabled-background)',
  formIconFill: 'var(--ieum-color-form-icon-fill)',

  buttonPrimaryColor: 'var(--ieum-color-button-primary-color)',
  buttonPrimaryBorder: 'var(--ieum-color-button-primary-border)',
  buttonPrimaryBackground: 'var(--ieum-color-button-primary-background)',
  buttonPrimaryHoverColor: 'var(--ieum-color-button-primary-hover-color)',
  buttonPrimaryHoverBorder: 'var(--ieum-color-button-primary-hover-border)',
  buttonPrimaryHoverBackground: 'var(--ieum-color-button-primary-hover-background)',
  buttonSecondaryColor: 'var(--ieum-color-button-secondary-color)',
  buttonSecondaryBorder: 'var(--ieum-color-button-secondary-border)',
  buttonSecondaryBackground: 'var(--ieum-color-button-secondary-background)',
  buttonSecondaryHoverBorder: 'var(--ieum-color-button-secondary-hover-border)',
  buttonSecondaryHoverColor: 'var(--ieum-color-button-secondary-hover-color)',
  buttonSecondaryHoverBackground: 'var(--ieum-color-button-secondary-hover-background)',
  buttonDisabledColor: 'var(--ieum-color-button-disabled-color)',
  buttonDisabledBorder: 'var(--ieum-color-button-disabled-border)',
  buttonDisabledBackground: 'var(--ieum-color-button-disabled-background)',

  recordButtonBorder: 'var(--ieum-color-record-button-border)',
  recordButtonBackground: 'var(--ieum-color-record-button-background)',
  recordRippleBackground: 'var(--ieum-color-record-ripple-background)',

  selection: 'var(--ieum-color-selection)',
});

const color = {
  white: '#FFFFFF',
  whiteAlpha05: 'rgba(255, 255, 255, 0.05)',
  whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
  whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
  whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
  whiteAlpha40: 'rgba(255, 255, 255, 0.4)',
  whiteAlpha50: 'rgba(255, 255, 255, 0.5)',
  whiteAlpha60: 'rgba(255, 255, 255, 0.6)',
  whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
  whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
  whiteAlpha90: 'rgba(255, 255, 255, 0.9)',

  black: '#0B0C0D',
  blackAlpha05: 'rgba(11, 12, 13, 0.05)',
  blackAlpha10: 'rgba(11, 12, 13, 0.1)',
  blackAlpha20: 'rgba(11, 12, 13, 0.2)',
  blackAlpha30: 'rgba(11, 12, 13, 0.3)',
  blackAlpha40: 'rgba(11, 12, 13, 0.4)',
  blackAlpha50: 'rgba(11, 12, 13, 0.5)',
  blackAlpha60: 'rgba(11, 12, 13, 0.6)',
  blackAlpha70: 'rgba(11, 12, 13, 0.7)',
  blackAlpha80: 'rgba(11, 12, 13, 0.8)',
  blackAlpha90: 'rgba(11, 12, 13, 0.9)',

  blue50: '#F2F9FD',
  blue100: '#E4F1FA',
  blue200: '#C4E2F3',
  blue300: '#90CBE9',
  blue400: '#55B1DC',
  blue500: '#2E97C9',
  blue600: '#1F79AA',
  blue700: '#1A618A',
  blue800: '#195273',
  blue900: '#1A4560',
  blue950: '#122C3F',

  ...modeColor,
};

export const lightModeColor = createTheme(modeColor, {
  background: '#F1F2F4',

  text: color.black,
  textSecondary: color.blackAlpha60,

  cardBackground: '#EDEDED',
  cardBorder: color.blackAlpha05,

  formBackground: color.whiteAlpha90,
  formBorder: color.blackAlpha10,
  formDisabledColor: color.blackAlpha20,
  formDisabledBackground: color.whiteAlpha50,
  formIconFill: color.blackAlpha60,

  buttonPrimaryColor: color.white,
  buttonPrimaryBorder: color.black,
  buttonPrimaryBackground: color.black,
  buttonPrimaryHoverColor: color.white,
  buttonPrimaryHoverBorder: color.blackAlpha80,
  buttonPrimaryHoverBackground: color.blackAlpha80,

  buttonSecondaryColor: color.text,
  buttonSecondaryBorder: color.blackAlpha05,
  buttonSecondaryBackground: color.blackAlpha05,
  buttonSecondaryHoverColor: color.black,
  buttonSecondaryHoverBorder: color.blackAlpha10,
  buttonSecondaryHoverBackground: color.blackAlpha10,

  buttonDisabledColor: 'var(--ieum-color-button-disabled-color)',
  buttonDisabledBorder: 'var(--ieum-color-button-disabled-border)',
  buttonDisabledBackground: 'var(--ieum-color-button-disabled-background)',

  recordButtonBorder: '#DBDCDE',
  recordButtonBackground: '#E5E6E8',
  recordRippleBackground: '#E2E2E2',

  selection: 'rgba(0, 0, 0, 0.15)',
});

export const darkModeColor = createTheme(modeColor, {
  background: color.black,

  text: '#F1F2F4',
  textSecondary: color.whiteAlpha60,

  cardBackground: 'rgba(237, 237, 237, 0.1)',
  cardBorder: color.whiteAlpha05,

  formBackground: color.blackAlpha90,
  formBorder: color.whiteAlpha20,
  formDisabledColor: color.whiteAlpha20,
  formDisabledBackground: color.blackAlpha50,
  formIconFill: color.whiteAlpha60,

  buttonPrimaryColor: color.white,
  buttonPrimaryBorder: color.whiteAlpha10,
  buttonPrimaryBackground: color.black,
  buttonPrimaryHoverColor: color.white,
  buttonPrimaryHoverBorder: color.blackAlpha80,
  buttonPrimaryHoverBackground: color.blackAlpha80,

  buttonSecondaryColor: color.white,
  buttonSecondaryBorder: color.whiteAlpha05,
  buttonSecondaryBackground: color.whiteAlpha10,
  buttonSecondaryHoverColor: color.whiteAlpha70,
  buttonSecondaryHoverBorder: color.whiteAlpha05,
  buttonSecondaryHoverBackground: color.whiteAlpha05,

  buttonDisabledColor: 'var(--ieum-color-button-disabled-color)',
  buttonDisabledBorder: 'var(--ieum-color-button-disabled-border)',
  buttonDisabledBackground: 'var(--ieum-color-button-disabled-background)',

  recordButtonBorder: '#2F3031',
  recordButtonBackground: '#242526',
  recordRippleBackground: '#2D2E2F',

  selection: 'rgba(255, 255, 255, 0.15)',
});

export const theme = createGlobalTheme(':root', {
  color,
  fontFamily,
  fontSize,
  size,
  layout,
  zIndex,
});
