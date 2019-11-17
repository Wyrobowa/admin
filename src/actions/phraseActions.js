export const SEND_PHRASE_SUCCESSFUL = 'SEND_PHRASE_SUCCESSFUL';
export const SEND_PHRASE_UNSUCCESSFUL = 'SEND_PHRASE_UNSUCCESSFUL';
export const REQUEST_SEND_PHRASE = 'REQUEST_SEND_PHRASE';
export const DELETE_PHRASE_SUCCESSFUL = 'DELETE_PHRASE_SUCCESSFUL';
export const DELETE_PHRASE_UNSUCCESSFUL = 'DELETE_PHRASE_UNSUCCESSFUL';
export const REQUEST_DELETE_PHRASE = 'REQUEST_DELETE_PHRASE';
export const EDIT_PHRASE_FORM = 'EDIT_PHRASE_FORM';
export const GET_PHRASE_SUCCESSFUL = 'GET_PHRASE_SUCCESSFUL';
export const GET_PHRASES_LIST_SUCCESSFUL = 'GET_PHRASES_LIST_SUCCESSFUL';
export const GET_PHRASE_UNSUCCESSFUL = 'GET_PHRASE_UNSUCCESSFUL';
export const REQUEST_GET_PHRASE = 'REQUEST_GET_PHRASE';
export const SET_PHRASE_DATA = 'SET_PHRASE_DATA';
export const REQUEST_GET_PHRASES_LIST = 'REQUEST_GET_PHRASES_LIST';
export const GET_PHRASES_LIST_UNSUCCESSFUL = 'GET_PHRASES_LIST_UNSUCCESSFUL';
export const CLEAR_PHRASE_FORM = 'CLEAR_PHRASE_FORM';

export const editPhraseForm = (field, value) => ({
  type: EDIT_PHRASE_FORM,
  field,
  value,
});

export const sendPhraseSuccessful = () => ({
  type: SEND_PHRASE_SUCCESSFUL,
});

export const sendPhraseUnsuccessful = () => ({
  type: SEND_PHRASE_UNSUCCESSFUL,
});

export const requestSendPhrase = () => ({
  type: REQUEST_SEND_PHRASE,
});

export const deletePhraseSuccessful = slug => ({
  type: DELETE_PHRASE_SUCCESSFUL,
  slug,
});

export const deletePhraseUnsuccessful = () => ({
  type: DELETE_PHRASE_UNSUCCESSFUL,
});

export const requestDeletePhrase = slug => ({
  type: REQUEST_DELETE_PHRASE,
  slug,
});

export const getPhraseSuccessful = payload => ({
  type: GET_PHRASE_SUCCESSFUL,
  payload,
});

export const getPhraseUnsuccessful = () => ({
  type: GET_PHRASE_UNSUCCESSFUL,
});

export const requestGetPhrase = slug => ({
  type: REQUEST_GET_PHRASE,
  slug,
});

export const getPhrasesListSuccessful = payload => ({
  type: GET_PHRASES_LIST_SUCCESSFUL,
  payload,
});

export const getPhrasesListUnsuccessful = () => ({
  type: GET_PHRASES_LIST_UNSUCCESSFUL,
});

export const requestGetPhrasesList = () => ({
  type: REQUEST_GET_PHRASES_LIST,
});

export const setPhraseData = payload => ({
  type: SET_PHRASE_DATA,
  payload,
});

export const clearPhraseForm = () => ({
  type: CLEAR_PHRASE_FORM,
});
