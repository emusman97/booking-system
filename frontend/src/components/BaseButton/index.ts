import styled from 'styled-components';

export const BaseButton = styled.div`
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
