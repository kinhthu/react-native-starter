import * as Booking from '../actionType/booking';

export const startBooking = data => ({ type: Booking.START_BOOKING, data });
export const bookingSuccess = message => ({ type: Booking.BOOKING_SUCCESS, message });
export const bookingFailed = error => ({ type: Booking.BOOKING_FAILED, error });

export const clearMessage = () => ({ type: Booking.CLEAR_MESSAGE });

export const startGetBooked = () => ({ type: Booking.START_GET_BOOKED });
export const getBookedSuccess = list => ({ type: Booking.GET_BOOKED_SUCCESS, list });
export const getBookedFailed = error => ({ type: Booking.GET_BOOKED_FAILED, error });

export const startDeleteBooked = id => ({ type: Booking.START_DELETE_BOOKED, id });
export const deleteBookedSuccess = message => ({ type: Booking.DELETE_BOOKED_SUCCESS, message });
export const deleteBookedFailed = error => ({ type: Booking.DELETE_BOOKED_FAILED, error });
