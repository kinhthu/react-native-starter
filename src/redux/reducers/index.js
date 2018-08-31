import { combineReducers } from 'redux';
import authReducer from './authReducer';
import serviceReducer from './serviceReducer';
import doctorReducer from './doctorReducer';
import appointmentReducer from './appointmentReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  authReducer, serviceReducer, doctorReducer, appointmentReducer, bookingReducer,
});
export default rootReducer;
