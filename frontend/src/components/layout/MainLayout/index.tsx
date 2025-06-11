import type { JSX, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { NavBar } from './components';

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export function MainLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
}
