import {
  START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILED,
} from '../actionType/auth';

const initState = {
  user: null,
  isLogining: false,
  isLoggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return { ...state, isLogining: true };
    case LOGIN_SUCCESS:
      return {
        ...state, isLogining: false, user: action.user, isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return { ...state, isLogining: false };
    default:
      return state;
  }
};

export default authReducer;
