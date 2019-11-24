export const SEND_APARTMENT_FACILITY_SUCCESSFUL = 'SEND_APARTMENT_FACILITY_SUCCESSFUL';
export const SEND_APARTMENT_FACILITY_UNSUCCESSFUL = 'SEND_APARTMENT_FACILITY_UNSUCCESSFUL';

export const DELETE_APARTMENT_FACILITY_SUCCESSFUL = 'DELETE_APARTMENT_FACILITY_SUCCESSFUL';
export const DELETE_APARTMENT_FACILITY_UNSUCCESSFUL = 'DELETE_APARTMENT_FACILITY_UNSUCCESSFUL';

export const REQUEST_SEND_APARTMENT_FACILITY = 'REQUEST_SEND_APARTMENT_FACILITY';
export const REQUEST_DELETE_APARTMENT_FACILITY = 'REQUEST_DELETE_APARTMENT_FACILITY';
export const REQUEST_GET_APARTMENT_FACILITY = 'REQUEST_GET_APARTMENT_FACILITY';
export const REQUEST_GET_APARTMENT_FACILITY_LIST = 'REQUEST_GET_APARTMENT_FACILITY_LIST';

export const GET_APARTMENT_FACILITY_SUCCESSFUL = 'GET_APARTMENT_FACILITY_SUCCESSFUL';
export const GET_APARTMENT_FACILITY_LIST_SUCCESSFUL = 'GET_APARTMENT_FACILITY_LIST_SUCCESSFUL';
export const GET_APARTMENT_FACILITY_UNSUCCESSFUL = 'GET_APARTMENT_FACILITY_UNSUCCESSFUL';
export const GET_APARTMENT_FACILITY_LIST_UNSUCCESSFUL = 'GET_APARTMENT_FACILITY_LIST_UNSUCCESSFUL';

export const EDIT_APARTMENT_FACILITY_FORM = 'EDIT_APARTMENT_FACILITY_FORM';
export const CLEAR_APARTMENT_FACILITY_FORM = 'CLEAR_APARTMENT_FACILITY_FORM';

// Action creators

export const sendApartmentFacilitySuccessful = () => ({
  type: SEND_APARTMENT_FACILITY_SUCCESSFUL,
});

export const sendApartmentFacilityUnsuccessful = () => ({
  type: SEND_APARTMENT_FACILITY_UNSUCCESSFUL,
});

export const requestSendApartmentFacility = () => ({
  type: REQUEST_SEND_APARTMENT_FACILITY,
});

export const deleteApartmentFacilitySuccessful = slug => ({
  type: DELETE_APARTMENT_FACILITY_SUCCESSFUL,
  slug,
});

export const deleteApartmentFacilityUnsuccessful = () => ({
  type: DELETE_APARTMENT_FACILITY_UNSUCCESSFUL,
});

export const requestDeleteApartmentFacility = slug => ({
  type: REQUEST_DELETE_APARTMENT_FACILITY,
  slug,
});

export const requestGetApartmentFacility = slug => ({
  type: REQUEST_GET_APARTMENT_FACILITY,
  slug,
});

export const requestGetApartmentFacilityList = () => ({
  type: REQUEST_GET_APARTMENT_FACILITY_LIST,
});

export const getApartmentFacilitySuccessful = payload => ({
  type: GET_APARTMENT_FACILITY_SUCCESSFUL,
  payload,
});

export const getApartmentFacilityListSuccessful = payload => ({
  type: GET_APARTMENT_FACILITY_LIST_SUCCESSFUL,
  payload,
});

export const getApartmentFacilityUnsuccessful = () => ({
  type: GET_APARTMENT_FACILITY_UNSUCCESSFUL,
});

export const getApartmentFacilityListUnsuccessful = () => ({
  type: GET_APARTMENT_FACILITY_LIST_UNSUCCESSFUL,
});

export const editApartmentFacilityForm = (field, value) => ({
  type: EDIT_APARTMENT_FACILITY_FORM,
  field,
  value,
});

export const clearApartmentFacilityForm = () => ({
  type: CLEAR_APARTMENT_FACILITY_FORM,
});
