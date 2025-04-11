import { globalStyle, style } from '@vanilla-extract/css';

import { rem, theme } from '@ieum/styles';

export const tableContainer = style({
  width: '100%',
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
  borderCollapse: 'collapse',
  borderRadius: rem(16),
  overflowX: 'auto',
  backgroundColor: theme.color.cardBackground,
});

export const table = style({
  width: '100%',
  minWidth: rem(720),
});

globalStyle(`${table} thead th`, {
  color: theme.color.textSecondary,
  fontSize: theme.fontSize.sm,
  fontWeight: 600,
  borderTop: 'none',
});

globalStyle(`${table} tbody td`, {
  color: theme.color.text,
  fontSize: theme.fontSize.base,
  cursor: 'pointer',
});

globalStyle(`${table} tbody:last-child td`, {
  borderBottom: 'none',
});

globalStyle(`${table} th, ${table} td`, {
  paddingBlock: rem(12),
  paddingInline: rem(12),
  textAlign: 'center',
  border: `${rem(1)} solid ${theme.color.cardBorder}`,
});

globalStyle(`${table} th:nth-child(1), ${table} td:nth-child(1)`, {
  width: '7.5%',
  whiteSpace: 'nowrap',
  borderLeft: 'none',
});

globalStyle(`${table} th:nth-child(2), ${table} td:nth-child(2)`, {
  width: '15%',
  whiteSpace: 'nowrap',
});

globalStyle(`${table} th:nth-child(3), ${table} td:nth-child(3)`, {
  width: '62.5%',
  whiteSpace: 'nowrap',
});

globalStyle(`${table} th:nth-child(4), ${table} td:nth-child(4)`, {
  width: '7.5%',
  whiteSpace: 'nowrap',
});

globalStyle(`${table} th:nth-child(5), ${table} td:nth-child(5)`, {
  width: '7.5%',
  whiteSpace: 'nowrap',
  borderRight: 'none',
});

export const script = style({
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  textAlign: 'left',
  whiteSpace: 'normal',
  overflow: 'hidden',
});
