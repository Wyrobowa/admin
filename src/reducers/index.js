import { combineReducers } from 'redux';

import appInitialization from './appInitializationReducer';
import appStatus from './appStatusReducer';
import apartment from './apartmentReducer';


/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  apartment,
  appInitialization,
  appStatus,
});

export const getApartment = state => state.apartment;

export default AppReducer;
