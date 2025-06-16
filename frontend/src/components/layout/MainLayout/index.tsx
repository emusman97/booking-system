import type { JSX } from 'react';

import { NavBar } from './components';
import { Container, NavBarSpacing } from './styles';
import type { MainLayoutProps } from './types';

export function MainLayout(
  {
    showExploreNowButton = false,
    addNavBarSpacing = true,
    children,
  }: MainLayoutProps
): JSX.Element {
  return (
    <Container>
      <NavBar showExploreNowButton={showExploreNowButton} />
      {addNavBarSpacing && <NavBarSpacing />}
      {children}
    </Container>
  );
}

export * from './types';
