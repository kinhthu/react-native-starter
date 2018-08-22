import {
  START_GET_LIST_SERVICE, GET_LIST_SERVICE, GET_LIST_SERVICE_SUCCESS, GET_LIST_SERVICE_FAILED,
} from '../actionType/booking';

export const startGetListService = () => ({ type: START_GET_LIST_SERVICE });
export const getListService = () => ({ type: GET_LIST_SERVICE });
export const getListServiceSuccess = list => ({ type: GET_LIST_SERVICE_SUCCESS, list });
export const getListServiceFailed = error => ({ type: GET_LIST_SERVICE_FAILED, error });
