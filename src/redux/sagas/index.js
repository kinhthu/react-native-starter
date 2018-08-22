import { fork, all } from 'redux-saga/effects';

import watchGetPosts from './postsSaga';
import watchLogin from './authSaga';
import watchGetListService from './bookingSaga';

export default function* rootSaga() {
  yield all([
    fork(watchGetPosts),
    fork(watchLogin),
    fork(watchGetListService),
  ]);
}
