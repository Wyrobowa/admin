import React from 'react';
import { Route } from 'react-router-dom';

// Blocks
import MainNav from '../../blocks/mainNav/MainNav';

// Components
import ContentLoader from '../../components/contentLoader/ContentLoader';

// Containers
import Apartment from '../aparment/Apartment';
import ApartmentsList from '../apartmentsList/ApartmentsList';
import ApartmentServiceList from '../apartmentServiceList/ApartmentServiceList';
import ApartmentService from '../apartmentService/ApartmentService';
import Dashboard from '../dashboard/Dashboard';
import Location from '../location/Location';
import LocationsList from '../locationsList/LocationsList';
import Page from '../page/Page';
import PagesList from '../pagesList/PagesList';

// Styles
import { AdminStyled, Nav, Main } from './adminStyles';

const Admin = () => (
  <AdminStyled>
    <Nav>
      <MainNav />
    </Nav>

    <Main>
      <Route path="/" exact component={Dashboard} />
      <Route path="/apartment/:apartmentSlug?" component={Apartment} />
      <Route path="/apartments-list" component={ApartmentsList} />
      <Route path="/location/:locationSlug?" component={Location} />
      <Route path="/locations-list" component={LocationsList} />
      <Route path="/page/:pageSlug?" component={Page} />
      <Route path="/pages-list" component={PagesList} />
      <Route path="/apartment-service/:apartmentSlug?" component={ApartmentService} />
      <Route path="/apartment-service-list" component={ApartmentServiceList} />
      <ContentLoader />
    </Main>
  </AdminStyled>
);

export default Admin;
