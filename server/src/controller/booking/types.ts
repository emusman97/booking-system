import { Request } from 'express';
import { z } from 'zod';
import { BookingSchema } from './schema';

export type BookingPayload = z.infer<typeof BookingSchema>;

export interface RequestWithBookingPayload extends Request {
  body: BookingPayload;
}
