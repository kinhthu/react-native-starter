import { connect } from 'react-redux';

import ServiceDetailComponent from './serviceDetailComponent';
import { bookService } from '../../redux/actions/booking';

const mapStateToProps = state => ({
  // list: state.bookingReducer.list,
  // isLoading: state.bookingReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onBookService: id => dispatch(bookService(id)),
});

const ServiceDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ServiceDetailComponent);
export default ServiceDetailContainer;
