import {
  LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL, SHOW_LOADER, HIDE_LOADER,
} from '../actions/appStatusActions';

const appStatus = (state = {
  login: {
    loggedIn: false,
    errorMsg: '',
  },
  loaderStatus: false,
}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        login: {
          loggedIn: true,
          errorMsg: '',
        },
      };
    case LOGIN_UNSUCCESSFUL:
      return {
        ...state,
        login: {
          loggedIn: false,
          errorMsg: 'Your email or password are incorrect!',
        },
      };
    case SHOW_LOADER:
      return {
        ...state,
        loaderStatus: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loaderStatus: false,
      };
    default:
      return state;
  }
};

export const getLoginStatus = state => state.appStatus.login;
export const getLoaderStatus = state => state.appStatus.loaderStatus;

export default appStatus;
