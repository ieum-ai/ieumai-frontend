import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

import { rem } from './pxto';

const sizes = {
  app: rem(760),
  appSpace: rem(24),
};

const fonts = {
  mono: `"Courier New", Courier, var(--font-pretendard), "Pretendard Variable", monospace`,
  sans: `var(--font-pretendard), "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const layouts = {
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

const zIndices = {
  behind: '-1',
  overlay: '100',
  header: '150',
  modal: '200',
  modalContent: '250',
};

const fontSizes = {
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

const modeColors = createThemeContract({
  background: 'var(--ieum-color-background)',
  contentPrimary: 'var(--ieum-color-content-primary)',
  contentSecondary: 'var(--ieum-color-content-secondary)',

  selection: 'var(--ieum-color-selection)',
});

const colors = {
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

  blackAlpha05: 'rgba(32, 35, 37, 0.05)',
  blackAlpha10: 'rgba(32, 35, 37, 0.1)',
  blackAlpha20: 'rgba(32, 35, 37, 0.2)',
  blackAlpha30: 'rgba(32, 35, 37, 0.3)',
  blackAlpha40: 'rgba(32, 35, 37, 0.4)',
  blackAlpha50: 'rgba(32, 35, 37, 0.5)',
  blackAlpha60: 'rgba(32, 35, 37, 0.6)',
  blackAlpha70: 'rgba(32, 35, 37, 0.7)',
  blackAlpha80: 'rgba(32, 35, 37, 0.8)',
  blackAlpha90: 'rgba(32, 35, 37, 0.9)',

  ...modeColors,
};

export const lightModeColors = createTheme(modeColors, {
  background: '#F1F2F4',
  contentPrimary: '#202225',
  contentSecondary: '#4F545C',

  selection: 'rgba(0, 0, 0, 0.15)',
});

export const darkModeColors = createTheme(modeColors, {
  background: '#F1F2F4',
  contentPrimary: '#202225',
  contentSecondary: '#4F545C',

  selection: 'rgba(255, 255, 255, 0.15)',
});

export const theme = createGlobalTheme(':root', {
  colors,
  fonts,
  fontSizes,
  sizes,
  layouts,
  zIndices,
});
