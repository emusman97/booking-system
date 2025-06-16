import type { JSX } from 'react';

import { Images } from '@/assets';

import { Container } from './styles';
import type { ChooseValueButtonProps } from './types';

export function ChooseValueButton(
  { value, placeholder }: ChooseValueButtonProps
): JSX.Element {
  const hasValue = !!value;

  return (
    <Container direction="row" hasValue={hasValue}>
      <p>{value ?? placeholder}</p>

      <img src={hasValue ? Images.chevronUpIcon : Images.chevronDownIcon} />
    </Container>
  );
}
