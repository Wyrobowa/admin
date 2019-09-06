import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Actions
import { loginSuccessful } from './actions/appStatusActions';

// Components
import App from './containers/App';

// Services
import { getBearerToken } from './services/authService';

import configureStore from './configureStore';
import History from './history';

const store = configureStore();

if (getBearerToken()) {
  store.dispatch(loginSuccessful());

  if (History.location.pathname === '/login') {
    History.push('/');
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
