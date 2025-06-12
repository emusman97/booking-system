import type { JSX, PropsWithChildren } from 'react';

import { NavBar } from './components';
import { Container, NavBarSpacing } from './styles';

export function MainLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <Container>
      <NavBar />
      <NavBarSpacing />
      {children}
    </Container>
  );
}
