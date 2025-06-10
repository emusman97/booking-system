import { z } from 'zod';
import { RequestWithPagination } from '../../types';
import { TourSearchQuerySchema } from './tourSearchQuery.middleware';

export type TourSearchQuery = z.infer<typeof TourSearchQuerySchema>;

export interface RequestWithTourSearchQuery extends RequestWithPagination {
  searchQuery?: TourSearchQuery;
}
