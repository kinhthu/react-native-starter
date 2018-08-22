import { connect } from 'react-redux';

import BookingComponent from './bookingComponent';
import { startGetListService } from '../../redux/actions/booking';

const mapStateToProps = state => ({
  list: state.bookingReducer.list,
  isLoading: state.bookingReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onGetBooking: () => dispatch(startGetListService()),
});

const BookingContainer = connect(mapStateToProps, mapDispatchToProps)(BookingComponent);
export default BookingContainer;
