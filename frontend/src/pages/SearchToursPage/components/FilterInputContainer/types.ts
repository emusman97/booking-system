import type { ReactNode } from 'react';

export type FilterInputType = 'location' | 'date' | 'price';

export interface FilterInputContainerProps {
  type: FilterInputType;
  showRightDivider?: boolean;
  renderInput?: (type: FilterInputType) => ReactNode;
}
