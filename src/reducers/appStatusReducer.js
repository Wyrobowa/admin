import {
  LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL,
} from '../actions/appStatusActions';

const appStatus = (state = {
  login: {
    loggedIn: false,
    errorMsg: '',
  },
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
    default:
      return state;
  }
};

export const getLoginStatus = state => state.appStatus.login;

export default appStatus;
