import { Router } from 'express';
import { paginationMiddleware } from '../../middlewares';
import {
  BookingSchema,
  createBooking,
  deleteBooking,
  getAllBookings,
  updateBooking,
  UpdateBookingSchema,
} from '../../controller';
import { createBodyValidatorMiddleware } from '../../utils';

const router = Router();

router.get('/', paginationMiddleware, getAllBookings);
router.post('/', createBodyValidatorMiddleware(BookingSchema), createBooking);
router.patch(
  '/:id',
  createBodyValidatorMiddleware(UpdateBookingSchema),
  updateBooking
);
router.delete('/:id', deleteBooking);

export { router as bookingRouter };
