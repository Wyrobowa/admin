import React, { useEffect } from 'react';
import ReactCssModules from 'react-cssmodules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import history from '../history';

// Actions
import { requestAppInitialization } from '../actions/appInitializationActions';
import { loginSuccessful } from '../actions/appStatusActions';

// Containers
import Admin from './admin/Admin';
import Login from './login/Login';

// Components
import AppLoader from '../components/appLoader/AppLoader';
import PrivateRoute from '../components/privateRoute/PrivateRoute';

// Reducers
import { getInitStatus } from '../reducers/appInitializationReducer';
import { getLoginStatus } from '../reducers/appStatusReducer';

// Styles
import styles from './styles.scss';

const App = ({
  requestAppStatusAction, initStatus, loginStatus,
}) => {
  useEffect(() => {
    requestAppStatusAction();
  }, []);

  return (
    <div styleName="admin-page">
      <Router history={history}>
        <AppLoader loading={initStatus}>
          <Route
            path="/login"
            component={Login}
          />
          <PrivateRoute component={Admin} loggedIn={loginStatus.loggedIn} />
        </AppLoader>
      </Router>
    </div>
  );
};

App.propTypes = {
  initStatus: PropTypes.string.isRequired,
  loginStatus: PropTypes.object.isRequired,
  requestAppStatusAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  initStatus: getInitStatus(state),
  loginStatus: getLoginStatus(state),
});

export default connect(
  mapStateToProps,
  {
    loginSuccessfulAction: loginSuccessful,
    requestAppStatusAction: requestAppInitialization,
  },
)(ReactCssModules(App, styles));
