import * as Doctor from '../actionType/doctor';

export const startGetListDoctor = () => ({ type: Doctor.START_GET_LIST_DOCTOR });
export const getListDoctorSuccess = list => ({ type: Doctor.GET_LIST_DOCTOR_SUCCESS, list });
export const getListDoctorFailed = error => ({ type: Doctor.GET_LIST_DOCTOR_FAILED, error });
