import * as Service from '../actionType/service';

export const startGetListService = () => ({ type: Service.START_GET_LIST_SERVICE });
export const getListServiceSuccess = list => ({ type: Service.GET_LIST_SERVICE_SUCCESS, list });
export const getListServiceFailed = error => ({ type: Service.GET_LIST_SERVICE_FAILED, error });

export const selectService = data => ({ type: Service.SELECT_SERVICE, data });
