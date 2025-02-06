import '@ieum/styles/global.css';
import type { Metadata } from 'next';
import { FC, PropsWithChildren, ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'ieum.ai',
  description: '',
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
