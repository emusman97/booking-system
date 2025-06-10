import { isValidObjectId } from 'mongoose';
import { z } from 'zod';
import {
  COUNTRY_CODE_REQUIRED,
  INVALID_EMAIL,
  INVALID_TOUR_ID,
  NAME_IS_REQUIRED,
  PHONE_NUMBER_REQUIRED,
} from './constants';

export const BookingSchema = z
  .object({
    tour: z.string().refine((val) => isValidObjectId(val), INVALID_TOUR_ID),
    name: z.string().min(1, NAME_IS_REQUIRED),
    email: z.string().email(INVALID_EMAIL),
    phone: z.object({
      countryCode: z.string().min(1, COUNTRY_CODE_REQUIRED),
      number: z.string().min(1, PHONE_NUMBER_REQUIRED),
    }),
  })
  .strict();
