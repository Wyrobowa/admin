export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_UNSUCCESSFUL = 'LOGIN_UNSUCCESSFUL';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export const loginSuccessful = () => ({
  type: LOGIN_SUCCESSFUL,
});

export const loginUnsuccessful = () => ({
  type: LOGIN_UNSUCCESSFUL,
});

export const requestLogin = credentials => ({
  type: REQUEST_LOGIN,
  credentials,
});
