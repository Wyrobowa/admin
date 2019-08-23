import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactCssModules from 'react-cssmodules';

// Containers
import Apartment from './aparment/Apartment';
import Dashboard from './dashboard/Dashboard';

// Styles
import styles from './admin.scss';

const Admin = ({ match }) => (
  <section styleName="admin-page">
    <Route path={`${match.url}/dashboard`} component={Dashboard} />
    <Route path={`${match.url}/apartment/:apartmentId?`} component={Apartment} />
  </section>
);

Admin.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ReactCssModules(Admin, styles);
