import React from 'react';
import { Route } from 'react-router-dom';
import ReactCssModules from 'react-cssmodules';

// Containers
import Apartment from '../aparment/Apartment';
import Dashboard from '../dashboard/Dashboard';
import ApartmentsList from '../apartmentsList/ApartmentsList';

// Blocks
import MainNav from '../../blocks/mainNav/MainNav';

// Styles
import styles from './admin.scss';

const Admin = () => (
  <section styleName="admin">
    <nav styleName="admin__nav">
      <MainNav />
    </nav>

    <main styleName="admin__main">
      <Route path="/" exact component={Dashboard} />
      <Route path="/apartment/:apartmentSlug?" component={Apartment} />
      <Route path="/apartments-list" component={ApartmentsList} />
    </main>
  </section>
);

export default ReactCssModules(Admin, styles);
