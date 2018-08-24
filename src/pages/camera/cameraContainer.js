import { connect } from 'react-redux';

import CameraComponent from './cameraComponent';
import { startGetListService } from '../../redux/actions/booking';

const mapStateToProps = state => ({
  list: state.bookingReducer.list,
  isLoading: state.bookingReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onGetBooking: () => dispatch(startGetListService()),
});

const CameraContainer = connect(mapStateToProps, mapDispatchToProps)(CameraComponent);
export default CameraContainer;
