export const SEND_TRANSLATION_SUCCESSFUL = 'SEND_TRANSLATION_SUCCESSFUL';
export const SEND_TRANSLATION_UNSUCCESSFUL = 'SEND_TRANSLATION_UNSUCCESSFUL';
export const REQUEST_SEND_TRANSLATION = 'REQUEST_SEND_TRANSLATION';
export const DELETE_TRANSLATION_SUCCESSFUL = 'DELETE_TRANSLATION_SUCCESSFUL';
export const DELETE_TRANSLATION_UNSUCCESSFUL = 'DELETE_TRANSLATION_UNSUCCESSFUL';
export const REQUEST_DELETE_TRANSLATION = 'REQUEST_DELETE_TRANSLATION';
export const EDIT_TRANSLATION_FORM = 'EDIT_TRANSLATION_FORM';
export const GET_TRANSLATION_SUCCESSFUL = 'GET_TRANSLATION_SUCCESSFUL';
export const GET_TRANSLATIONS_LIST_SUCCESSFUL = 'GET_TRANSLATIONS_LIST_SUCCESSFUL';
export const GET_TRANSLATION_UNSUCCESSFUL = 'GET_TRANSLATION_UNSUCCESSFUL';
export const REQUEST_GET_TRANSLATION = 'REQUEST_GET_TRANSLATION';
export const SET_TRANSLATION_DATA = 'SET_TRANSLATION_DATA';
export const REQUEST_GET_TRANSLATIONS_LIST = 'REQUEST_GET_TRANSLATIONS_LIST';
export const GET_TRANSLATIONS_LIST_UNSUCCESSFUL = 'GET_TRANSLATIONS_LIST_UNSUCCESSFUL';
export const CLEAR_TRANSLATION_FORM = 'CLEAR_TRANSLATION_FORM';

export const editTranslationForm = (field, value) => ({
  type: EDIT_TRANSLATION_FORM,
  field,
  value,
});

export const sendTranslationSuccessful = () => ({
  type: SEND_TRANSLATION_SUCCESSFUL,
});

export const sendTranslationUnsuccessful = () => ({
  type: SEND_TRANSLATION_UNSUCCESSFUL,
});

export const requestSendTranslation = () => ({
  type: REQUEST_SEND_TRANSLATION,
});

export const deleteTranslationSuccessful = slug => ({
  type: DELETE_TRANSLATION_SUCCESSFUL,
  slug,
});

export const deleteTranslationUnsuccessful = () => ({
  type: DELETE_TRANSLATION_UNSUCCESSFUL,
});

export const requestDeleteTranslation = slug => ({
  type: REQUEST_DELETE_TRANSLATION,
  slug,
});

export const getTranslationSuccessful = payload => ({
  type: GET_TRANSLATION_SUCCESSFUL,
  payload,
});

export const getTranslationUnsuccessful = () => ({
  type: GET_TRANSLATION_UNSUCCESSFUL,
});

export const requestGetTranslation = slug => ({
  type: REQUEST_GET_TRANSLATION,
  slug,
});

export const getTranslationsListSuccessful = payload => ({
  type: GET_TRANSLATIONS_LIST_SUCCESSFUL,
  payload,
});

export const getTranslationsListUnsuccessful = () => ({
  type: GET_TRANSLATIONS_LIST_UNSUCCESSFUL,
});

export const requestGetTranslationsList = () => ({
  type: REQUEST_GET_TRANSLATIONS_LIST,
});

export const setTranslationData = payload => ({
  type: SET_TRANSLATION_DATA,
  payload,
});

export const clearTranslationForm = () => ({
  type: CLEAR_TRANSLATION_FORM,
});
