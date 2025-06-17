import type { HTMLAttributes } from 'react';

export interface ChooseValueButtonProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  placeholder: string;
}
