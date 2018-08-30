// saga effects
// @flow
import { put, takeLatest } from 'redux-saga/effects';

import { START_GET_LIST_APPOINTMENT } from '../actionType/appointment';
import {
  getListAppointmentFailed, getListAppointmentSuccess,
} from '../actions/appointment';
import Api from './api';

function* getAppointments() {
  try {
    const appointments = yield Api.getAppointments();
    yield put(getListAppointmentSuccess(appointments));
  } catch (err) {
    yield put(getListAppointmentFailed(err));
  }
}

export default function* watchGetListAppointment() {
  yield takeLatest(START_GET_LIST_APPOINTMENT, getAppointments);
}
