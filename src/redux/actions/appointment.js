import * as Appointment from '../actionType/appointment';

export const startGetListAppointment = () => ({ type: Appointment.START_GET_LIST_APPOINTMENT });
export const getListAppointmentSuccess = list => ({ type: Appointment.GET_LIST_APPOINTMENT_SUCCESS, list });
export const getListAppointmentFailed = error => ({ type: Appointment.GET_LIST_APPOINTMENT_FAILED, error });
