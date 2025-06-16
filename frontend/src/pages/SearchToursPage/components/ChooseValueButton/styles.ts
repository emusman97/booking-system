import { Stack } from '@/components';
import styled, { css } from 'styled-components';

export const Container = /* prettier-ignore */ styled(Stack)<{hasValue: boolean}>`
  gap: ${(props) => props.theme.spacing['2']};
  align-items: center;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  & p {
    color: ${(props) => props.theme.colors.text.muted};
    font-size: ${(props) => props.theme.typography.fontSize.sm};
    font-weight: ${(props) => props.theme.typography.fontWeight.normal};

    ${(props) =>
      props.hasValue &&
      css`
        color: ${(props) => props.theme.colors.text.primary};
        font-weight: ${(props) => props.theme.typography.fontWeight.normal};
      `}
  }

  & img {
    height: 0.8rem;
    width: 0.8rem;
    object-fit: contain;
  }
`;
