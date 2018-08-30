import { connect } from 'react-redux';

import ServiceDetailComponent from './serviceDetailComponent';
import { selectService } from '../../redux/actions/service';
import { startGetListDoctor } from '../../redux/actions/doctor';
import { startGetListAppointment } from '../../redux/actions/appointment';

const mapStateToProps = state => ({
  doctors: state.doctorReducer.list,
  appointments: state.appointmentReducer.list,
  isLoading: state.doctorReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onSelectService: id => dispatch(selectService(id)),
  loadDoctors: () => dispatch(startGetListDoctor()),
  loadAppointments: () => dispatch(startGetListAppointment()),
});

const ServiceDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ServiceDetailComponent);
export default ServiceDetailContainer;
