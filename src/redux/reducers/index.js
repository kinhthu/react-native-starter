import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  postsReducer, authReducer, bookingReducer,
});
export default rootReducer;
