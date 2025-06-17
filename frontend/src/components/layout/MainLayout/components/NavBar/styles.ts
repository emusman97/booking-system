import styled from 'styled-components';

export const Nav = styled.nav`
  padding: 1rem ${({ theme }) => theme.spacing['8']} 1rem
    ${({ theme }) => theme.spacing['8']};
  position: absolute;
  height: 2rem;
  z-index: 1000;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    height: 100%;
  }
  img {
    height: 2rem;
    object-fit: contain;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
