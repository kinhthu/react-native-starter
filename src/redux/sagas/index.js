import { fork } from 'redux-saga/effects';

import watchGetPosts from './postsSaga';

export default function* rootSaga() {
  yield fork(watchGetPosts);
}
