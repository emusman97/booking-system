import { type JSX } from 'react';

import { Images } from '@/assets';
import { MainLayout, PageContentContainer } from '@/components';
import { AppString } from '@/constants';
import { RoutePath } from '@/routes';
import { useNavigate } from 'react-router';

import {
  Container,
  Description,
  ExploreNowButton,
  HeadingContainerItem,
  ImageContainerItem,
  MainHeading,
  MainHeadingSpan,
} from './styles';

export function LandingPage(): JSX.Element {
  const navigate = useNavigate();

  const gotoSearchTours = () => {
    navigate(RoutePath.SearchTours);
  };

  return (
    <MainLayout showExploreNowButton>
      <PageContentContainer>
        <Container direction="row">
          <HeadingContainerItem>
            <MainHeading>
              <MainHeadingSpan>
                {AppString.Explore}
                <img src={Images.lineBelowText} />
              </MainHeadingSpan>
              {AppString.LandingMainHeading}
            </MainHeading>
            <Description>{AppString.LandingDescription}</Description>
            <ExploreNowButton onClick={gotoSearchTours}>
              {AppString.ExploreNow}
            </ExploreNowButton>
          </HeadingContainerItem>

          <ImageContainerItem>
            <img src={Images.landingPageImage} />
          </ImageContainerItem>
        </Container>
      </PageContentContainer>
    </MainLayout>
  );
}
