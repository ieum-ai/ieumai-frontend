'use client';
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';

declare global {
  interface Window {
    __theme: 'light' | 'dark';
    __setPreferredTheme: (newTheme: 'light' | 'dark') => void;
    __onThemeChange: (newTheme: 'light' | 'dark') => void;
  }
}

type Theme = 'light' | 'dark';
type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    typeof window !== 'undefined' && window.__theme ? window.__theme : 'light',
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__onThemeChange = (newTheme: Theme) => setTheme(newTheme);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.__onThemeChange = () => undefined;
      }
    };
  }, []);

  const setThemeState = (newTheme: Theme) => {
    window.__setPreferredTheme(newTheme);
  };

  const toggleTheme = () => window.__setPreferredTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
