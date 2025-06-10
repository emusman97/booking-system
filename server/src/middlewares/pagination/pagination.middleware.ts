import { NextFunction, Response } from 'express';
import { z } from 'zod';
import {
  DEFAULT_RESPONSE_LIMIT,
  DEFAULT_STARTING_PAGE,
  INVALID_PAGINATION_PARAMS_ERROR,
  MAX_RESPONSE_LIMIT,
} from '../../constants';
import { RequestWithPagination } from '../../types';
import {
  calculateSkip,
  createFailureResponse,
  safeParseNumber,
} from '../../utils';

export const PaginationQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => {
      const parsed = safeParseNumber(val, DEFAULT_STARTING_PAGE);

      return Number.isInteger(parsed) && parsed >= 1
        ? parsed
        : DEFAULT_STARTING_PAGE;
    }),
  limit: z
    .string()
    .optional()
    .transform((val) => {
      const parsed = safeParseNumber(val, DEFAULT_RESPONSE_LIMIT);

      return Number.isInteger(parsed) && parsed >= 1
        ? Math.min(parsed, MAX_RESPONSE_LIMIT)
        : DEFAULT_RESPONSE_LIMIT;
    }),
});

export const paginationMiddleware = (
  req: RequestWithPagination,
  res: Response,
  next: NextFunction
) => {
  const result = PaginationQuerySchema.safeParse(req.query);

  if (result.error) {
    res
      .status(400)
      .json(
        createFailureResponse(
          INVALID_PAGINATION_PARAMS_ERROR,
          result.error.errors
        )
      );
    return;
  }

  const { page = DEFAULT_STARTING_PAGE, limit = DEFAULT_RESPONSE_LIMIT } =
    result.data;

  const skip = calculateSkip(page, limit);

  req.pagination = { page, limit, skip };

  next();
};
