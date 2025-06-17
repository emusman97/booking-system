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

export const PriceRangeImg = styled.img`
  height: 0.8rem;
  width: 0.8rem;
  object-fit: contain;
`;

export const PopularCitiesHeader = styled.p`
  margin-top: 64px;
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
`;

export const CitiesContainer = styled(Stack)`
  padding-bottom: 2rem;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${(props) => props.theme.spacing['4']};
    align-items: flex-start;
  }
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
