import { useState, type JSX } from 'react';

import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

import { Card, CardContainer, Container } from './styles';

export function ToursLoadingSkeleton(): JSX.Element {
  const [cardIds] = useState(() => Array.from({ length: 6 }, (_, i) => i + 1));

  return (
    <Container direction="row">
      <CardContainer>
        {cardIds.map((cardId) => (
          <Card key={cardId}>
            <Skeleton height={'100%'} />
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}
