import * as Booking from '../actionType/booking';

const initState = {
  isLoading: false,
  message: '',
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
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default doctorReducer;
