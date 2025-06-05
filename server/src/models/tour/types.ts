import { Document } from 'mongoose';

export type Facilities = string[];
export type AdditionalImages = string[];

export interface IItinerary {
  title: string;
  date: string;
  schedule: string[];
}
export type ItinerarySchedule = IItinerary[];

export interface ITour {
  name: string;
  city: string;
  description: string;
  price: string;
  duration: string;
  coverImage: string;
  additionalImages: AdditionalImages;
  departureLocation: string;
  returnDetails: string;
  facilities: Facilities;
  itinerarySchedule: ItinerarySchedule;
}

export interface ITourDocument extends ITour, Document {}
