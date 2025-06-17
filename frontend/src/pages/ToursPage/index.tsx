import type { JSX } from 'react';

import { MainLayout, PageContentContainer } from '@/components';

import { NoToursData } from './components';
import { Container } from './styles';

export function ToursPage(): JSX.Element {
  return (
    <MainLayout>
      <PageContentContainer>
        <Container>
          <NoToursData />
        </Container>
      </PageContentContainer>
    </MainLayout>
  );
}
