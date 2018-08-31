import { connect } from 'react-redux';

import BookingComponent from './bookingComponent';
import { startGetListService, selectService } from '../../redux/actions/service';
import { startBooking, clearMessage } from '../../redux/actions/booking';

const mapStateToProps = state => ({
  list: state.serviceReducer.list,
  isLoading: state.serviceReducer.isLoading,
  totalCost: state.serviceReducer.totalCost,
  message: state.bookingReducer.message,
  error: state.bookingReducer.error,
});

const mapDispatchToProps = dispatch => ({
  onGetServices: () => dispatch(startGetListService()),
  onSelectService: id => dispatch(selectService(id)),
  onBookServices: data => dispatch(startBooking(data)),
  onClearMessage: () => dispatch(clearMessage()),
});

const BookingContainer = connect(mapStateToProps, mapDispatchToProps)(BookingComponent);
export default BookingContainer;
