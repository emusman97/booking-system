import { type JSX } from 'react';

import { Images } from '@/assets';
import { MainLayout, PageContentContainer } from '@/components';
import { AppString } from '@/constants';

import {
  Container,
  ContainerItem,
  Description,
  ExploreNowButton,
  HeadingContainerItem,
  MainHeading,
  MainHeadingSpan,
} from './styles';

export function LandingPage(): JSX.Element {
  return (
    <MainLayout>
      <PageContentContainer>
        <Container>
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
          <ContainerItem></ContainerItem>
        </Container>
      </PageContentContainer>
    </MainLayout>
  );
}
