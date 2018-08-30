import { connect } from 'react-redux';

import BookedComponent from './bookedComponent';
import { startGetListService, bookService } from '../../redux/actions/service';

const mapStateToProps = state => ({
  list: state.serviceReducer.list,
});

const mapDispatchToProps = dispatch => ({
  onGetBooking: () => dispatch(startGetListService()),
  // onBookService: id => dispatch(bookService(id)),
});

const BookedContainer = connect(mapStateToProps, mapDispatchToProps)(BookedComponent);
export default BookedContainer;
