import { connect } from 'react-redux';

import CalendarComponent from './calendarComponent';
// import { startGetListService } from '../../redux/actions/booking';

const mapStateToProps = state => ({
  // list: state.bookingReducer.list,
  // isLoading: state.bookingReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  // onGetBooking: () => dispatch(startGetListService()),
});

const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(CalendarComponent);
export default CalendarContainer;
