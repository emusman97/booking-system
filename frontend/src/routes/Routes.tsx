import type { JSX } from 'react';

import { LandingPage, SearchToursPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router';

import { RoutePath } from './routePaths';

export function MainRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={RoutePath.SearchTours} element={<SearchToursPage />} />
      </Routes>
    </BrowserRouter>
  );
}
