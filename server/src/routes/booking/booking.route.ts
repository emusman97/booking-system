import { Router } from 'express';
import { paginationMiddleware } from '../../middlewares';
import { getAllBookings } from '../../controller';

const router = Router();

router.get('/', paginationMiddleware, getAllBookings);

export { router as bookingRouter };
