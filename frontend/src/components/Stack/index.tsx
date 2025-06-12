import styled from 'styled-components';
import type { StackProps } from './types';

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
`;

export * from './types';
