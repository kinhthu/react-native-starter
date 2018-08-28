import { connect } from 'react-redux';

import BookingComponent from './bookingComponent';
import { startGetListService, bookService } from '../../redux/actions/booking';

const mapStateToProps = state => ({
  list: state.bookingReducer.list,
  isLoading: state.bookingReducer.isLoading,
  totalCost: state.bookingReducer.totalCost,
});

const mapDispatchToProps = dispatch => ({
  onGetBooking: () => dispatch(startGetListService()),
  onBookService: id => dispatch(bookService(id)),
});

const BookingContainer = connect(mapStateToProps, mapDispatchToProps)(BookingComponent);
export default BookingContainer;
