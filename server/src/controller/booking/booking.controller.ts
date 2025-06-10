import { Response } from 'express';
import { RequestWithPagination } from '../../types';
import { Booking } from '../../models';
import {
  calculateTotalPages,
  createFailureResponse,
  createPaginatedSuccessResponse,
  logger,
} from '../../utils';

export async function getAllBookings(
  req: RequestWithPagination,
  res: Response
) {
  try {
    const pagination = req.pagination;

    const bookings = await Booking.find({})
      .skip(pagination.skip)
      .limit(pagination.limit);
    const totalItems = await Booking.countDocuments();

    res.status(200).json(
      createPaginatedSuccessResponse({
        data: bookings,
        ...pagination,
        totalItems,
        totalPages: calculateTotalPages(totalItems, pagination.limit),
      })
    );
  } catch (error) {
    logger.error(`Error getting all bookings: ${error}`);
    res.status(500).json(createFailureResponse());
  }
}
