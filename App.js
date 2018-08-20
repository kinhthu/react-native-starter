import React from 'react';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// redux saga
import createSagaMiddleware from 'redux-saga';

import rootReducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
import MainContainer from './src/pages/main/mainContainer';

// middleware
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);
sagaMiddleware.run(rootSaga);
export default App;
