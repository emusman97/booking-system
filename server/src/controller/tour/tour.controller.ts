import { Response } from 'express';
import { ITourDocument, Tour } from '../../models';
import { RequestWithPagination } from '../../types';
import {
  calculateTotalPages,
  createFailureResponse,
  createPaginatedSuccessResponse,
  logger,
  safeParseNumber,
} from '../../utils';
import { RequestWithTourSearchQuery } from '../../middlewares/tourSearchQuery/types';
import { FilterQuery } from 'mongoose';
import {
  INVALID_END_DATE,
  INVALID_MAX_PRICE,
  INVALID_MIN_PRICE,
  INVALID_START_DATE,
} from './constants';

export async function getAllTours(req: RequestWithPagination, res: Response) {
  try {
    const pagination = req.pagination;

    const tours = await Tour.find({})
      .skip(pagination.skip)
      .limit(pagination.limit);
    const totalItems = await Tour.countDocuments();

    res.status(200).json(
      createPaginatedSuccessResponse({
        data: tours,
        ...pagination,
        totalItems,
        totalPages: calculateTotalPages(totalItems, pagination.limit),
      })
    );
  } catch (error) {
    logger.error(`Error getting all tours: ${error}`);
    res.status(500).json(createFailureResponse());
  }
}

export async function searchTours(
  req: RequestWithTourSearchQuery,
  res: Response
) {
  try {
    const pagination = req.pagination;
    const { skip, limit } = pagination;
    const { city, location, start_date, end_date, min_price, max_price } =
      req.searchQuery;
    const query: FilterQuery<ITourDocument> = {};

    if (city) {
      query.city = { $regex: city, $options: 'i' };
    }
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    if (start_date || end_date) {
      query.startDate = {};

      if (start_date) {
        const startDate = new Date(start_date);
        if (isNaN(startDate.getTime())) {
          res.status(400).json(createFailureResponse(INVALID_START_DATE));
          return;
        }
        query.startDate.$gte = startDate;
      }

      query.endDate = {};
      if (end_date) {
        const endDate = new Date(end_date);
        if (isNaN(endDate.getTime())) {
          res.status(400).json(createFailureResponse(INVALID_END_DATE));
          return;
        }
        query.endDate.$lte = endDate;
      }
    }
    if (min_price && max_price) {
      query.price = {};

      if (min_price) {
        const minPrice = safeParseNumber(min_price);
        if (minPrice === -1) {
          res.status(400).json(createFailureResponse(INVALID_MIN_PRICE));
          return;
        }

        query.price.$gte = minPrice;
      }
      if (max_price) {
        const maxPrice = safeParseNumber(max_price);
        if (maxPrice === -1) {
          res.status(400).json(createFailureResponse(INVALID_MAX_PRICE));
          return;
        }

        query.price.$lte = maxPrice;
      }
    }

    const totalItems = await Tour.countDocuments(query).exec();
    const totalPages = calculateTotalPages(totalItems, limit);
    const tours = await Tour.find(query).skip(skip).limit(limit).exec();

    res.status(200).json(
      createPaginatedSuccessResponse({
        data: tours,
        ...pagination,
        totalItems,
        totalPages,
      })
    );
  } catch (error) {
    logger.error(`Error getting all tours: ${error}`);
    res.status(500).json(createFailureResponse());
  }
}
