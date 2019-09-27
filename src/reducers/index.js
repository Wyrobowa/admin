import { combineReducers } from 'redux';

import appInitialization from './appInitializationReducer';
import appStatus from './appStatusReducer';
import apartment from './apartmentReducer';
import apartmentsList from './apartmentsListReducer';
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
  appInitialization,
  appStatus,
  location,
  locationsList,
  page,
  pagesList,
});

export default AppReducer;
