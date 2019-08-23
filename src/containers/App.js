import React, { Fragment, useEffect, useState } from 'react';
import ReactCssModules from 'react-cssmodules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import history from '../history';

// Actions
import { requestAppInitialization } from '../actions/appInitializationActions';

// Containers
import MainWrapper from './mainWrapper/MainWrapper';
import Admin from './admin/Admin';
import Login from './login/Login';

// Components
import Loader from '../components/loader/Loader';
import PrivateRoute from '../components/privateRoute/PrivateRoute';

// Reducers
import { getInitStatus } from '../reducers/appInitializationReducer';

// Styles
import styles from './styles.scss';

const App = ({ requestAppStatusAction, initStatus }) => {
  const [loginStatus] = useState('logged');

  useEffect(() => {
    requestAppStatusAction();
  }, []);

  return (
    <Fragment>
      <Router history={history}>
        <Loader loading={initStatus}>
          <MainWrapper path="/" />
          <Route
            path="/login"
            component={Login}
          />
          <PrivateRoute path="/admin" component={Admin} loginStatus={loginStatus} />
        </Loader>
      </Router>
    </Fragment>
  );
};

App.propTypes = {
  initStatus: PropTypes.string.isRequired,
  requestAppStatusAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  initStatus: getInitStatus(state),
});

export default connect(
  mapStateToProps,
  {
    requestAppStatusAction: requestAppInitialization,
  },
)(ReactCssModules(App, styles));
