import * as Booking from '../actionType/booking';

export const startBooking = data => ({ type: Booking.START_BOOKING, data });
export const bookingSuccess = message => ({ type: Booking.BOOKING_SUCCESS, message });
export const bookingFailed = error => ({ type: Booking.BOOKING_FAILED, error });
