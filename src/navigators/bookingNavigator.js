import { createStackNavigator } from 'react-navigation';
import BookingContainer from '../pages/booking/bookingContainer';
import ServiceDetailContainer from '../pages/serviceDetail/serviceDetailContainer';

const BookingNavigator = createStackNavigator(
  {
    Booking: { screen: BookingContainer },
    ServiceDetail: { screen: ServiceDetailContainer },
  },
);

export default BookingNavigator;
