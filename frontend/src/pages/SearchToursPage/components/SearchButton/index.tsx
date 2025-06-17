import type { JSX } from 'react';

import { Images } from '@/assets';

import { BaseButton } from './styles';

export function SearchButton(): JSX.Element {
  return (
    <BaseButton>
      <img src={Images.searchIcon} alt="Search icon" />
    </BaseButton>
  );
}
