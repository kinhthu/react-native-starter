// saga effects
// @flow
import { put, takeLatest } from 'redux-saga/effects';

import { START_BOOKING } from '../actionType/booking';
// import {
//   getListDoctorFailed, getListDoctorSuccess,
// } from '../actions/doctor';
import Api from './api';

function* book(action) {
  try {
    const result = yield Api.bookingService({ username: 'logixdev', ...action.data });
    yield console.log(result);
  } catch (err) {
    // yield put(getListDoctorFailed(err));
    console.log(err);
  }
}

export default function* watchGetBooking() {
  yield takeLatest(START_BOOKING, book);
}
