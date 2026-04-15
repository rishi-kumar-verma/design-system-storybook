import React, { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import light from './light';
import dark from './dark';
import { lightTheme as muiLightTheme, darkTheme as muiDarkTheme } from './muiTheme';

type ThemeName = 'light' | 'dark';

const ThemeContext = createContext({ theme: 'light' as ThemeName, setTheme: (_: ThemeName) => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const emotionTheme = useMemo(() => (themeName === 'light' ? light : dark), [themeName]);
  const muiTheme = useMemo(() => (themeName === 'light' ? muiLightTheme : muiDarkTheme), [themeName]);

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme: setThemeName }}>
      <MuiThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={emotionTheme}>
          <CssBaseline />
          {children}
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
