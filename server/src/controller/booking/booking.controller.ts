import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { Booking, Tour } from '../../models';
import { RequestWithPagination } from '../../types';
import {
  calculateTotalPages,
  createFailureResponse,
  createPaginatedSuccessResponse,
  createSuccessResponse,
  logger,
} from '../../utils';
import {
  BOOKING_NOT_FOUND,
  INVALID_BOOKING_ID,
  TOUR_NOT_FOUND,
} from './constants';
import {
  RequestWithBookingPayload,
  RequestWithUpdateBookingPayload,
} from './types';

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

export async function createBooking(
  req: RequestWithBookingPayload,
  res: Response
) {
  try {
    const data = req.body;

    const tourExists = await Tour.exists({ _id: data.tour });

    if (!tourExists) {
      res.status(404).json(createFailureResponse(TOUR_NOT_FOUND));
      return;
    }

    const booking = await Booking.create(data);

    res.status(201).json(createSuccessResponse(booking));
  } catch (error) {
    logger.error(`Error creating booking: ${error}`);
    res.status(500).json(createFailureResponse());
  }
}

export async function updateBooking(
  req: RequestWithUpdateBookingPayload,
  res: Response
) {
  try {
    const { id } = req.params;

    if (isValidObjectId(id) === false) {
      res.status(400).json(createFailureResponse(INVALID_BOOKING_ID));
      return;
    }

    const result = await Booking.findByIdAndUpdate(id, req.body).exec();

    if (!result) {
      res.status(404).json(createFailureResponse(BOOKING_NOT_FOUND));
      return;
    }

    res.status(200).json(createSuccessResponse());
  } catch (error) {
    logger.error(`Error deleting booking: ${error}`);
    res.status(500).json(createFailureResponse());
  }
}

export async function deleteBooking(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (isValidObjectId(id) === false) {
      res.status(400).json(createFailureResponse(INVALID_BOOKING_ID));
      return;
    }

    const result = await Booking.findByIdAndDelete(id).exec();

    if (!result) {
      res.status(404).json(createFailureResponse(BOOKING_NOT_FOUND));
      return;
    }

    res.status(200).json(createSuccessResponse());
  } catch (error) {
    logger.error(`Error deleting booking: ${error}`);
    res.status(500).json(createFailureResponse());
  }
}
