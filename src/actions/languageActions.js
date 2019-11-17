export const SEND_LANGUAGE_SUCCESSFUL = 'SEND_LANGUAGE_SUCCESSFUL';
export const SEND_LANGUAGE_UNSUCCESSFUL = 'SEND_LANGUAGE_UNSUCCESSFUL';
export const REQUEST_SEND_LANGUAGE = 'REQUEST_SEND_LANGUAGE';
export const DELETE_LANGUAGE_SUCCESSFUL = 'DELETE_LANGUAGE_SUCCESSFUL';
export const DELETE_LANGUAGE_UNSUCCESSFUL = 'DELETE_LANGUAGE_UNSUCCESSFUL';
export const REQUEST_DELETE_LANGUAGE = 'REQUEST_DELETE_LANGUAGE';
export const EDIT_LANGUAGE_FORM = 'EDIT_LANGUAGE_FORM';
export const GET_LANGUAGE_SUCCESSFUL = 'GET_LANGUAGE_SUCCESSFUL';
export const GET_LANGUAGES_LIST_SUCCESSFUL = 'GET_LANGUAGES_LIST_SUCCESSFUL';
export const GET_LANGUAGE_UNSUCCESSFUL = 'GET_LANGUAGE_UNSUCCESSFUL';
export const REQUEST_GET_LANGUAGE = 'REQUEST_GET_LANGUAGE';
export const SET_LANGUAGE_DATA = 'SET_LANGUAGE_DATA';
export const REQUEST_GET_LANGUAGES_LIST = 'REQUEST_GET_LANGUAGES_LIST';
export const GET_LANGUAGES_LIST_UNSUCCESSFUL = 'GET_LANGUAGES_LIST_UNSUCCESSFUL';
export const CLEAR_LANGUAGE_FORM = 'CLEAR_LANGUAGE_FORM';

export const editLanguageForm = (field, value) => ({
  type: EDIT_LANGUAGE_FORM,
  field,
  value,
});

export const sendLanguageSuccessful = () => ({
  type: SEND_LANGUAGE_SUCCESSFUL,
});

export const sendLanguageUnsuccessful = () => ({
  type: SEND_LANGUAGE_UNSUCCESSFUL,
});

export const requestSendLanguage = () => ({
  type: REQUEST_SEND_LANGUAGE,
});

export const deleteLanguageSuccessful = slug => ({
  type: DELETE_LANGUAGE_SUCCESSFUL,
  slug,
});

export const deleteLanguageUnsuccessful = () => ({
  type: DELETE_LANGUAGE_UNSUCCESSFUL,
});

export const requestDeleteLanguage = slug => ({
  type: REQUEST_DELETE_LANGUAGE,
  slug,
});

export const getLanguageSuccessful = payload => ({
  type: GET_LANGUAGE_SUCCESSFUL,
  payload,
});

export const getLanguageUnsuccessful = () => ({
  type: GET_LANGUAGE_UNSUCCESSFUL,
});

export const requestGetLanguage = slug => ({
  type: REQUEST_GET_LANGUAGE,
  slug,
});

export const getLanguagesListSuccessful = payload => ({
  type: GET_LANGUAGES_LIST_SUCCESSFUL,
  payload,
});

export const getLanguagesListUnsuccessful = () => ({
  type: GET_LANGUAGES_LIST_UNSUCCESSFUL,
});

export const requestGetLanguagesList = () => ({
  type: REQUEST_GET_LANGUAGES_LIST,
});

export const setLanguageData = payload => ({
  type: SET_LANGUAGE_DATA,
  payload,
});

export const clearLanguageForm = () => ({
  type: CLEAR_LANGUAGE_FORM,
});
