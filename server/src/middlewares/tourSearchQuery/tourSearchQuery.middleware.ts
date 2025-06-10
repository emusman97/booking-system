import { NextFunction, Response } from 'express';
import { z } from 'zod';
import { INVALID_SEARCH_QUERY_PARAMS } from '../../constants';
import { createFailureResponse, logger } from '../../utils';
import { RequestWithTourSearchQuery } from './types';

export const TourSearchQuerySchema = z
  .object({
    city: z.string().optional(),
    location: z.string().optional(),
    start_date: z.string().datetime({ offset: true }).optional(),
    end_date: z.string().datetime({ offset: true }).optional(),
    min_price: z
      .string()
      .regex(/^\d+$/, 'min_price must be a numeric string')
      .optional(),
    max_price: z
      .string()
      .regex(/^\d+$/, 'max_price must be a numeric string')
      .optional(),
  })
  .strict();

export const tourSearchQueryMiddleware = (
  req: RequestWithTourSearchQuery,
  res: Response,
  next: NextFunction
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { page, limit, ...restQuery } = req.query;
    const result = TourSearchQuerySchema.safeParse(restQuery);

    if (result.error) {
      res
        .status(400)
        .json(
          createFailureResponse(
            INVALID_SEARCH_QUERY_PARAMS,
            result.error.errors
          )
        );
      return;
    }

    req.searchQuery = result.data;

    next();
  } catch (error) {
    logger.error(`Unable to validate search quer: ${error}`);
    res.status(500).json(createFailureResponse());
  }
};
