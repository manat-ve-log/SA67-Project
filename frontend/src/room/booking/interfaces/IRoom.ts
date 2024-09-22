import { BookingInterface } from './IBooking';
import { RoomTypesInterface } from './IRoomTypes';

export interface RoomInterface {
  ID?: number;
  Status?: string;
  Address?: string;
  Bookings?: BookingInterface[];
  RoomTypesID?: number;
  RoomTypes?: RoomTypesInterface;
}
