import { type JSX } from 'react';

import { Images } from '@/assets';
import { MainLayout, PageContentContainer } from '@/components';
import { AppString } from '@/constants';

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
  return (
    <MainLayout>
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
            <ExploreNowButton>{AppString.ExploreNow}</ExploreNowButton>
          </HeadingContainerItem>

          <ImageContainerItem>
            <img src={Images.landingPageImage} />
          </ImageContainerItem>
        </Container>
      </PageContentContainer>
    </MainLayout>
  );
}
