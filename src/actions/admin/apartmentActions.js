export const SEND_APARTMENT_SUCCESSFUL = 'EDIT_APARTMENT_FORM';
export const SEND_APARTMENT_UNSUCCESSFUL = 'SEND_APARTMENT_UNSUCCESSFUL';
export const EDIT_APARTMENT_FORM = 'EDIT_APARTMENT_FORM';
export const REQUEST_SEND_APARTMENT = 'REQUEST_SEND_APARTMENT';

export const editApartment = (field, value) => ({
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
