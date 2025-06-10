import { Router } from 'express';
import { getAllTours, searchTours } from '../../controller';
import {
  paginationMiddleware,
  tourSearchQueryMiddleware,
} from '../../middlewares';

const router = Router();

router.get('/', paginationMiddleware, getAllTours);
router.get(
  '/search',
  paginationMiddleware,
  tourSearchQueryMiddleware,
  searchTours
);

export { router as tourRouter };
