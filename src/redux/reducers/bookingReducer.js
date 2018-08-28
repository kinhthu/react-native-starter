import * as Booking from '../actionType/booking';

const initState = {
  list: [],

  isLoading: false,
  totalCost: 0,
};

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case Booking.START_GET_LIST_SERVICE:
      return { ...state, isLoading: true };
    case Booking.GET_LIST_SERVICE_SUCCESS:
      return {
        ...state, isLoading: false, list: action.list,
      };
    case Booking.GET_LIST_SERVICE_FAILED:
      return { ...state, isLoading: false };
    case Booking.BOOK_SERVICE: {
      let { totalCost } = state;
      const list = state.list.map((i) => {
        if (i.id === action.data.id) {
          totalCost = !i.booked ? totalCost + i.price : totalCost - i.price;
          const doctor = action.data.selectedDoctor;
          const appointment = action.data.selectedAppointment;
          return {
            ...i, booked: !i.booked, doctor, appointment,
          };
        }
        return i;
      });
      return { ...state, list, totalCost };
    }
    default:
      return state;
  }
};

export default bookingReducer;
