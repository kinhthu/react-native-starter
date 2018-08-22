import {
  START_GET_LIST_SERVICE, GET_LIST_SERVICE_FAILED, GET_LIST_SERVICE_SUCCESS,
} from '../actionType/booking';

const initState = {
  list: [],
  isLoading: false,
};

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case START_GET_LIST_SERVICE:
      return { ...state, isLoading: true };
    case GET_LIST_SERVICE_SUCCESS:
      return {
        ...state, isLoading: false, list: action.list,
      };
    case GET_LIST_SERVICE_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default bookingReducer;
