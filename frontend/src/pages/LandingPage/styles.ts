import { PrimaryButton, Stack } from '@/components';
import { theme } from '@/theme';
import styled from 'styled-components';

export const Container = styled(Stack)`
  padding-top: ${theme.spacing['21']};
`;

export const ContainerItem = styled(Stack)`
  width: 50%;
`;

export const HeadingContainerItem = styled(ContainerItem)`
  gap: ${(props) => props.theme.spacing['4']};
  align-items: flex-start;
`;

export const MainHeading = styled.h1`
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
  font-size: ${(props) => props.theme.typography.fontSize['6xl']};
  margin: 0;
`;

export const MainHeadingSpan = styled.span`
  position: relative;
  z-index: 1;

  & img {
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.1rem;
    height: 1rem;
    width: 100%;
    object-fit: fill;
  }
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.lg};
  font-size: ${(props) => props.theme.typography.fontSize['2xl']};
`;

export const ExploreNowButton = styled(PrimaryButton)`
  margin-top: ${(props) => props.theme.spacing['6']};
`;
