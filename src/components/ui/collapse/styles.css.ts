import { globalStyle, keyframes, style } from '@vanilla-extract/css';

export const slideUp = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});

export const content = style({
  overflow: 'hidden',
});

globalStyle(`${content}[data-state="open"]`, {
  animation: `${slideDown} 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
});

globalStyle(`${content}[data-state="closed"]`, {
  animation: `${slideUp} 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
});
