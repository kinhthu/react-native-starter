import { combineReducers } from 'redux';
import authReducer from './authReducer';
import serviceReducer from './serviceReducer';
import doctorReducer from './doctorReducer';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
  authReducer, serviceReducer, doctorReducer, appointmentReducer,
});
export default rootReducer;
