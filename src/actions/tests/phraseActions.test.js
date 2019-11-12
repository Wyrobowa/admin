import {
  editPhraseForm,
  EDIT_PHRASE_FORM,
  sendPhraseSuccessful,
  SEND_PHRASE_SUCCESSFUL,
  sendPhraseUnsuccessful,
  SEND_PHRASE_UNSUCCESSFUL,
  requestSendPhrase,
  REQUEST_SEND_PHRASE,
  getPhraseSuccessful,
  GET_PHRASE_SUCCESSFUL,
  getPhraseUnsuccessful,
  GET_PHRASE_UNSUCCESSFUL,
  requestGetPhrase,
  REQUEST_GET_PHRASE,
  getPhrasesListSuccessful,
  GET_PHRASES_LIST_SUCCESSFUL,
  getPhrasesListUnsuccessful,
  GET_PHRASES_LIST_UNSUCCESSFUL,
  requestGetPhrasesList,
  REQUEST_GET_PHRASES_LIST,
  setPhraseData,
  SET_PHRASE_DATA,
  clearPhraseForm,
  CLEAR_PHRASE_FORM,
} from '../phraseActions';

describe('phraseActions', () => {
  it('should create an action to editPhrase form ', () => {
    const expectedAction = {
      type: EDIT_PHRASE_FORM,
    };
    expect(editPhraseForm()).toEqual(expectedAction);
  });

  it('should create an action to sendPhraseSuccessful', () => {
    const expectedAction = {
      type: SEND_PHRASE_SUCCESSFUL,
    };
    expect(sendPhraseSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendPhraseUnsuccessful', () => {
    const expectedAction = {
      type: SEND_PHRASE_UNSUCCESSFUL,
    };
    expect(sendPhraseUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendPhrase', () => {
    const expectedAction = {
      type: REQUEST_SEND_PHRASE,
    };
    expect(requestSendPhrase()).toEqual(expectedAction);
  });

  it('should create an action to getPhraseSuccessful', () => {
    const expectedAction = {
      type: GET_PHRASE_SUCCESSFUL,
    };
    expect(getPhraseSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getPhraseUnsuccessful', () => {
    const expectedAction = {
      type: GET_PHRASE_UNSUCCESSFUL,
    };
    expect(getPhraseUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetPhrase', () => {
    const expectedAction = {
      type: REQUEST_GET_PHRASE,
      slug: 'exampleSlug',
    };
    expect(requestGetPhrase('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getPhrasesListSuccessful', () => {
    const expectedAction = {
      type: GET_PHRASES_LIST_SUCCESSFUL,
    };
    expect(getPhrasesListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getPhrasesListUnsuccessful', () => {
    const expectedAction = {
      type: GET_PHRASES_LIST_UNSUCCESSFUL,
    };
    expect(getPhrasesListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetPhrasesList', () => {
    const expectedAction = {
      type: REQUEST_GET_PHRASES_LIST,
    };
    expect(requestGetPhrasesList()).toEqual(expectedAction);
  });

  it('should create an action to setPhraseData', () => {
    const expectedAction = {
      type: SET_PHRASE_DATA,
    };
    expect(setPhraseData()).toEqual(expectedAction);
  });

  it('should create an action to clearPhraseForm', () => {
    const expectedAction = {
      type: CLEAR_PHRASE_FORM,
    };
    expect(clearPhraseForm()).toEqual(expectedAction);
  });
});
