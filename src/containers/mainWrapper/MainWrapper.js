import React, { Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import ReactCssModules from 'react-cssmodules';
import PropTypes from 'prop-types';

// Blocks
import MainNav from '../../blocks/mainNav/MainNav';

// Components
import Umbrella from '../../components/umbrella/Umbrella';

// Containers
import Home from '../home/Home';
import ApartmentsSearchResults from '../apartmentsSearchResults/ApartmentsSearchResults';
import Apartment from '../apartment/Apartment';

// Styles
import styles from './mainWrapper.scss';

const MainWrapper = ({ location }) => {
  const { pathname } = location;
  const isHiddenOnAdminPages = ['/admin/', '/login'].some(condition => pathname.includes(condition));

  return (
    <section styleName="main-wrapper">
      {!isHiddenOnAdminPages
        && (
          <Fragment>
            <Umbrella active />
            <MainNav />
          </Fragment>
        )
      }
      <Route exact path="/" component={Home} />
      <Route
        path="/apartments-search-result"
        component={ApartmentsSearchResults}
      />
      <Route path="/apartment/:id" component={Apartment} />
    </section>
  );
};

MainWrapper.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(ReactCssModules(MainWrapper, styles));
