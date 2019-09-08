import { combineReducers } from 'redux';

import appInitialization from './appInitializationReducer';
import appStatus from './appStatusReducer';
import apartment from './apartmentReducer';
import apartmentsList from './apartmentsListReducer';

/**
 * Turns different reducing functions into a single reducing function
 */
const AppReducer = combineReducers({
  apartment,
  apartmentsList,
  appInitialization,
  appStatus,
});

export default AppReducer;
