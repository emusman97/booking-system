import type { JSX } from 'react';

import { Images } from '@/assets';
import { PrimaryButton } from '@/components/PrimaryButton';
import { AppString } from '@/constants';
import { RoutePath } from '@/routes';
import { Link, useNavigate } from 'react-router';

import { ButtonContainer, Logo, Nav, NavItem, NavLinks } from './styles';
import type { NavBarProps } from './types';

export function NavBar({ showExploreNowButton }: NavBarProps): JSX.Element {
  const navigate = useNavigate();

  const gotoSearchTours = () => {
    navigate(RoutePath.SearchTours);
  };

  return (
    <Nav>
      <Logo>
        <Link to={RoutePath.Root}>
          <img src={Images.logo} alt={AppString.Logo} />
        </Link>
      </Logo>

      <NavLinks>
        <NavItem>
          <Link to={RoutePath.Tours}>{AppString.Tours}</Link>
        </NavItem>
        <NavItem>
          <Link to={RoutePath.Root}>{AppString.AddTour}</Link>
        </NavItem>
        <NavItem>
          <Link to={RoutePath.Root}>{AppString.MyTours}</Link>
        </NavItem>
      </NavLinks>

      <ButtonContainer>
        {showExploreNowButton && (
          <PrimaryButton onClick={gotoSearchTours}>
            {AppString.ExploreNow}
          </PrimaryButton>
        )}
      </ButtonContainer>
    </Nav>
  );
}
