import '@ieum/styles/global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

import { METADATA } from '@ieum/constants/metadata';
import { ThemeProvider } from '@ieum/states/ThemeProvider';
import { darkModeColors, lightModeColors } from '@ieum/styles';

import Layout from './_components/Layout';

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
  title: METADATA.siteName,
  description: METADATA.siteDescription,
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
