export const SEND_APARTMENT_TRANSLATIONS_SUCCESSFUL = 'SEND_APARTMENT_TRANSLATIONS_SUCCESSFUL';
export const SEND_APARTMENT_TRANSLATIONS_UNSUCCESSFUL = 'SEND_APARTMENT_TRANSLATIONS_UNSUCCESSFUL';

export const DELETE_APARTMENT_TRANSLATIONS_SUCCESSFUL = 'DELETE_APARTMENT_TRANSLATIONS_SUCCESSFUL';
export const DELETE_APARTMENT_TRANSLATIONS_UNSUCCESSFUL = 'DELETE_APARTMENT_TRANSLATIONS_UNSUCCESSFUL';

export const REQUEST_SEND_APARTMENT_TRANSLATIONS = 'REQUEST_SEND_APARTMENT_TRANSLATIONS';
export const REQUEST_DELETE_APARTMENT_TRANSLATIONS = 'REQUEST_DELETE_APARTMENT_TRANSLATIONS';
export const REQUEST_GET_APARTMENT_TRANSLATIONS = 'REQUEST_GET_APARTMENT_TRANSLATIONS';
export const REQUEST_GET_APARTMENT_TRANSLATIONS_LIST = 'REQUEST_GET_APARTMENT_TRANSLATIONS_LIST';

export const GET_APARTMENT_TRANSLATIONS_SUCCESSFUL = 'GET_APARTMENT_TRANSLATIONS_SUCCESSFUL';
export const GET_APARTMENT_TRANSLATIONS_LIST_SUCCESSFUL = 'GET_APARTMENT_TRANSLATIONS_LIST_SUCCESSFUL';
export const GET_APARTMENT_TRANSLATIONS_UNSUCCESSFUL = 'GET_APARTMENT_TRANSLATIONS_UNSUCCESSFUL';
export const GET_APARTMENT_TRANSLATIONS_LIST_UNSUCCESSFUL = 'GET_APARTMENT_TRANSLATIONS_LIST_UNSUCCESSFUL';

export const EDIT_APARTMENT_TRANSLATIONS_FORM = 'EDIT_APARTMENT_TRANSLATIONS_FORM';
export const CLEAR_APARTMENT_TRANSLATIONS_FORM = 'CLEAR_APARTMENT_TRANSLATIONS_FORM';

// Action creators

export const sendApartmentTranslationsSuccessful = () => ({
  type: SEND_APARTMENT_TRANSLATIONS_SUCCESSFUL,
});

export const sendApartmentTranslationsUnsuccessful = () => ({
  type: SEND_APARTMENT_TRANSLATIONS_UNSUCCESSFUL,
});

export const requestSendApartmentTranslations = () => ({
  type: REQUEST_SEND_APARTMENT_TRANSLATIONS,
});

export const deleteApartmentTranslationsSuccessful = slug => ({
  type: DELETE_APARTMENT_TRANSLATIONS_SUCCESSFUL,
  slug,
});

export const deleteApartmentTranslationsUnsuccessful = () => ({
  type: DELETE_APARTMENT_TRANSLATIONS_UNSUCCESSFUL,
});

export const requestDeleteApartmentTranslations = slug => ({
  type: REQUEST_DELETE_APARTMENT_TRANSLATIONS,
  slug,
});

export const requestGetApartmentTranslations = slug => ({
  type: REQUEST_GET_APARTMENT_TRANSLATIONS,
  slug,
});

export const requestGetApartmentTranslationsList = () => ({
  type: REQUEST_GET_APARTMENT_TRANSLATIONS_LIST,
});

export const getApartmentTranslationsSuccessful = payload => ({
  type: GET_APARTMENT_TRANSLATIONS_SUCCESSFUL,
  payload,
});

export const getApartmentTranslationsListSuccessful = payload => ({
  type: GET_APARTMENT_TRANSLATIONS_LIST_SUCCESSFUL,
  payload,
});

export const getApartmentTranslationsUnsuccessful = () => ({
  type: GET_APARTMENT_TRANSLATIONS_UNSUCCESSFUL,
});

export const getApartmentTranslationsListUnsuccessful = () => ({
  type: GET_APARTMENT_TRANSLATIONS_LIST_UNSUCCESSFUL,
});

export const editApartmentTranslationsForm = (field, value) => ({
  type: EDIT_APARTMENT_TRANSLATIONS_FORM,
  field,
  value,
});

export const clearApartmentTranslationsForm = () => ({
  type: CLEAR_APARTMENT_TRANSLATIONS_FORM,
});
