import reducer from '../phraseReducer';
import * as phraseActions from '../../actions/phraseActions';

const initialState = {
  text: '',
  _id: '',
};

describe('phrase reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_PHRASE_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: phraseActions.EDIT_PHRASE_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_PHRASE_FORM', () => {
    const changedState = {
      ...initialState,
      attributes: {
        ...initialState.attributes,
        additionalAttribute: '10',
      },
    };

    expect(reducer(initialState, {
      type: phraseActions.EDIT_PHRASE_FORM,
      field: 'attributes.additionalAttribute',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle SET_PHRASE_DATA', () => {
    const changedState = {
      ...initialState,
      name: 'nameFromPayload',
    };

    const payload = {
      data: {
        ...initialState,
        name: 'nameFromPayload',
      },
    };

    expect(reducer(initialState, {
      type: phraseActions.SET_PHRASE_DATA,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_PHRASE_FORM', () => {
    expect(reducer(initialState, {
      type: phraseActions.CLEAR_PHRASE_FORM,
    })).toEqual(initialState);
  });
});
