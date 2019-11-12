import { combineReducers } from 'redux';

import apartment from './apartmentReducer';
import apartmentsList from './apartmentsListReducer';
import apartmentService from './apartmentServiceReducer';
import apartmentServiceList from './apartmentServiceListReducer';
import appInitialization from './appInitializationReducer';
import appStatus from './appStatusReducer';
import language from './languageReducer';
import languagesList from './languagesListReducer';
import location from './locationReducer';
import locationsList from './locationsListReducer';
import page from './pageReducer';
import pagesList from './pagesListReducer';

/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  apartment,
  apartmentsList,
  apartmentService,
  apartmentServiceList,
  appInitialization,
  appStatus,
  language,
  languagesList,
  location,
  locationsList,
  page,
  pagesList,
});

export default AppReducer;
