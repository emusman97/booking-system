import type { JSX } from 'react';

import { Images } from '@/assets';
import { AppString } from '@/constants';

import { Container } from './styles';

export function NoToursData(): JSX.Element {
  return (
    <Container>
      <img src={Images.noToursDataIcon} alt="No tours data icon" />
      <p>{AppString.NoTours}</p>
    </Container>
  );
}
