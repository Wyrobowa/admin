export const SEND_APARTMENT_SERVICE_SUCCESSFUL = 'SEND_APARTMENT_SERVICE_SUCCESSFUL';
export const SEND_APARTMENT_SERVICE_UNSUCCESSFUL = 'SEND_APARTMENT_SERVICE_UNSUCCESSFUL';

export const DELETE_APARTMENT_SERVICE_SUCCESSFUL = 'DELETE_APARTMENT_SERVICE_SUCCESSFUL';
export const DELETE_APARTMENT_SERVICE_UNSUCCESSFUL = 'DELETE_APARTMENT_SERVICE_UNSUCCESSFUL';

export const REQUEST_SEND_APARTMENT_SERVICE = 'REQUEST_SEND_APARTMENT_SERVICE';
export const REQUEST_DELETE_APARTMENT_SERVICE = 'REQUEST_DELETE_APARTMENT_SERVICE';
export const REQUEST_GET_APARTMENT_SERVICE = 'REQUEST_GET_APARTMENT_SERVICE';
export const REQUEST_GET_APARTMENT_SERVICE_LIST = 'REQUEST_GET_APARTMENT_SERVICE_LIST';

export const GET_APARTMENT_SERVICE_SUCCESSFUL = 'GET_APARTMENT_SERVICE_SUCCESSFUL';
export const GET_APARTMENT_SERVICE_LIST_SUCCESSFUL = 'GET_APARTMENT_SERVICE_LIST_SUCCESSFUL';
export const GET_APARTMENT_SERVICE_UNSUCCESSFUL = 'GET_APARTMENT_SERVICE_UNSUCCESSFUL';
export const GET_APARTMENT_SERVICE_LIST_UNSUCCESSFUL = 'GET_APARTMENT_SERVICE_LIST_UNSUCCESSFUL';

export const EDIT_APARTMENT_SERVICE_FORM = 'EDIT_APARTMENT_SERVICE_FORM';
export const CLEAR_APARTMENT_SERVICE_FORM = 'CLEAR_APARTMENT_SERVICE_FORM';

// Action creators

export const sendApartmentServiceSuccessful = () => ({
  type: SEND_APARTMENT_SERVICE_SUCCESSFUL,
});

export const sendApartmentServiceUnsuccessful = () => ({
  type: SEND_APARTMENT_SERVICE_UNSUCCESSFUL,
});

export const requestSendApartmentService = () => ({
  type: REQUEST_SEND_APARTMENT_SERVICE,
});

export const deleteApartmentServiceSuccessful = slug => ({
  type: DELETE_APARTMENT_SERVICE_SUCCESSFUL,
  slug,
});

export const deleteApartmentServiceUnsuccessful = () => ({
  type: DELETE_APARTMENT_SERVICE_UNSUCCESSFUL,
});

export const requestDeleteApartmentService = slug => ({
  type: REQUEST_DELETE_APARTMENT_SERVICE,
  slug,
});

export const requestGetApartmentService = slug => ({
  type: REQUEST_GET_APARTMENT_SERVICE,
  slug,
});

export const requestGetApartmentServiceList = () => ({
  type: REQUEST_GET_APARTMENT_SERVICE_LIST,
});

export const getApartmentServiceSuccessful = payload => ({
  type: GET_APARTMENT_SERVICE_SUCCESSFUL,
  payload,
});

export const getApartmentServiceListSuccessful = payload => ({
  type: GET_APARTMENT_SERVICE_LIST_SUCCESSFUL,
  payload,
});

export const getApartmentServiceUnsuccessful = () => ({
  type: GET_APARTMENT_SERVICE_UNSUCCESSFUL,
});

export const getApartmentServiceListUnsuccessful = () => ({
  type: GET_APARTMENT_SERVICE_LIST_UNSUCCESSFUL,
});

export const editApartmentServiceForm = (field, value) => ({
  type: EDIT_APARTMENT_SERVICE_FORM,
  field,
  value,
});

export const clearApartmentServiceForm = () => ({
  type: CLEAR_APARTMENT_SERVICE_FORM,
});
