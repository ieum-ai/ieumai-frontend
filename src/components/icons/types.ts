import { SVGAttributes } from 'react';

export type IconProps = {
  size?: number;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  type?: 'fill' | 'stroke';
} & SVGAttributes<SVGElement>;
