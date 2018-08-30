// saga effects
// @flow
import { put, takeLatest } from 'redux-saga/effects';

import { START_GET_LIST_DOCTOR } from '../actionType/doctor';
import {
  getListDoctorFailed, getListDoctorSuccess,
} from '../actions/doctor';
import Api from './api';

function* getDoctors() {
  try {
    const doctors = yield Api.getDoctors();
    yield put(getListDoctorSuccess(doctors));
  } catch (err) {
    yield put(getListDoctorFailed(err));
  }
}

export default function* watchGetListDoctor() {
  yield takeLatest(START_GET_LIST_DOCTOR, getDoctors);
}
