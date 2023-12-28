import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeInterface {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

type Theme = 'dark' | 'light';
const ThemeContext = createContext<ThemeInterface>({} as ThemeInterface);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<Theme>(() => {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) return currentTheme as Theme;
    else if (window.matchMedia('(prefers-color-scheme:dark').matches)
      return 'dark';

    return 'light';
  });

  const setTheme = (theme: Theme) => {
    setThemeMode(theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  useEffect(() => {
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeCtx = () => useContext(ThemeContext);

export { ThemeProvider, useThemeCtx };