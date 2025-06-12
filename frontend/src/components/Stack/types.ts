import type { BaseCustomStyledProps } from '@/types';

type StackDirection = 'column' | 'row';

export interface StackProps extends BaseCustomStyledProps {
  direction?: StackDirection;
}
