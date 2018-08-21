import React, { Component } from 'react';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// redux saga
import createSagaMiddleware from 'redux-saga';

// expo
import { Font, AppLoading } from 'expo';

import rootReducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
import MainContainer from './src/pages/main/mainContainer';

// middleware
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  // Load Fonts
  async componentWillMount() {
    await Font.loadAsync({
      /* eslint-disable global-require */
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
      /* eslint-enable global-require */
    });
    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    const { fontLoaded } = this.state;

    if (fontLoaded) {
      return (
        <Provider store={store}>
          <MainContainer />
        </Provider>
      );
    }
    return (
      <AppLoading />
    );
  }
}

sagaMiddleware.run(rootSaga);
