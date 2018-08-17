import { connect } from 'react-redux';

import CounterComponent from './counterComponent';
import { increase, decrease } from '../../redux/actions';

const mapStateToProps = state => ({
  count: state.countReducer.count,
});

const mapDispatchToProps = dispatch => ({
  onIncrease: amount => dispatch(increase(amount)),
  onDecrease: amount => dispatch(decrease(amount)),
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;
