import { Document } from 'mongoose';

export type Facilities = string[];
export type AdditionalImages = string[];

export interface IItinerary {
  title: string;
  date: Date;
  schedule: string[];
}
export type ItinerarySchedule = IItinerary[];

export interface ITour {
  name: string;
  city: string;
  location: string;
  description: string;
  price: number;
  duration: string;
  startDate: Date;
  endDate: Date;
  coverImage: string;
  additionalImages: AdditionalImages;
  departureLocation: string;
  returnDetails: string;
  facilities: Facilities;
  itinerarySchedule: ItinerarySchedule;
}

export interface ITourDocument extends ITour, Document {}
