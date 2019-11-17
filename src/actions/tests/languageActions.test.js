import * as languageActions from '../languageActions';

describe('languageActions', () => {
  it('should create an action to editLanguage form ', () => {
    const expectedAction = {
      type: languageActions.EDIT_LANGUAGE_FORM,
    };
    expect(languageActions.editLanguageForm()).toEqual(expectedAction);
  });

  it('should create an action to sendLanguageSuccessful', () => {
    const expectedAction = {
      type: languageActions.SEND_LANGUAGE_SUCCESSFUL,
    };
    expect(languageActions.sendLanguageSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendLanguageUnsuccessful', () => {
    const expectedAction = {
      type: languageActions.SEND_LANGUAGE_UNSUCCESSFUL,
    };
    expect(languageActions.sendLanguageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendLanguage', () => {
    const expectedAction = {
      type: languageActions.REQUEST_SEND_LANGUAGE,
    };
    expect(languageActions.requestSendLanguage()).toEqual(expectedAction);
  });

  it('should create an action to deleteLanguageSuccessful', () => {
    const expectedAction = {
      type: languageActions.DELETE_LANGUAGE_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(languageActions.deleteLanguageSuccessful('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to deleteLanguageUnsuccessful', () => {
    const expectedAction = {
      type: languageActions.DELETE_LANGUAGE_UNSUCCESSFUL,
    };
    expect(languageActions.deleteLanguageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestDeleteLanguage', () => {
    const expectedAction = {
      type: languageActions.REQUEST_DELETE_LANGUAGE,
      slug: 'exampleSlug',
    };
    expect(languageActions.requestDeleteLanguage('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getLanguageSuccessful', () => {
    const expectedAction = {
      type: languageActions.GET_LANGUAGE_SUCCESSFUL,
    };
    expect(languageActions.getLanguageSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getLanguageUnsuccessful', () => {
    const expectedAction = {
      type: languageActions.GET_LANGUAGE_UNSUCCESSFUL,
    };
    expect(languageActions.getLanguageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetLanguage', () => {
    const expectedAction = {
      type: languageActions.REQUEST_GET_LANGUAGE,
      slug: 'exampleSlug',
    };
    expect(languageActions.requestGetLanguage('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getLanguagesListSuccessful', () => {
    const expectedAction = {
      type: languageActions.GET_LANGUAGES_LIST_SUCCESSFUL,
    };
    expect(languageActions.getLanguagesListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getLanguagesListUnsuccessful', () => {
    const expectedAction = {
      type: languageActions.GET_LANGUAGES_LIST_UNSUCCESSFUL,
    };
    expect(languageActions.getLanguagesListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetLanguagesList', () => {
    const expectedAction = {
      type: languageActions.REQUEST_GET_LANGUAGES_LIST,
    };
    expect(languageActions.requestGetLanguagesList()).toEqual(expectedAction);
  });

  it('should create an action to setLanguageData', () => {
    const expectedAction = {
      type: languageActions.SET_LANGUAGE_DATA,
    };
    expect(languageActions.setLanguageData()).toEqual(expectedAction);
  });

  it('should create an action to clearLanguageForm', () => {
    const expectedAction = {
      type: languageActions.CLEAR_LANGUAGE_FORM,
    };
    expect(languageActions.clearLanguageForm()).toEqual(expectedAction);
  });
});
