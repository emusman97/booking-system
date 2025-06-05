import { Router } from 'express';
import { getAllTours } from '../../controller';

const router = Router();

router.get('/', getAllTours);

export { router as tourRouter };
