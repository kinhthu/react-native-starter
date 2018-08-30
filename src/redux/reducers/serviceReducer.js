import * as Service from '../actionType/service';

const initState = {
  list: [],

  isLoading: false,
  totalCost: 0,
};

const serviceReducer = (state = initState, action) => {
  switch (action.type) {
    case Service.START_GET_LIST_SERVICE:
      return { ...state, isLoading: true };
    case Service.GET_LIST_SERVICE_SUCCESS:
      return {
        ...state, isLoading: false, list: action.list,
      };
    case Service.GET_LIST_SERVICE_FAILED:
      return { ...state, isLoading: false };
    case Service.SELECT_SERVICE: {
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

export default serviceReducer;
