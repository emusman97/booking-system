import { Router } from 'express';
import { getAllTours } from '../../controller';
import { paginationMiddleware } from '../../middlewares';

const router = Router();

router.get('/', paginationMiddleware, getAllTours);

export { router as tourRouter };
