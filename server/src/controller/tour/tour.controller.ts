import { Response } from 'express';
import { Tour } from '../../models';
import { RequestWithPagination } from '../../types';
import {
  calculateTotalPages,
  createFailureResponse,
  createPaginatedSuccessResponse,
  logger,
} from '../../utils';
import { RequestWithTourSearchQuery } from '../../middlewares/tourSearchQuery/types';

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

    console.log(req.searchQuery);

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
