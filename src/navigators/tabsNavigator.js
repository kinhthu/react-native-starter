import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import {
  Button, Text,
  Footer, FooterTab, Icon,
} from 'native-base';

import BookingNavigator from './bookingNavigator';
import CalendarContainer from '../pages/calendar/calendarContainer';
import CameraContainer from '../pages/camera/cameraContainer';
import BookedContainer from '../pages/booked/bookedContainer';

const TabsNavigator = createMaterialTopTabNavigator(
  {
    Booking: { screen: BookingNavigator },
    Booked: { screen: BookedContainer },
    Calendar: { screen: CalendarContainer },
    Tab3: { screen: CameraContainer },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: props => (
      <Footer>
        <FooterTab>
          {/* eslint-disable react/prop-types */}
          <Button vertical active={props.navigationState.index === 0} onPress={() => { props.navigation.navigate('Booking'); }}>
            {/* eslint-enable react/prop-types */}
            <Icon name="book" />
            <Text>Booking</Text>
          </Button>
          <Button vertical active={props.navigationState.index === 1} onPress={() => { props.navigation.navigate('Booked'); }}>
            <Icon active name="bookmarks" />
            <Text>Booked</Text>
          </Button>
          <Button vertical active={props.navigationState.index === 2} onPress={() => { props.navigation.navigate('Calendar'); }}>
            <Icon name="calendar" />
            <Text>Calendar</Text>
          </Button>
          <Button vertical active={props.navigationState.index === 3} onPress={() => { props.navigation.navigate('Tab3'); }}>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    ),
  },
);

export default TabsNavigator;
