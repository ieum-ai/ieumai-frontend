import './reset.css';
import './animation.css';

import { globalStyle, style } from '@vanilla-extract/css';

import { rem } from './pxto';
import { theme } from './theme.css';

globalStyle('body', {
  paddingBottom: 'env(safe-area-inset-bottom)',
  overflowX: 'hidden',
  fontFamily: theme.fonts.sans,
  backgroundColor: theme.colors.background,
  transition: 'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
  backgroundColor: theme.colors.selection,
});

globalStyle('main', {
  ...theme.layouts.column,
  flex: 1,
  padding: theme.sizes.appSpace,
});

globalStyle('label > .required', {
  alignSelf: 'center',
  marginLeft: rem(2),
  color: theme.colors.blue600,
});
