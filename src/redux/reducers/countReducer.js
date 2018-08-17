import { INCREASE, DECREASE } from '../actions/actionType';

const initState = {
  count: 0,
};

const countReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + action.amount };
    case DECREASE:
      return { count: state.count - action.amount };
    default:
      return state;
  }
};

export default countReducer;
