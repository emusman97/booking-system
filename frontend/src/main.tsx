import '@/index.css';
import { MainRoutes } from '@/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { queryClient } from './core';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainRoutes />
    </QueryClientProvider>
  </StrictMode>
);
