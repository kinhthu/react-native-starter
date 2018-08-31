import { createStackNavigator } from 'react-navigation';
import BookedContainer from '../pages/booked/bookedContainer';
import ServiceDetailContainer from '../pages/serviceDetail/serviceDetailContainer';

const BookedNavigator = createStackNavigator(
  {
    Booked: {
      screen: BookedContainer,
      navigationOptions: {
        title: 'Booked',
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

export default BookedNavigator;
