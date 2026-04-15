import React from 'react';
import { Preview } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import '../src/i18n';
import ThemeProvider, { useTheme } from '../src/theme/ThemeProvider';
import { Box, Button, Stack, Typography } from '@mui/material';

// Theme and Language Switcher Component
function ThemeAndLanguageSwitcher() {
  const { theme, setTheme } = useTheme();
  const { i18n, t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 9999,
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        backgroundColor: theme === 'dark' ? '#1e1e1e' : '#f5f5f5',
        padding: '12px 16px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* Theme Switcher */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" sx={{ fontWeight: 500, minWidth: '70px' }}>
          {t('theme.toggle')}
        </Typography>
        <Button
          size="small"
          variant={theme === 'light' ? 'contained' : 'outlined'}
          onClick={() => setTheme('light')}
          sx={{ minWidth: '60px' }}
        >
          {t('theme.light')}
        </Button>
        <Button
          size="small"
          variant={theme === 'dark' ? 'contained' : 'outlined'}
          onClick={() => setTheme('dark')}
          sx={{ minWidth: '60px' }}
        >
          {t('theme.dark')}
        </Button>
      </Stack>

      {/* Language Switcher */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" sx={{ fontWeight: 500, minWidth: '70px' }}>
          {t('language.toggle')}
        </Typography>
        <Button
          size="small"
          variant={i18n.language === 'en' ? 'contained' : 'outlined'}
          onClick={() => i18n.changeLanguage('en')}
          sx={{ minWidth: '60px' }}
        >
          {t('language.english')}
        </Button>
        <Button
          size="small"
          variant={i18n.language === 'bn' ? 'contained' : 'outlined'}
          onClick={() => i18n.changeLanguage('bn')}
          sx={{ minWidth: '60px' }}
        >
          {t('language.bengali')}
        </Button>
      </Stack>
    </Box>
  );
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <ThemeAndLanguageSwitcher />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: { expanded: true },
  },
};

export default preview;
