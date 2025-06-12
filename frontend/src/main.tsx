import '@/index.css';

import { StrictMode } from 'react';

import { MainRoutes } from '@/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { queryClient } from './core';
import { GlobalStyle, theme } from './theme';

import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
