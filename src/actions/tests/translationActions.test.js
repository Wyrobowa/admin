import {
  editTranslationForm,
  EDIT_TRANSLATION_FORM,
  sendTranslationSuccessful,
  SEND_TRANSLATION_SUCCESSFUL,
  sendTranslationUnsuccessful,
  SEND_TRANSLATION_UNSUCCESSFUL,
  requestSendTranslation,
  REQUEST_SEND_TRANSLATION,
  getTranslationSuccessful,
  GET_TRANSLATION_SUCCESSFUL,
  getTranslationUnsuccessful,
  GET_TRANSLATION_UNSUCCESSFUL,
  requestGetTranslation,
  REQUEST_GET_TRANSLATION,
  getTranslationsListSuccessful,
  GET_TRANSLATIONS_LIST_SUCCESSFUL,
  getTranslationsListUnsuccessful,
  GET_TRANSLATIONS_LIST_UNSUCCESSFUL,
  requestGetTranslationsList,
  REQUEST_GET_TRANSLATIONS_LIST,
  setTranslationData,
  SET_TRANSLATION_DATA,
  clearTranslationForm,
  CLEAR_TRANSLATION_FORM,
} from '../translationActions';

describe('translationActions', () => {
  it('should create an action to editTranslation form ', () => {
    const expectedAction = {
      type: EDIT_TRANSLATION_FORM,
    };
    expect(editTranslationForm()).toEqual(expectedAction);
  });

  it('should create an action to sendTranslationSuccessful', () => {
    const expectedAction = {
      type: SEND_TRANSLATION_SUCCESSFUL,
    };
    expect(sendTranslationSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendTranslationUnsuccessful', () => {
    const expectedAction = {
      type: SEND_TRANSLATION_UNSUCCESSFUL,
    };
    expect(sendTranslationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendTranslation', () => {
    const expectedAction = {
      type: REQUEST_SEND_TRANSLATION,
    };
    expect(requestSendTranslation()).toEqual(expectedAction);
  });

  it('should create an action to getTranslationSuccessful', () => {
    const expectedAction = {
      type: GET_TRANSLATION_SUCCESSFUL,
    };
    expect(getTranslationSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getTranslationUnsuccessful', () => {
    const expectedAction = {
      type: GET_TRANSLATION_UNSUCCESSFUL,
    };
    expect(getTranslationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetTranslation', () => {
    const expectedAction = {
      type: REQUEST_GET_TRANSLATION,
      slug: 'exampleSlug',
    };
    expect(requestGetTranslation('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getTranslationsListSuccessful', () => {
    const expectedAction = {
      type: GET_TRANSLATIONS_LIST_SUCCESSFUL,
    };
    expect(getTranslationsListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getTranslationsListUnsuccessful', () => {
    const expectedAction = {
      type: GET_TRANSLATIONS_LIST_UNSUCCESSFUL,
    };
    expect(getTranslationsListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetTranslationsList', () => {
    const expectedAction = {
      type: REQUEST_GET_TRANSLATIONS_LIST,
    };
    expect(requestGetTranslationsList()).toEqual(expectedAction);
  });

  it('should create an action to setTranslationData', () => {
    const expectedAction = {
      type: SET_TRANSLATION_DATA,
    };
    expect(setTranslationData()).toEqual(expectedAction);
  });

  it('should create an action to clearTranslationForm', () => {
    const expectedAction = {
      type: CLEAR_TRANSLATION_FORM,
    };
    expect(clearTranslationForm()).toEqual(expectedAction);
  });
});
