import {
  GET_POST, GET_POST_BY_ID, GET_POST_SUCCESS, GET_POST_FAILED,
} from './actionType';

export const getPosts = () => ({ type: GET_POST });
export const getPostsSuccess = posts => ({ type: GET_POST_SUCCESS, posts });
export const getPostsFailed = error => ({ type: GET_POST_FAILED, error });

export const getPostById = id => ({ type: GET_POST_BY_ID, id });
