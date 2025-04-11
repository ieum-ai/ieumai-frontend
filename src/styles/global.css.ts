import './reset.css';
import './animation.css';

import { globalStyle } from '@vanilla-extract/css';

import { rem } from './pxto';
import { theme } from './theme.css';

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  overflowX: 'hidden',
  fontFamily: theme.fontFamily.sans,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextSizeAdjust: '100%',
  MozOsxFontSmoothing: 'grayscale',
  backgroundColor: theme.color.background,
  transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  overflowY: 'scroll',
  scrollbarGutter: 'stable',
});

globalStyle('[data-theme="light"]', {
  colorScheme: 'light',
});

globalStyle('[data-theme="dark"]', {
  colorScheme: 'dark',
});

globalStyle('::selection', {
  backgroundColor: theme.color.selection,
});

globalStyle('label > .required', {
  alignSelf: 'center',
  marginLeft: rem(2),
  color: theme.color.blue600,
});
