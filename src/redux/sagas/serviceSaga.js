// saga effects
// @flow
import { put, takeLatest } from 'redux-saga/effects';

import { START_GET_LIST_SERVICE } from '../actionType/service';
import {
  getListServiceSuccess, getListServiceFailed,
} from '../actions/service';
import Api from './api';

function* getServices() {
  try {
    const services = yield Api.getServices();
    yield put(getListServiceSuccess(services));
  } catch (err) {
    yield put(getListServiceFailed(err));
  }
}

export default function* watchGetListService() {
  yield takeLatest(START_GET_LIST_SERVICE, getServices);
}
