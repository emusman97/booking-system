import { AppString } from '@/constants';
import type { SelectItem } from '@/types';
import type { GroupBase, OptionsOrGroups } from 'react-select';

export const NonePriceRangeValue: SelectItem['value'] = '';

export const PriceRanges: OptionsOrGroups<SelectItem, GroupBase<SelectItem>> = [
  { label: AppString.ChooseHere, value: NonePriceRangeValue },
  { label: '$50 - $200', value: '50-200' },
  { label: '$200 - $400', value: '200-400' },
  { label: '$400 - $500', value: '400-500' },
  { label: '$500 - $750', value: '500-750' },
  { label: '$750 - $1000', value: '750-1000' },
  { label: '$1000 Above', value: '1000-above' },
] as const;
