import * as translationActions from '../translationActions';

describe('translationActions', () => {
  it('should create an action to editTranslation form ', () => {
    const expectedAction = {
      type: translationActions.EDIT_TRANSLATION_FORM,
    };
    expect(translationActions.editTranslationForm()).toEqual(expectedAction);
  });

  it('should create an action to sendTranslationSuccessful', () => {
    const expectedAction = {
      type: translationActions.SEND_TRANSLATION_SUCCESSFUL,
    };
    expect(translationActions.sendTranslationSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendTranslationUnsuccessful', () => {
    const expectedAction = {
      type: translationActions.SEND_TRANSLATION_UNSUCCESSFUL,
    };
    expect(translationActions.sendTranslationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendTranslation', () => {
    const expectedAction = {
      type: translationActions.REQUEST_SEND_TRANSLATION,
    };
    expect(translationActions.requestSendTranslation()).toEqual(expectedAction);
  });

  it('should create an action to deleteTranslationSuccessful', () => {
    const expectedAction = {
      type: translationActions.DELETE_TRANSLATION_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(translationActions.deleteTranslationSuccessful('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to deleteTranslationUnsuccessful', () => {
    const expectedAction = {
      type: translationActions.DELETE_TRANSLATION_UNSUCCESSFUL,
    };
    expect(translationActions.deleteTranslationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestDeleteTranslation', () => {
    const expectedAction = {
      type: translationActions.REQUEST_DELETE_TRANSLATION,
      slug: 'exampleSlug',
    };
    expect(translationActions.requestDeleteTranslation('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getTranslationSuccessful', () => {
    const expectedAction = {
      type: translationActions.GET_TRANSLATION_SUCCESSFUL,
    };
    expect(translationActions.getTranslationSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getTranslationUnsuccessful', () => {
    const expectedAction = {
      type: translationActions.GET_TRANSLATION_UNSUCCESSFUL,
    };
    expect(translationActions.getTranslationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetTranslation', () => {
    const expectedAction = {
      type: translationActions.REQUEST_GET_TRANSLATION,
      slug: 'exampleSlug',
    };
    expect(translationActions.requestGetTranslation('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getTranslationsListSuccessful', () => {
    const expectedAction = {
      type: translationActions.GET_TRANSLATIONS_LIST_SUCCESSFUL,
    };
    expect(translationActions.getTranslationsListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getTranslationsListUnsuccessful', () => {
    const expectedAction = {
      type: translationActions.GET_TRANSLATIONS_LIST_UNSUCCESSFUL,
    };
    expect(translationActions.getTranslationsListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetTranslationsList', () => {
    const expectedAction = {
      type: translationActions.REQUEST_GET_TRANSLATIONS_LIST,
    };
    expect(translationActions.requestGetTranslationsList()).toEqual(expectedAction);
  });

  it('should create an action to setTranslationData', () => {
    const expectedAction = {
      type: translationActions.SET_TRANSLATION_DATA,
    };
    expect(translationActions.setTranslationData()).toEqual(expectedAction);
  });

  it('should create an action to clearTranslationForm', () => {
    const expectedAction = {
      type: translationActions.CLEAR_TRANSLATION_FORM,
    };
    expect(translationActions.clearTranslationForm()).toEqual(expectedAction);
  });
});
