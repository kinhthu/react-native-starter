import { connect } from 'react-redux';

import ServiceDetailComponent from './serviceDetailComponent';
import { startGetListService } from '../../redux/actions/booking';

const mapStateToProps = state => ({
  // list: state.bookingReducer.list,
  // isLoading: state.bookingReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  // onGetBooking: () => dispatch(startGetListService()),
});

const ServiceDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ServiceDetailComponent);
export default ServiceDetailContainer;
