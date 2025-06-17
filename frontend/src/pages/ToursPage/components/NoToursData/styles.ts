import { Stack } from '@/components';
import styled from 'styled-components';

export const Container = styled(Stack)`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing['6']};

  & > img {
    height: 230px;
    width: 230px;
    object-fit: contain;
  }

  & > p {
    font-size: ${(props) => props.theme.typography.fontSize['3xl']};
    color: ${(props) => props.theme.colors.text.muted};
  }
`;
