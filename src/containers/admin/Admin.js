import React from 'react';
import { Route } from 'react-router-dom';

// Blocks
import MainNav from '../../blocks/mainNav/MainNav';

// Components
import ContentLoader from '../../components/contentLoader/ContentLoader';

// Containers
import Apartment from '../aparment/Apartment';
import ApartmentsList from '../apartmentsList/ApartmentsList';
import ApartmentFacility from '../apartmentFacility/ApartmentFacility';
import ApartmentFacilityList from '../apartmentFacilityList/ApartmentFacilityList';
import ApartmentFacilityGroup from '../apartmentFacilityGroup/ApartmentFacilityGroup';
import ApartmentFacilityGroupList from '../apartmentFacilityGroupList/ApartmentFacilityGroupList';
import ApartmentService from '../apartmentService/ApartmentService';
import ApartmentServiceList from '../apartmentServiceList/ApartmentServiceList';
import ApartmentServiceGroup from '../apartmentServiceGroup/ApartmentServiceGroup';
import ApartmentServiceGroupList from '../apartmentServiceGroupList/ApartmentServiceGroupList';
import Dashboard from '../dashboard/Dashboard';
import Language from '../language/Language';
import LanguagesList from '../languagesList/LanguagesList';
import Location from '../location/Location';
import LocationsList from '../locationsList/LocationsList';
import Page from '../page/Page';
import PagesList from '../pagesList/PagesList';
import Phrase from '../phrase/Phrase';
import PhrasesList from '../phrasesList/PhrasesList';
import Translation from '../translation/Translation';
import TranslationsList from '../translationsList/TranslationsList';

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
      <Route path="/apartment-facility/:apartmentFacilitySlug?" component={ApartmentFacility} />
      <Route path="/apartment-facility-list" component={ApartmentFacilityList} />
      <Route path="/apartment-facility-group/:apartmentFacilityGroupSlug?" component={ApartmentFacilityGroup} />
      <Route path="/apartment-facility-group-list" component={ApartmentFacilityGroupList} />
      <Route path="/apartment-service/:apartmentServiceSlug?" component={ApartmentService} />
      <Route path="/apartment-service-list" component={ApartmentServiceList} />
      <Route path="/apartment-service-group/:apartmentServiceGroupSlug?" component={ApartmentServiceGroup} />
      <Route path="/apartment-service-group-list" component={ApartmentServiceGroupList} />
      <Route path="/language/:languageCode?" component={Language} />
      <Route path="/languages-list" component={LanguagesList} />
      <Route path="/location/:locationSlug?" component={Location} />
      <Route path="/locations-list" component={LocationsList} />
      <Route path="/page/:pageSlug?" component={Page} />
      <Route path="/pages-list" component={PagesList} />
      <Route path="/phrase/:phraseId?" component={Phrase} />
      <Route path="/phrases-list" component={PhrasesList} />
      <Route path="/translation/:translationId?" component={Translation} />
      <Route path="/translations-list" component={TranslationsList} />
      <ContentLoader />
    </Main>
  </AdminStyled>
);

export default Admin;
