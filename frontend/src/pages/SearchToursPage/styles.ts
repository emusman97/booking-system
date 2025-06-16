import { BaseButton, Stack } from '@/components';
import styled from 'styled-components';

export const MainImage = styled.img`
  width: 100%;
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

export const CitiesContainer = styled(Stack)`
  margin-top: 5rem;
  padding-bottom: 2rem;

  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing['4']};
  align-items: flex-start;
`;

export const City = styled(BaseButton)`
  padding: 0.5rem;
  border-style: solid;
  border-width: 0.1rem;
  border-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.lg};

  & > p {
    font-size: ${(props) => props.theme.typography.fontSize['xl']};
    color: ${(props) => props.theme.colors.text.city};
  }
`;
