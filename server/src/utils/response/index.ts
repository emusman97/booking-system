import { ZodIssue } from 'zod';
import {
  GENERIC_ERROR_MESSAGE,
  GENERIC_SUCCESS_MESSAGE,
} from '../../constants';
import {
  CreatePaginatedResponseParams,
  FailureResonse,
  PaginatedSuccessResponse,
  SuccessResponse,
} from './types';

export const createSuccessResponse = <D>(
  data?: D,
  message = GENERIC_SUCCESS_MESSAGE
): SuccessResponse<D> => ({ success: true, data, message });

export const createPaginatedSuccessResponse = <D>({
  data,
  message = GENERIC_SUCCESS_MESSAGE,
  ...paginationMeta
}: CreatePaginatedResponseParams<D>): PaginatedSuccessResponse<D> => ({
  ...createSuccessResponse(data, message),
  ...paginationMeta,
});

export const createFailureResponse = (
  message = GENERIC_ERROR_MESSAGE,
  details?: ZodIssue[]
): FailureResonse => ({ success: false, message, data: null, details });
