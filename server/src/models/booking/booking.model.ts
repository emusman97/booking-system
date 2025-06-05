import { model, Schema } from 'mongoose';
import { IBookingDocument } from './types';
import { TOUR_MODEL_NAME } from '../tour';

const BOOKING_MODEL_NAME = 'Booking';

const bookingSchema = new Schema<IBookingDocument>({
  tour: {
    type: Schema.Types.ObjectId,
    ref: TOUR_MODEL_NAME,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: {
      countryCode: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
});

export const Booking = model<IBookingDocument>(
  BOOKING_MODEL_NAME,
  bookingSchema
);
