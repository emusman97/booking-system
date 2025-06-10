import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';
import { logger } from '../logger';
import { createFailureResponse } from '../response';
import { INVALID_PAYLOAD } from '../../constants';

export const createBodyValidatorMiddleware =
  <T extends AnyZodObject | ZodEffects<AnyZodObject>>(schema: T) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatationResult = schema.safeParse(req.body);

      if (validatationResult.success) {
        req.body = validatationResult.data;
        next();
        return;
      }

      res
        .status(400)
        .json(
          createFailureResponse(
            INVALID_PAYLOAD,
            validatationResult.error.errors
          )
        );
    } catch (error) {
      logger.error(`Unable to parse schema: ${error}`);
      res.status(500).json(createFailureResponse());
    }
  };
