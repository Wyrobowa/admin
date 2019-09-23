export const SEND_APARTMENT_SUCCESSFUL = 'SEND_APARTMENT_SUCCESSFUL';
export const SEND_APARTMENT_UNSUCCESSFUL = 'SEND_APARTMENT_UNSUCCESSFUL';
export const REQUEST_SEND_APARTMENT = 'REQUEST_SEND_APARTMENT';
export const EDIT_APARTMENT_FORM = 'EDIT_APARTMENT_FORM';
export const GET_APARTMENT_SUCCESSFUL = 'GET_APARTMENT_SUCCESSFUL';
export const GET_APARTMENTS_LIST_SUCCESSFUL = 'GET_APARTMENTS_LIST_SUCCESSFUL';
export const GET_APARTMENT_UNSUCCESSFUL = 'GET_APARTMENT_UNSUCCESSFUL';
export const REQUEST_GET_APARTMENT = 'REQUEST_GET_APARTMENT';
export const SET_APARTMENT_DATA = 'SET_APARTMENT_DATA';
export const REQUEST_GET_APARTMENTS_LIST = 'REQUEST_GET_APARTMENTS_LIST';
export const GET_APARTMENTS_LIST_UNSUCCESSFUL = 'GET_APARTMENTS_LIST_UNSUCCESSFUL';
export const CLEAR_APARTMENT_FORM = 'CLEAR_APARTMENT_FORM';

export const editApartmentForm = (field, value) => ({
  type: EDIT_APARTMENT_FORM,
  field,
  value,
});

export const sendApartmentSuccessful = () => ({
  type: SEND_APARTMENT_SUCCESSFUL,
});

export const sendApartmentUnsuccessful = () => ({
  type: SEND_APARTMENT_UNSUCCESSFUL,
});

export const requestSendApartment = () => ({
  type: REQUEST_SEND_APARTMENT,
});

export const getApartmentSuccessful = () => ({
  type: GET_APARTMENT_SUCCESSFUL,
});

export const getApartmentUnsuccessful = () => ({
  type: GET_APARTMENT_UNSUCCESSFUL,
});

export const requestGetApartment = slug => ({
  type: REQUEST_GET_APARTMENT,
  slug,
});

export const getApartmentsListSuccessful = payload => ({
  type: GET_APARTMENTS_LIST_SUCCESSFUL,
  payload,
});

export const getApartmentsListUnsuccessful = () => ({
  type: GET_APARTMENTS_LIST_UNSUCCESSFUL,
});

export const requestGetApartmentsList = () => ({
  type: REQUEST_GET_APARTMENTS_LIST,
});

export const setApartmentData = payload => ({
  type: SET_APARTMENT_DATA,
  payload,
});

export const clearApartmentForm = () => ({
  type: CLEAR_APARTMENT_FORM,
});
