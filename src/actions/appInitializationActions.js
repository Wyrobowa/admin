export const INITIALIZATION_SUCCESSFUL = 'INITIALIZATION_SUCCESSFUL';
export const INITIALIZATION_FAILED = 'INITIALIZATION_FAILED';
export const APP_INITIALIZATION_REQUESTED = 'APP_INITIALIZATION_REQUESTED';

export const initSuccess = () => ({
  type: INITIALIZATION_SUCCESSFUL,
});

export const initFail = () => ({
  type: INITIALIZATION_FAILED,
});

export const requestAppInitialization = () => ({
  type: APP_INITIALIZATION_REQUESTED,
});
