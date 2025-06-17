import { Stack } from '@/components';
import styled from 'styled-components';

export const MainContainer = styled(Stack)`
  flex: 1;
`;

export const Container = styled(Stack)`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  gap: ${(props) => props.theme.spacing['2']};

  & > img {
    height: 2rem;
    width: 2rem;
  }
`;

export const LabelContainer = styled(Stack)`
  gap: ${(props) => props.theme.spacing['2']};

  & > p {
    font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
    font-size: ${(props) => props.theme.typography.fontSize.xl};
  }
`;

export const Divider = styled.div`
  width: 0.1rem;
  background: ${(props) => props.theme.colors.border};
`;
