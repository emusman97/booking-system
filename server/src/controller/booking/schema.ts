import { isValidObjectId } from 'mongoose';
import { z } from 'zod';
import {
  COUNTRY_CODE_REQUIRED,
  INVALID_EMAIL,
  INVALID_TOUR_ID,
  NAME_IS_REQUIRED,
  NUMBER_OF_ADULTS_REQUIRED,
  NUMBER_OF_CHILDREN_REQUIRED,
  PAYMENT_METHOD_REQUIRED,
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
    numberOfAdults: z.number().min(0, NUMBER_OF_ADULTS_REQUIRED),
    numberOfChildren: z.number().min(0, NUMBER_OF_CHILDREN_REQUIRED),
    paymentMethod: z.string().min(1, PAYMENT_METHOD_REQUIRED),
  })
  .strict();
