import { Request } from 'express';

export interface Pagination {
  page: number;
  limit: number;
  skip: number;
}

export interface RequestWithPagination extends Request {
  pagination?: Pagination;
}
