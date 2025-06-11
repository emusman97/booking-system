import { Images } from '@/assets';
import { PrimaryButton } from '@/components/PrimaryButton';
import { AppString } from '@/constants';
import { RoutePath } from '@/routes';
import type { JSX } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const Nav = styled.nav`
  // prettier-ignore
  padding: ${({ theme }) => theme.spacing['4']} ${({ theme }) =>
    theme.spacing['16']};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
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

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ButtonContainer = styled.div`
  width: 7.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export function NavBar(): JSX.Element {
  return (
    <Nav>
      <Logo>
        <Link to={RoutePath.Root}>
          <img src={Images.logo} alt={AppString.Logo} />
        </Link>
      </Logo>

      <NavLinks>
        <NavItem>
          <Link to={RoutePath.Root}>{AppString.Tours}</Link>
        </NavItem>
        <NavItem>
          <Link to={RoutePath.Root}>{AppString.AddTour}</Link>
        </NavItem>
        <NavItem>
          <Link to={RoutePath.Root}>{AppString.MyTours}</Link>
        </NavItem>
      </NavLinks>

      <ButtonContainer>
        <PrimaryButton>{AppString.ExploreNow}</PrimaryButton>
      </ButtonContainer>
    </Nav>
  );
}
