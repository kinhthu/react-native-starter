import React, { Component } from 'react';

import {
  StyleProvider,
} from 'native-base';

import PropTypes from 'prop-types';

import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/custom';
import LoginContainer from '../login/loginContainer';
import TabsNavigator from '../../navigators/tabsNavigator';


// import PostItem from '../../components/postItem/postItem';
// import styles from './styles';

export default class MainComponent extends Component {
  render() {
    const { isLoggedIn } = this.props;
    // const { tabStyle } = styles;

    return (
      <StyleProvider style={getTheme(material)}>
        {isLoggedIn ? (<TabsNavigator />) : (<LoginContainer />)}
      </StyleProvider>
    );
  }
}

MainComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
