export const SEND_APARTMENT_FACILITY_GROUP_SUCCESSFUL = 'SEND_APARTMENT_FACILITY_GROUP_SUCCESSFUL';
export const SEND_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL = 'SEND_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL';

export const DELETE_APARTMENT_FACILITY_GROUP_SUCCESSFUL = 'DELETE_APARTMENT_FACILITY_GROUP_SUCCESSFUL';
export const DELETE_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL = 'DELETE_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL';

export const REQUEST_SEND_APARTMENT_FACILITY_GROUP = 'REQUEST_SEND_APARTMENT_FACILITY_GROUP';
export const REQUEST_DELETE_APARTMENT_FACILITY_GROUP = 'REQUEST_DELETE_APARTMENT_FACILITY_GROUP';
export const REQUEST_GET_APARTMENT_FACILITY_GROUP = 'REQUEST_GET_APARTMENT_FACILITY_GROUP';
export const REQUEST_GET_APARTMENT_FACILITY_GROUP_LIST = 'REQUEST_GET_APARTMENT_FACILITY_GROUP_LIST';

export const GET_APARTMENT_FACILITY_GROUP_SUCCESSFUL = 'GET_APARTMENT_FACILITY_GROUP_SUCCESSFUL';
export const GET_APARTMENT_FACILITY_GROUP_LIST_SUCCESSFUL = 'GET_APARTMENT_FACILITY_GROUP_LIST_SUCCESSFUL';
export const GET_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL = 'GET_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL';
export const GET_APARTMENT_FACILITY_GROUP_LIST_UNSUCCESSFUL = 'GET_APARTMENT_FACILITY_GROUP_LIST_UNSUCCESSFUL';

export const EDIT_APARTMENT_FACILITY_GROUP_FORM = 'EDIT_APARTMENT_FACILITY_GROUP_FORM';
export const CLEAR_APARTMENT_FACILITY_GROUP_FORM = 'CLEAR_APARTMENT_FACILITY_GROUP_FORM';

// Action creators

export const sendApartmentFacilityGroupSuccessful = () => ({
  type: SEND_APARTMENT_FACILITY_GROUP_SUCCESSFUL,
});

export const sendApartmentFacilityGroupUnsuccessful = () => ({
  type: SEND_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL,
});

export const requestSendApartmentFacilityGroup = () => ({
  type: REQUEST_SEND_APARTMENT_FACILITY_GROUP,
});

export const deleteApartmentFacilityGroupSuccessful = slug => ({
  type: DELETE_APARTMENT_FACILITY_GROUP_SUCCESSFUL,
  slug,
});

export const deleteApartmentFacilityGroupUnsuccessful = () => ({
  type: DELETE_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL,
});

export const requestDeleteApartmentFacilityGroup = slug => ({
  type: REQUEST_DELETE_APARTMENT_FACILITY_GROUP,
  slug,
});

export const requestGetApartmentFacilityGroup = slug => ({
  type: REQUEST_GET_APARTMENT_FACILITY_GROUP,
  slug,
});

export const requestGetApartmentFacilityGroupList = () => ({
  type: REQUEST_GET_APARTMENT_FACILITY_GROUP_LIST,
});

export const getApartmentFacilityGroupSuccessful = payload => ({
  type: GET_APARTMENT_FACILITY_GROUP_SUCCESSFUL,
  payload,
});

export const getApartmentFacilityGroupListSuccessful = payload => ({
  type: GET_APARTMENT_FACILITY_GROUP_LIST_SUCCESSFUL,
  payload,
});

export const getApartmentFacilityGroupUnsuccessful = () => ({
  type: GET_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL,
});

export const getApartmentFacilityGroupListUnsuccessful = () => ({
  type: GET_APARTMENT_FACILITY_GROUP_LIST_UNSUCCESSFUL,
});

export const editApartmentFacilityGroupForm = (field, value) => ({
  type: EDIT_APARTMENT_FACILITY_GROUP_FORM,
  field,
  value,
});

export const clearApartmentFacilityGroupForm = () => ({
  type: CLEAR_APARTMENT_FACILITY_GROUP_FORM,
});
