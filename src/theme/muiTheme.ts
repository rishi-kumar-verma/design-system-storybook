import { createTheme } from '@mui/material/styles';
import tokens from '../tokens';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: tokens.colors.primary['600'],
      light: tokens.colors.primary['300'],
      dark: tokens.colors.primary['900'],
    },
    secondary: {
      main: tokens.colors.secondary['600'],
    },
    background: {
      default: tokens.colors.neutral['50'],
      paper: '#FFFFFF',
    },
    text: {
      primary: tokens.colors.neutral['900'],
      secondary: tokens.colors.neutral['600'],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 600 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    h5: { fontSize: '1.25rem', fontWeight: 600 },
    h6: { fontSize: '1rem', fontWeight: 600 },
  },
  spacing: 8,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: tokens.colors.primary['400'],
      light: tokens.colors.primary['200'],
      dark: tokens.colors.primary['600'],
    },
    secondary: {
      main: tokens.colors.secondary['400'],
    },
    background: {
      default: tokens.colors.neutral['900'],
      paper: tokens.colors.neutral['800'],
    },
    text: {
      primary: tokens.colors.neutral['50'],
      secondary: tokens.colors.neutral['300'],
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 600 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.75rem', fontWeight: 600 },
    h4: { fontSize: '1.5rem', fontWeight: 600 },
    h5: { fontSize: '1.25rem', fontWeight: 600 },
    h6: { fontSize: '1rem', fontWeight: 600 },
  },
  spacing: 8,
});

export { lightTheme, darkTheme };
