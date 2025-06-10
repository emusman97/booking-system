import { ZodIssue } from 'zod';

interface BaseResponse<D> {
  success: boolean;
  message?: string;
  data?: D;
}

export interface SuccessResponse<D> extends BaseResponse<D> {
  success: true;
}

interface PaginationMeta {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}
export interface PaginatedSuccessResponse<D>
  extends SuccessResponse<D>,
    PaginationMeta {}

export interface FailureResonse extends BaseResponse<null> {
  success: false;
  details?: ZodIssue[];
}

export interface CreatePaginatedResponseParams<D> extends PaginationMeta {
  data?: D;
  message?: string;
}
