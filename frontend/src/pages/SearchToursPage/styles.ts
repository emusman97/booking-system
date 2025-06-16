import { Stack } from '@/components';
import styled from 'styled-components';

export const MainImage = styled.img`
  width: 100vw;
  height: 65vh;
  object-fit: cover;
`;

export const Container = styled(Stack)`
  position: relative;
  height: 2rem;
  justify-self: center;
  width: 70%;
`;

export const SearchFiltersContainer = styled(Stack)`
  box-shadow: ${(props) => props.theme.shadows.lg};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background: ${(props) => props.theme.colors.light};
  padding: 1rem;
`;

export const LocationInput = styled.input``;
