import * as Doctor from '../actionType/doctor';

const initState = {
  list: [],
  isLoading: false,
};

const doctorReducer = (state = initState, action) => {
  switch (action.type) {
    case Doctor.START_GET_LIST_DOCTOR:
      return { ...state, isLoading: true };
    case Doctor.GET_LIST_DOCTOR_SUCCESS:
      return {
        ...state, isLoading: false, list: action.list,
      };
    case Doctor.GET_LIST_DOCTOR_FAILED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default doctorReducer;
