import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import countReducer from './countReducer';

const rootReducer = combineReducers({
  postsReducer,
  countReducer,
});
export default rootReducer;
