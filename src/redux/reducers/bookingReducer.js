import * as Booking from '../actionType/booking';

const initState = {
  bookedList: [],
  isLoading: false,
  message: '',
  error: '',
};

const doctorReducer = (state = initState, action) => {
  switch (action.type) {
    case Booking.START_BOOKING:
      return { ...state, isLoading: true };
    case Booking.BOOKING_SUCCESS:
      return {
        ...state, isLoading: false, message: action.message,
      };
    case Booking.BOOKING_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case Booking.CLEAR_MESSAGE:
      return { ...state, error: '', message: '' };
    case Booking.START_GET_BOOKED:
      return { ...state, isLoading: true };
    case Booking.GET_BOOKED_SUCCESS:
      return {
        ...state, isLoading: false, bookedList: action.list,
      };
    case Booking.GET_BOOKED_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case Booking.START_DELETE_BOOKED:
      return { ...state, isLoading: true };
    case Booking.DELETE_BOOKED_SUCCESS:
      return {
        ...state, isLoading: false, message: action.message,
      };
    case Booking.DELETE_BOOKED_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default doctorReducer;
