export const SEND_LOCATION_SUCCESSFUL = 'SEND_LOCATION_SUCCESSFUL';
export const SEND_LOCATION_UNSUCCESSFUL = 'SEND_LOCATION_UNSUCCESSFUL';
export const REQUEST_SEND_LOCATION = 'REQUEST_SEND_LOCATION';
export const DELETE_LOCATION_SUCCESSFUL = 'DELETE_LOCATION_SUCCESSFUL';
export const DELETE_LOCATION_UNSUCCESSFUL = 'DELETE_LOCATION_UNSUCCESSFUL';
export const REQUEST_DELETE_LOCATION = 'REQUEST_DELETE_LOCATION';
export const EDIT_LOCATION_FORM = 'EDIT_LOCATION_FORM';
export const GET_LOCATION_SUCCESSFUL = 'GET_LOCATION_SUCCESSFUL';
export const GET_LOCATIONS_LIST_SUCCESSFUL = 'GET_LOCATIONS_LIST_SUCCESSFUL';
export const GET_LOCATION_UNSUCCESSFUL = 'GET_LOCATION_UNSUCCESSFUL';
export const REQUEST_GET_LOCATION = 'REQUEST_GET_LOCATION';
export const SET_LOCATION_DATA = 'SET_LOCATION_DATA';
export const REQUEST_GET_LOCATIONS_LIST = 'REQUEST_GET_LOCATIONS_LIST';
export const GET_LOCATIONS_LIST_UNSUCCESSFUL = 'GET_LOCATIONS_LIST_UNSUCCESSFUL';
export const CLEAR_LOCATION_FORM = 'CLEAR_LOCATION_FORM';

export const editLocationForm = (field, value) => ({
  type: EDIT_LOCATION_FORM,
  field,
  value,
});

export const sendLocationSuccessful = () => ({
  type: SEND_LOCATION_SUCCESSFUL,
});

export const sendLocationUnsuccessful = () => ({
  type: SEND_LOCATION_UNSUCCESSFUL,
});

export const requestSendLocation = () => ({
  type: REQUEST_SEND_LOCATION,
});

export const deleteLocationSuccessful = slug => ({
  type: DELETE_LOCATION_SUCCESSFUL,
  slug,
});

export const deleteLocationUnsuccessful = () => ({
  type: DELETE_LOCATION_UNSUCCESSFUL,
});

export const requestDeleteLocation = slug => ({
  type: REQUEST_DELETE_LOCATION,
  slug,
});

export const getLocationSuccessful = () => ({
  type: GET_LOCATION_SUCCESSFUL,
});

export const getLocationUnsuccessful = () => ({
  type: GET_LOCATION_UNSUCCESSFUL,
});

export const requestGetLocation = slug => ({
  type: REQUEST_GET_LOCATION,
  slug,
});

export const getLocationsListSuccessful = payload => ({
  type: GET_LOCATIONS_LIST_SUCCESSFUL,
  payload,
});

export const getLocationsListUnsuccessful = () => ({
  type: GET_LOCATIONS_LIST_UNSUCCESSFUL,
});

export const requestGetLocationsList = () => ({
  type: REQUEST_GET_LOCATIONS_LIST,
});

export const setLocationData = payload => ({
  type: SET_LOCATION_DATA,
  payload,
});

export const clearLocationForm = () => ({
  type: CLEAR_LOCATION_FORM,
});
