import { ITourDocument } from '../tour';

export interface Phone {
  countryCode: string;
  number: string;
}

export interface IBooking {
  tour: ITourDocument['_id'];
  name: string;
  email: string;
  phone: Phone;
  numberOfAdults: number;
  numberOfChildren: number;
  paymentMethod: string;
}

export interface IBookingDocument extends IBooking, Document {}
