import { fork, all } from 'redux-saga/effects';

import watchLogin from './authSaga';
import watchGetListService from './serviceSaga';
import watchGetListDoctor from './doctorSaga';
import watchGetListAppointment from './appointmentSaga';
import watchGetBooking from './bookingSaga';

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchGetListService),
    fork(watchGetListDoctor),
    fork(watchGetListAppointment),
    fork(watchGetBooking),
  ]);
}
