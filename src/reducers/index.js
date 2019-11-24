import { combineReducers } from 'redux';

import apartment from './apartmentReducer';
import apartmentsList from './apartmentsListReducer';
import apartmentFacility from './apartmentFacilityReducer';
import apartmentFacilityList from './apartmentFacilityListReducer';
import apartmentFacilityGroup from './apartmentFacilityGroupReducer';
import apartmentFacilityGroupList from './apartmentFacilityGroupListReducer';
import apartmentService from './apartmentServiceReducer';
import apartmentServiceList from './apartmentServiceListReducer';
import apartmentServiceGroup from './apartmentServiceGroupReducer';
import apartmentServiceGroupList from './apartmentServiceGroupListReducer';
import appInitialization from './appInitializationReducer';
import appStatus from './appStatusReducer';
import language from './languageReducer';
import languagesList from './languagesListReducer';
import location from './locationReducer';
import locationsList from './locationsListReducer';
import page from './pageReducer';
import pagesList from './pagesListReducer';
import phrase from './phraseReducer';
import phrasesList from './phrasesListReducer';
import translation from './translationReducer';
import translationsList from './translationsListReducer';

/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  apartment,
  apartmentsList,
  apartmentFacility,
  apartmentFacilityList,
  apartmentFacilityGroup,
  apartmentFacilityGroupList,
  apartmentService,
  apartmentServiceList,
  apartmentServiceGroup,
  apartmentServiceGroupList,
  appInitialization,
  appStatus,
  language,
  languagesList,
  location,
  locationsList,
  page,
  pagesList,
  phrase,
  phrasesList,
  translation,
  translationsList,
});

export default AppReducer;
