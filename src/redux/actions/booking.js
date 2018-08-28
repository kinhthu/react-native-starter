import * as Booking from '../actionType/booking';

export const startGetListService = () => ({ type: Booking.START_GET_LIST_SERVICE });
export const getListService = () => ({ type: Booking.GET_LIST_SERVICE });
export const getListServiceSuccess = list => ({ type: Booking.GET_LIST_SERVICE_SUCCESS, list });
export const getListServiceFailed = error => ({ type: Booking.GET_LIST_SERVICE_FAILED, error });
export const bookService = data => ({ type: Booking.BOOK_SERVICE, data });
