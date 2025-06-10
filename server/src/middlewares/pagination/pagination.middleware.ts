import { NextFunction, Response } from 'express';
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

export const paginationMiddleware = (
  req: RequestWithPagination,
  res: Response,
  next: NextFunction
) => {
  const page = safeParseNumber(req.query.page as string, DEFAULT_STARTING_PAGE);
  const limit = Math.min(
    safeParseNumber(req.query.limit as string, DEFAULT_RESPONSE_LIMIT),
    MAX_RESPONSE_LIMIT
  );

  if (
    !Number.isInteger(page) ||
    !Number.isInteger(limit) ||
    page < 1 ||
    limit < 1
  ) {
    res
      .status(400)
      .json(createFailureResponse(INVALID_PAGINATION_PARAMS_ERROR));
    return;
  }

  const skip = calculateSkip(page, limit);

  req.pagination = { page, limit, skip };

  next();
};
