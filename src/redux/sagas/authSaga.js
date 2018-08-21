// saga effects
// @flow
import { put, takeLatest } from 'redux-saga/effects';

import { START_LOGIN } from '../actionType/auth';
import { logining, loginSuccess, loginFailed } from '../actions/auth';
// import Api from './api';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* login() {
  try {
    yield put(logining());
    console.log('logining');
    yield delay(1000);
    console.log('logged');

    yield put(loginSuccess(null));
    // const posts = yield Api.getPostsFromApi();
  //   yield put(getPostsSuccess(posts));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

export default function* watchLogin() {
  yield takeLatest(START_LOGIN, login);
}
