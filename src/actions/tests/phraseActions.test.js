import * as phraseActions from '../phraseActions';

describe('phraseActions', () => {
  it('should create an action to editPhrase form ', () => {
    const expectedAction = {
      type: phraseActions.EDIT_PHRASE_FORM,
    };
    expect(phraseActions.editPhraseForm()).toEqual(expectedAction);
  });

  it('should create an action to sendPhraseSuccessful', () => {
    const expectedAction = {
      type: phraseActions.SEND_PHRASE_SUCCESSFUL,
    };
    expect(phraseActions.sendPhraseSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendPhraseUnsuccessful', () => {
    const expectedAction = {
      type: phraseActions.SEND_PHRASE_UNSUCCESSFUL,
    };
    expect(phraseActions.sendPhraseUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendPhrase', () => {
    const expectedAction = {
      type: phraseActions.REQUEST_SEND_PHRASE,
    };
    expect(phraseActions.requestSendPhrase()).toEqual(expectedAction);
  });

  it('should create an action to deletePhraseSuccessful', () => {
    const expectedAction = {
      type: phraseActions.DELETE_PHRASE_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(phraseActions.deletePhraseSuccessful('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to deletePhraseUnsuccessful', () => {
    const expectedAction = {
      type: phraseActions.DELETE_PHRASE_UNSUCCESSFUL,
    };
    expect(phraseActions.deletePhraseUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestDeletePhrase', () => {
    const expectedAction = {
      type: phraseActions.REQUEST_DELETE_PHRASE,
      slug: 'exampleSlug',
    };
    expect(phraseActions.requestDeletePhrase('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getPhraseSuccessful', () => {
    const expectedAction = {
      type: phraseActions.GET_PHRASE_SUCCESSFUL,
    };
    expect(phraseActions.getPhraseSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getPhraseUnsuccessful', () => {
    const expectedAction = {
      type: phraseActions.GET_PHRASE_UNSUCCESSFUL,
    };
    expect(phraseActions.getPhraseUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetPhrase', () => {
    const expectedAction = {
      type: phraseActions.REQUEST_GET_PHRASE,
      slug: 'exampleSlug',
    };
    expect(phraseActions.requestGetPhrase('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getPhrasesListSuccessful', () => {
    const expectedAction = {
      type: phraseActions.GET_PHRASES_LIST_SUCCESSFUL,
    };
    expect(phraseActions.getPhrasesListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getPhrasesListUnsuccessful', () => {
    const expectedAction = {
      type: phraseActions.GET_PHRASES_LIST_UNSUCCESSFUL,
    };
    expect(phraseActions.getPhrasesListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetPhrasesList', () => {
    const expectedAction = {
      type: phraseActions.REQUEST_GET_PHRASES_LIST,
    };
    expect(phraseActions.requestGetPhrasesList()).toEqual(expectedAction);
  });

  it('should create an action to setPhraseData', () => {
    const expectedAction = {
      type: phraseActions.SET_PHRASE_DATA,
    };
    expect(phraseActions.setPhraseData()).toEqual(expectedAction);
  });

  it('should create an action to clearPhraseForm', () => {
    const expectedAction = {
      type: phraseActions.CLEAR_PHRASE_FORM,
    };
    expect(phraseActions.clearPhraseForm()).toEqual(expectedAction);
  });
});
