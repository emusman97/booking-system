import { Images } from '@/assets';
import { PrimaryButton } from '@/components/PrimaryButton';
import { AppString } from '@/constants';
import { RoutePath } from '@/routes';
import type { JSX } from 'react';
import { Link } from 'react-router';
import { ButtonContainer, Logo, Nav, NavItem, NavLinks } from './styles';

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
