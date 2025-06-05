import { Schema, model } from 'mongoose';
import { ITourDocument } from './types';

export const TOUR_MODEL_NAME = 'Tour';

const tourSchema = new Schema<ITourDocument>({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
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
          type: String,
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
});

tourSchema.index({ name: 'text', description: 'text' });

export const Tour = model<ITourDocument>(TOUR_MODEL_NAME, tourSchema);
