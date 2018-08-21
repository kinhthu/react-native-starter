// saga effects
// @flow
import { put, takeLatest } from 'redux-saga/effects';

import { GET_POST } from '../actionType/posts';
import { getPostsSuccess, getPostsFailed } from '../actions/posts';
import Api from './api';

function* getPosts() {
  try {
    const posts = yield Api.getPostsFromApi();
    yield put(getPostsSuccess(posts));
  } catch (err) {
    yield put(getPostsFailed(err));
  }
}

export default function* watchGetPosts() {
  yield takeLatest(GET_POST, getPosts);
}
