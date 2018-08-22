import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import {
  Button, Text,
  Footer, FooterTab, Icon,
} from 'native-base';

import BookingNavigator from './bookingNavigator';
import PostsContainer from '../pages/posts/postsContainer';

const TabsNavigator = createMaterialTopTabNavigator(
  {
    Booking: { screen: BookingNavigator },
    Tab1: { screen: PostsContainer },
    Tab2: { screen: BookingNavigator },
    Tab3: { screen: PostsContainer },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
      <Footer>
        <FooterTab>
          {/* eslint-disable react/prop-types */}
          <Button vertical active={props.navigationState.index === 0} onPress={() => { props.navigation.navigate('Booking'); }}>
            {/* eslint-enable react/prop-types */}
            <Icon name="book" />
            <Text>Booking</Text>
          </Button>
          <Button vertical active={props.navigationState.index === 1} onPress={() => { props.navigation.navigate('Tab1'); }}>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical active={props.navigationState.index === 2} onPress={() => { props.navigation.navigate('Tab2'); }}>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
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
