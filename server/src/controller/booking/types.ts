import { Request } from 'express';
import { z } from 'zod';
import { BookingSchema, UpdateBookingSchema } from './schema';

export type BookingPayload = z.infer<typeof BookingSchema>;
export type UpdayeBookingPayload = z.infer<typeof UpdateBookingSchema>;

export interface RequestWithBookingPayload extends Request {
  body: BookingPayload;
}
export interface RequestWithUpdateBookingPayload extends Request {
  body: UpdayeBookingPayload;
}
