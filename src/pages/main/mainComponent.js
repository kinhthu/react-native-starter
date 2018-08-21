import React, { Component } from 'react';

import {
  Container, Header, Content, Button, Text,
  Footer, FooterTab, Icon, StyleProvider,
} from 'native-base';

import PropTypes from 'prop-types';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/custom';
import LoginContainer from '../login/loginContainer';


// import PostItem from '../../components/postItem/postItem';
// import styles from './styles';

export default class MainComponent extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <StyleProvider style={getTheme(material)}>
        {isLoggedIn ? (
          <Container>
            <Header />
            <Content />
            <Footer>
              <FooterTab>
                <Button vertical active>
                  <Icon name="apps" />
                  <Text>Apps</Text>
                </Button>
                <Button vertical>
                  <Icon name="camera" />
                  <Text>Camera</Text>
                </Button>
                <Button vertical>
                  <Icon active name="navigate" />
                  <Text>Navigate</Text>
                </Button>
                <Button vertical>
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
