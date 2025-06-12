import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const NavBarSpacing = styled.div`
  height: calc(${({ theme }) => theme.spacing['8']} + 2rem);
`;
