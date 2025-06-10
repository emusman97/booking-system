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
  UDPATE_FIELD_REQUIRED,
} from './constants';

const PhoneSchema = z.object({
  countryCode: z.string().min(1, COUNTRY_CODE_REQUIRED),
  number: z.string().min(1, PHONE_NUMBER_REQUIRED),
});

const BaseBookingSchema = z.object({
  name: z.string().min(1, NAME_IS_REQUIRED),
  email: z.string().email(INVALID_EMAIL),
  phone: PhoneSchema,
  numberOfAdults: z.number().min(0, NUMBER_OF_ADULTS_REQUIRED),
  numberOfChildren: z.number().min(0, NUMBER_OF_CHILDREN_REQUIRED),
  paymentMethod: z.string().min(1, PAYMENT_METHOD_REQUIRED),
});

export const BookingSchema = BaseBookingSchema.extend({
  tour: z.string().refine((val) => isValidObjectId(val), INVALID_TOUR_ID),
}).strict();

export const UpdateBookingSchema = BaseBookingSchema.extend({})
  .partial()
  .strict()
  .refine((data) => Object.keys(data).length > 0, UDPATE_FIELD_REQUIRED);
