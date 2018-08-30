import * as Appointment from '../actionType/appointment';

const initState = {
  list: [],
  isLoading: false,
};

const appointmentReducer = (state = initState, action) => {
  switch (action.type) {
    case Appointment.START_GET_LIST_APPOINTMENT:
      return { ...state, isLoading: true };
    case Appointment.GET_LIST_APPOINTMENT_SUCCESS:
      return {
        ...state, isLoading: false, list: action.list,
      };
    case Appointment.GET_LIST_APPOINTMENT_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default appointmentReducer;
