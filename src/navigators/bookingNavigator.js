import { createStackNavigator } from 'react-navigation';
import BookingContainer from '../pages/booking/bookingContainer';
import ServiceDetailContainer from '../pages/serviceDetail/serviceDetailContainer';

const BookingNavigator = createStackNavigator(
  {
    Booking: {
      screen: BookingContainer,
      navigationOptions: {
        title: 'Booking',
      },
    },
    ServiceDetail: {
      screen: ServiceDetailContainer,
      navigationOptions: {
        title: 'Service Detail',
      },
    },
  },
);

export default BookingNavigator;
