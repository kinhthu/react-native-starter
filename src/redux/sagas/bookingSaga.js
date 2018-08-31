// saga effects
// @flow
import { put, takeLatest } from 'redux-saga/effects';

import { START_BOOKING, START_GET_BOOKED, START_DELETE_BOOKED } from '../actionType/booking';
import {
  bookingFailed, bookingSuccess, getBookedFailed, getBookedSuccess, startGetBooked, deleteBookedSuccess, deleteBookedFailed,
} from '../actions/booking';
import { startGetListService } from '../actions/service';
import Api from './api';

function* book(action) {
  try {
    yield Api.bookingService({ username: 'logixdev', bookingList: action.data });
    yield put(bookingSuccess('Booking Successful!'));
    yield put(startGetListService());
    yield put(startGetBooked());
  } catch (err) {
    yield put(bookingFailed(err));
  }
}

function* getBooked() {
  try {
    const result = yield Api.getBookedServices('logixdev');
    yield put(getBookedSuccess(result));
  } catch (err) {
    yield put(getBookedFailed(err));
  }
}

function* deleteBooked(action) {
  try {
    const result = yield Api.deleteBooked(action.id);
    yield put(deleteBookedSuccess(result));
    yield put(startGetBooked());
  } catch (err) {
    yield put(deleteBookedFailed(err));
  }
}

export function* watchGetBooking() {
  yield takeLatest(START_BOOKING, book);
}

export function* watchGetBookedList() {
  yield takeLatest(START_GET_BOOKED, getBooked);
}

export function* watchDeleteBooked() {
  yield takeLatest(START_DELETE_BOOKED, deleteBooked);
}
