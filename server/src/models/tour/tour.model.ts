import { Schema, model } from 'mongoose';
import { ITourDocument } from './types';
import { baseSchemaOptions } from '../config';

export const TOUR_MODEL_NAME = 'Tour';

const tourSchema = new Schema<ITourDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    additionalImages: {
      type: [String],
      required: true,
    },
    departureLocation: {
      type: String,
      required: true,
    },
    returnDetails: {
      type: String,
      required: true,
    },
    facilities: {
      type: [String],
      required: true,
    },
    itinerarySchedule: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          date: {
            type: Date,
            required: true,
          },
          schedule: {
            type: [String],
            required: true,
          },
        },
      ],
      required: true,
    },
  },
  baseSchemaOptions()
);

tourSchema.index({ name: 'text', description: 'text' });

export const Tour = model<ITourDocument>(TOUR_MODEL_NAME, tourSchema);
