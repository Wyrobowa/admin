import { combineReducers } from 'redux';

import appInitialization from './appInitializationReducer';
import appStatus from './appStatusReducer';
import adminApartment from './admin/apartmentReducer';


/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  adminApartment,
  appInitialization,
  appStatus,
});

export const getApartment = state => state.adminApartment;

export default AppReducer;
