import React, { Component } from 'react';

import {
  Container, Content, Button, Text,
  Footer, FooterTab, Icon, StyleProvider,
} from 'native-base';

import PropTypes from 'prop-types';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/custom';
import LoginContainer from '../login/loginContainer';
import PostsContainer from '../posts/postsContainer';
// import BookingContainer from '../booking/bookingContainer';
import BookingNavigator from '../../navigators/bookingNavigator';


// import PostItem from '../../components/postItem/postItem';
// import styles from './styles';

export default class MainComponent extends Component {
  state = {
    selectedTab: 0,
  };

  changeTab(index) {
    this.setState({ selectedTab: index });
  }

  renderSelectedTab() {
    const { selectedTab } = this.state;

    switch (selectedTab) {
      case 0: return <BookingNavigator />;
      case 1: return <PostsContainer />;
      default: return <Content />;
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    // const { tabStyle } = styles;
    const { selectedTab } = this.state;

    return (
      <StyleProvider style={getTheme(material)}>
        {isLoggedIn ? (
          <Container>
            {this.renderSelectedTab()}
            <Footer>
              <FooterTab>
                <Button vertical active={selectedTab === 0} onPress={() => { this.changeTab(0); }}>
                  <Icon name="book" />
                  <Text>Booking</Text>
                </Button>
                <Button vertical active={selectedTab === 1} onPress={() => { this.changeTab(1); }}>
                  <Icon name="camera" />
                  <Text>Camera</Text>
                </Button>
                <Button vertical active={selectedTab === 2} onPress={() => { this.changeTab(2); }}>
                  <Icon active name="navigate" />
                  <Text>Navigate</Text>
                </Button>
                <Button vertical active={selectedTab === 3} onPress={() => { this.changeTab(3); }}>
                  <Icon name="person" />
                  <Text>Contact</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>)
          : (<LoginContainer />)
        }
      </StyleProvider>
    );
  }
}

MainComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
