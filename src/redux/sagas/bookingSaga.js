// saga effects
// @flow
import { put, takeLatest } from 'redux-saga/effects';

import { START_GET_LIST_SERVICE } from '../actionType/booking';
import { getListService, getListServiceSuccess, getListServiceFailed } from '../actions/booking';
import List from '../../sampleData/serviceItem.json';
// import Api from './api';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* getList() {
  try {
    console.log('start get list');
    yield put(getListService());
    yield delay(1000);
    console.log('done get list');
    yield put(getListServiceSuccess(List));
    // const posts = yield Api.getPostsFromApi();
  //   yield put(getPostsSuccess(posts));
  } catch (err) {
    yield put(getListServiceFailed(err));
  }
}

export default function* watchGetListService() {
  yield takeLatest(START_GET_LIST_SERVICE, getList);
}
