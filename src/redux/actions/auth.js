import {
  LOGIN_SUCCESS, LOGIN_FAILED, START_LOGIN,
} from '../actionType/auth';

export const startLogin = () => ({ type: START_LOGIN });
export const loginSuccess = user => ({ type: LOGIN_SUCCESS, user });
export const loginFailed = error => ({ type: LOGIN_FAILED, error });
