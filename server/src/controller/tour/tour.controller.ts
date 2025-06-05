import { Response } from 'express';
import {
  createFailureResponse,
  createSuccessResponse,
  logger,
} from '../../utils';
import { Tour } from '../../models';

export async function getAllTours(_, res: Response) {
  try {
    const tours = await Tour.find({}).limit(10);

    res.status(200).json(createSuccessResponse(tours));
  } catch (error) {
    logger.error(`Error getting all tours: ${error}`);
    res.status(500).json(createFailureResponse());
  }
}
