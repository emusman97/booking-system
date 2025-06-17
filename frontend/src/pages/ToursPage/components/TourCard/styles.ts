import { Stack } from '@/components';
import styled from 'styled-components';

export const Container = styled(Stack)`
  box-shadow: ${(props) => props.theme.shadows.md};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.white};
  height: 100px;
  width: 100px;
`;
