import {
  editLanguageForm,
  EDIT_LANGUAGE_FORM,
  sendLanguageSuccessful,
  SEND_LANGUAGE_SUCCESSFUL,
  sendLanguageUnsuccessful,
  SEND_LANGUAGE_UNSUCCESSFUL,
  requestSendLanguage,
  REQUEST_SEND_LANGUAGE,
  getLanguageSuccessful,
  GET_LANGUAGE_SUCCESSFUL,
  getLanguageUnsuccessful,
  GET_LANGUAGE_UNSUCCESSFUL,
  requestGetLanguage,
  REQUEST_GET_LANGUAGE,
  getLanguagesListSuccessful,
  GET_LANGUAGES_LIST_SUCCESSFUL,
  getLanguagesListUnsuccessful,
  GET_LANGUAGES_LIST_UNSUCCESSFUL,
  requestGetLanguagesList,
  REQUEST_GET_LANGUAGES_LIST,
  setLanguageData,
  SET_LANGUAGE_DATA,
  clearLanguageForm,
  CLEAR_LANGUAGE_FORM,
} from '../languageActions';

describe('languageActions', () => {
  it('should create an action to editLanguage form ', () => {
    const expectedAction = {
      type: EDIT_LANGUAGE_FORM,
    };
    expect(editLanguageForm()).toEqual(expectedAction);
  });

  it('should create an action to sendLanguageSuccessful', () => {
    const expectedAction = {
      type: SEND_LANGUAGE_SUCCESSFUL,
    };
    expect(sendLanguageSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendLanguageUnsuccessful', () => {
    const expectedAction = {
      type: SEND_LANGUAGE_UNSUCCESSFUL,
    };
    expect(sendLanguageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendLanguage', () => {
    const expectedAction = {
      type: REQUEST_SEND_LANGUAGE,
    };
    expect(requestSendLanguage()).toEqual(expectedAction);
  });

  it('should create an action to getLanguageSuccessful', () => {
    const expectedAction = {
      type: GET_LANGUAGE_SUCCESSFUL,
    };
    expect(getLanguageSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getLanguageUnsuccessful', () => {
    const expectedAction = {
      type: GET_LANGUAGE_UNSUCCESSFUL,
    };
    expect(getLanguageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetLanguage', () => {
    const expectedAction = {
      type: REQUEST_GET_LANGUAGE,
      slug: 'exampleSlug',
    };
    expect(requestGetLanguage('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getLanguagesListSuccessful', () => {
    const expectedAction = {
      type: GET_LANGUAGES_LIST_SUCCESSFUL,
    };
    expect(getLanguagesListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getLanguagesListUnsuccessful', () => {
    const expectedAction = {
      type: GET_LANGUAGES_LIST_UNSUCCESSFUL,
    };
    expect(getLanguagesListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetLanguagesList', () => {
    const expectedAction = {
      type: REQUEST_GET_LANGUAGES_LIST,
    };
    expect(requestGetLanguagesList()).toEqual(expectedAction);
  });

  it('should create an action to setLanguageData', () => {
    const expectedAction = {
      type: SET_LANGUAGE_DATA,
    };
    expect(setLanguageData()).toEqual(expectedAction);
  });

  it('should create an action to clearLanguageForm', () => {
    const expectedAction = {
      type: CLEAR_LANGUAGE_FORM,
    };
    expect(clearLanguageForm()).toEqual(expectedAction);
  });
});
