export const SEND_APARTMENT_SERVICE_GROUP_SUCCESSFUL = 'SEND_APARTMENT_SERVICE_GROUP_SUCCESSFUL';
export const SEND_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL = 'SEND_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL';

export const DELETE_APARTMENT_SERVICE_GROUP_SUCCESSFUL = 'DELETE_APARTMENT_SERVICE_GROUP_SUCCESSFUL';
export const DELETE_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL = 'DELETE_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL';

export const REQUEST_SEND_APARTMENT_SERVICE_GROUP = 'REQUEST_SEND_APARTMENT_SERVICE_GROUP';
export const REQUEST_DELETE_APARTMENT_SERVICE_GROUP = 'REQUEST_DELETE_APARTMENT_SERVICE_GROUP';
export const REQUEST_GET_APARTMENT_SERVICE_GROUP = 'REQUEST_GET_APARTMENT_SERVICE_GROUP';
export const REQUEST_GET_APARTMENT_SERVICE_GROUP_LIST = 'REQUEST_GET_APARTMENT_SERVICE_GROUP_LIST';

export const GET_APARTMENT_SERVICE_GROUP_SUCCESSFUL = 'GET_APARTMENT_SERVICE_GROUP_SUCCESSFUL';
export const GET_APARTMENT_SERVICE_GROUP_LIST_SUCCESSFUL = 'GET_APARTMENT_SERVICE_GROUP_LIST_SUCCESSFUL';
export const GET_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL = 'GET_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL';
export const GET_APARTMENT_SERVICE_GROUP_LIST_UNSUCCESSFUL = 'GET_APARTMENT_SERVICE_GROUP_LIST_UNSUCCESSFUL';

export const EDIT_APARTMENT_SERVICE_GROUP_FORM = 'EDIT_APARTMENT_SERVICE_GROUP_FORM';
export const CLEAR_APARTMENT_SERVICE_GROUP_FORM = 'CLEAR_APARTMENT_SERVICE_GROUP_FORM';

// Action creators

export const sendApartmentServiceGroupSuccessful = () => ({
  type: SEND_APARTMENT_SERVICE_GROUP_SUCCESSFUL,
});

export const sendApartmentServiceGroupUnsuccessful = () => ({
  type: SEND_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL,
});

export const requestSendApartmentServiceGroup = () => ({
  type: REQUEST_SEND_APARTMENT_SERVICE_GROUP,
});

export const deleteApartmentServiceGroupSuccessful = slug => ({
  type: DELETE_APARTMENT_SERVICE_GROUP_SUCCESSFUL,
  slug,
});

export const deleteApartmentServiceGroupUnsuccessful = () => ({
  type: DELETE_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL,
});

export const requestDeleteApartmentServiceGroup = slug => ({
  type: REQUEST_DELETE_APARTMENT_SERVICE_GROUP,
  slug,
});

export const requestGetApartmentServiceGroup = slug => ({
  type: REQUEST_GET_APARTMENT_SERVICE_GROUP,
  slug,
});

export const requestGetApartmentServiceGroupList = () => ({
  type: REQUEST_GET_APARTMENT_SERVICE_GROUP_LIST,
});

export const getApartmentServiceGroupSuccessful = payload => ({
  type: GET_APARTMENT_SERVICE_GROUP_SUCCESSFUL,
  payload,
});

export const getApartmentServiceGroupListSuccessful = payload => ({
  type: GET_APARTMENT_SERVICE_GROUP_LIST_SUCCESSFUL,
  payload,
});

export const getApartmentServiceGroupUnsuccessful = () => ({
  type: GET_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL,
});

export const getApartmentServiceGroupListUnsuccessful = () => ({
  type: GET_APARTMENT_SERVICE_GROUP_LIST_UNSUCCESSFUL,
});

export const editApartmentServiceGroupForm = (field, value) => ({
  type: EDIT_APARTMENT_SERVICE_GROUP_FORM,
  field,
  value,
});

export const clearApartmentServiceGroupForm = () => ({
  type: CLEAR_APARTMENT_SERVICE_GROUP_FORM,
});
