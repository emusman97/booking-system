import { PrimaryButton } from '@/components';
import styled from 'styled-components';

export const BaseButton = styled(PrimaryButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  & > img {
    height: 1rem;
    width: 1rem;
  }
`;
