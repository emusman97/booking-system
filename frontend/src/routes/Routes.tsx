import type { JSX } from 'react';

import { LandingPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router';

export function MainRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
