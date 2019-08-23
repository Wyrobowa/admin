import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/index';
import rootSaga from './sagas/index';

/**
 * Configure Store
 * @return {Object} - The whole state tree the your application
 */
const configureStore = () => {
  let store;
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
  ];

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index'); // eslint-disable-line
        store.replaceReducer(nextRootReducer);
      });
    }
  } else {
    store = applyMiddleware(...middlewares)(createStore)(reducer);
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
