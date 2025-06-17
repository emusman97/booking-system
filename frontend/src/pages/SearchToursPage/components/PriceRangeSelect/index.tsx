import type { JSX } from 'react';

import { Images } from '@/assets';
import { AppString } from '@/constants';
import type { SelectItem } from '@/types';
import Select, { type SingleValue } from 'react-select';
import { useTheme } from 'styled-components';

import { NonePriceRangeValue, PriceRanges } from '../../constants';
import { PriceRangeImg } from './styles';
import type { PriceRangeSelectProps } from './types';

export function PriceRangeSelect({
  value,
  onValueChange,
}: PriceRangeSelectProps): JSX.Element {
  const theme = useTheme();

  const handleSelectionChange = (newValue: SingleValue<SelectItem>) => {
    onValueChange(newValue?.value ?? '');
  };

  return (
    <Select
      isSearchable={false}
      options={PriceRanges}
      placeholder={AppString.ChooseHere}
      styles={{
        container: (base) => ({
          ...base,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }),
        control: () => ({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: theme.spacing['2'],
          border: 0,

          opacity: 1,
          transition: 'opacity 0.3 ease',

          ':hover': {
            cursor: 'pointer',
            opacity: 0.7,
          },
        }),
        placeholder: (base) => ({
          ...base,
          display: 'flex',
          fontSize: theme.typography.fontSize.sm,
          margin: 0,
        }),
        singleValue: (base) => ({
          ...base,
          fontSize: theme.typography.fontSize.sm,
          margin: 0,
        }),
        option: (base, state) => ({
          ...base,
          background:
            state.isFocused || state.isSelected ? theme.colors.primary : '',
        }),
        valueContainer: () => ({
          display: 'flex',
          alignItems: 'center',
          padding: 0,
          margin: 0,
        }),
        indicatorsContainer: () => ({ display: 'flex' }),
      }}
      components={{
        DropdownIndicator: () =>
          value === NonePriceRangeValue ? (
            <PriceRangeImg src={Images.chevronDownIcon} />
          ) : (
            <PriceRangeImg src={Images.chevronUpIcon} />
          ),
        IndicatorSeparator: null,
      }}
      onChange={handleSelectionChange}
    />
  );
}
