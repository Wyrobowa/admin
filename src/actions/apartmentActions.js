export const SEND_APARTMENT_SUCCESSFUL = 'SEND_APARTMENT_SUCCESSFUL';
export const SEND_APARTMENT_UNSUCCESSFUL = 'SEND_APARTMENT_UNSUCCESSFUL';
export const REQUEST_SEND_APARTMENT = 'REQUEST_SEND_APARTMENT';
export const DELETE_APARTMENT_SUCCESSFUL = 'DELETE_APARTMENT_SUCCESSFUL';
export const DELETE_APARTMENT_UNSUCCESSFUL = 'DELETE_APARTMENT_UNSUCCESSFUL';
export const REQUEST_DELETE_APARTMENT = 'REQUEST_DELETE_APARTMENT';
export const EDIT_APARTMENT_FORM = 'EDIT_APARTMENT_FORM';
export const EDIT_APARTMENT_ADDRESS_FORM = 'EDIT_APARTMENT_ADDRESS_FORM';
export const GET_APARTMENT_SUCCESSFUL = 'GET_APARTMENT_SUCCESSFUL';
export const GET_APARTMENTS_LIST_SUCCESSFUL = 'GET_APARTMENTS_LIST_SUCCESSFUL';
export const GET_APARTMENT_UNSUCCESSFUL = 'GET_APARTMENT_UNSUCCESSFUL';
export const REQUEST_GET_APARTMENT = 'REQUEST_GET_APARTMENT';
export const REQUEST_GET_APARTMENTS_LIST = 'REQUEST_GET_APARTMENTS_LIST';
export const GET_APARTMENTS_LIST_UNSUCCESSFUL = 'GET_APARTMENTS_LIST_UNSUCCESSFUL';
export const CLEAR_APARTMENT_FORM = 'CLEAR_APARTMENT_FORM';

export const editApartmentForm = (field, value) => ({
  type: EDIT_APARTMENT_FORM,
  field,
  value,
});

export const editApartmentAddressForm = (field, value) => ({
  type: EDIT_APARTMENT_ADDRESS_FORM,
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

export const deleteApartmentSuccessful = slug => ({
  type: DELETE_APARTMENT_SUCCESSFUL,
  slug,
});

export const deleteApartmentUnsuccessful = () => ({
  type: DELETE_APARTMENT_UNSUCCESSFUL,
});

export const requestDeleteApartment = slug => ({
  type: REQUEST_DELETE_APARTMENT,
  slug,
});

export const getApartmentSuccessful = payload => ({
  type: GET_APARTMENT_SUCCESSFUL,
  payload,
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

export const clearApartmentForm = () => ({
  type: CLEAR_APARTMENT_FORM,
});
