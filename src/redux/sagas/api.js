import * as ApiFetch from './util';

/* eslint no-underscore-dangle: 0 */
const API_URL = {
  getAllService: 'http://172.16.0.113:3000/api/services',
  getAllDoctor: 'http://172.16.0.113:3000/api/doctors',
  getAllAppointment: 'http://172.16.0.113:3000/api/appointments',
  bookService: 'http://172.16.0.113:3000/api/bookings/book',
  getBookedServices: 'http://172.16.0.113:3000/api/bookings/bookeds',
  bookingDelete: 'http://172.16.0.113:3000/api/bookings/delete',
};

function* getServices() {
  const services = yield ApiFetch.get(API_URL.getAllService);

  return services;
}

function* getDoctors() {
  const doctors = yield ApiFetch.get(API_URL.getAllDoctor);

  return doctors;
}

function* getAppointments() {
  const appointments = yield ApiFetch.get(API_URL.getAllAppointment);

  return appointments;
}

function* bookingService(bookingData) {
  const response = yield ApiFetch.post(API_URL.bookService, bookingData);
  return response;
}

function* getBookedServices(username) {
  const response = yield ApiFetch.get(`${API_URL.getBookedServices}/${username}`);
  return response;
}

function* deleteBooked(id) {
  const response = yield ApiFetch.post(`${API_URL.bookingDelete}/${id}`);
  return response;
}

const Api = {
  getServices,
  getDoctors,
  getAppointments,
  bookingService,
  getBookedServices,
  deleteBooked,
};

export default Api;
