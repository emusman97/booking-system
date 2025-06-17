import { Stack } from '@/components';
import styled from 'styled-components';

export const Container = styled(Stack)`
  flex-wrap: wrap;
  gap: 72px;
  box-sizing: border-box; /* Ensure padding doesn't cause overflow */
  overflow: hidden;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 32px;
`;

export const Card = styled.div`
  width: 100%;
  height: 300px;
  border-radius: ${(props) => props.theme.borderRadius.md};
`;
