import React from 'react';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// redux saga
import createSagaMiddleware from 'redux-saga';

import rootReducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
// import CounterContainer from './src/containers/counterContainer';
import PostsContainer from './src/pages/posts/postsContainer';

// middleware
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const App = () => (
  <Provider store={store}>
    <PostsContainer />
  </Provider>
);
sagaMiddleware.run(rootSaga);
export default App;
