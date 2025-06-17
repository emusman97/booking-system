import styled from 'styled-components';

import { Stack } from '../Stack';

export const PageContentContainer = styled(Stack)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing['8']};
`;
