import { Stack } from '@/components';
import styled from 'styled-components';

export const Container = styled(Stack)`
  flex: 1%;
  padding-top: ${(props) => props.theme.spacing['8']};
`;
