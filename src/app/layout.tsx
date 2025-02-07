import '@ieum/styles/global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

import { ThemeProvider } from '@ieum/states/ThemeProvider';
import { darkModeColors, lightModeColors } from '@ieum/styles';

import Layout from '@ieum/app/_components/Layout';

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  preload: true,
  variable: '--font-pretendard',
});

const colorThemeScript = `
  (function() {
    window.__onThemeChange = function() {};
    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.documentElement.setAttribute('data-theme', newTheme);
      document.documentElement.className = newTheme === 'dark' ? '${darkModeColors}' : '${lightModeColors}';
      document.documentElement.classList.add('${pretendard.variable}');
      window.__onThemeChange(newTheme);
    }
    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (err) {}
    window.__setPreferredTheme = function(newTheme) {
      setTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (err) {}
    }
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light');
    });
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
`;

export const metadata: Metadata = {
  title: 'ieum.ai',
  description:
    '한국어 음성 데이터를 수집·분석하여 지역 방언을 식별하고 보존하는 오픈소스 프로젝트입니다. 방대한 음성 아카이브 구축을 목표로 연구와 개발을 진행합니다.',
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorThemeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
