import { MainLayout } from '@/components';
import { type JSX } from 'react';
import styled from 'styled-components';

const H1 = styled.h1``;

export function LandingPage(): JSX.Element {
  return (
    <MainLayout>
      <H1>Landing page</H1>
    </MainLayout>
  );
}
