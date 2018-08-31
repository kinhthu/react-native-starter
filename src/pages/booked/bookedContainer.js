import { connect } from 'react-redux';

import BookedComponent from './bookedComponent';
import { startGetBooked, startDeleteBooked } from '../../redux/actions/booking';

const mapStateToProps = state => ({
  list: state.bookingReducer.bookedList,
});

const mapDispatchToProps = dispatch => ({
  onGetBookedServices: () => dispatch(startGetBooked()),
  onDeleteBooked: id => dispatch(startDeleteBooked(id)),
});

const BookedContainer = connect(mapStateToProps, mapDispatchToProps)(BookedComponent);
export default BookedContainer;
