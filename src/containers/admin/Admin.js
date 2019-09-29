import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

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
const AdminStyled = styled.section`
  font-family: var(--font-alpha);
  color: var(--cl-grey-80);
  font-size: 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
`;

const Nav = styled.nav`
  width: 15vw;
  min-width: 325px;
  max-width: 500px;
  height: 100%;
  padding: 1rem;
  color: var(--cl-grey-10);
  position: relative;

  &::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../common/assets/img/nav-bg.jpg');
    background-size: cover;
    pointer-events: none;
    position: absolute;
    z-index: -1;
  }

  &::after {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    pointer-events: none;
    position: absolute;
    background: black;
    z-index: -1;
  }
`;

const Main = styled.main`
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  padding: 30px;
`;

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
