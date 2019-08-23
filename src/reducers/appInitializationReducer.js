import { INITIALIZATION_SUCCESSFUL, INITIALIZATION_FAILED } from '../actions/appInitializationActions';

const appInitialization = (state = {
  initStatus: 'loading',
}, action) => {
  switch (action.type) {
    case INITIALIZATION_SUCCESSFUL:
      return {
        ...state,
        initStatus: 'successful',
      };
    case INITIALIZATION_FAILED:
      return {
        ...state,
        initStatus: 'failed',
      };
    default:
      return state;
  }
};

export const getInitStatus = state => state.appInitialization.initStatus;

export default appInitialization;
