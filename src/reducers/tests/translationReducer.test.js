import reducer from '../translationReducer';
import * as translationActions from '../../actions/translationActions';

const initialState = {
  text: '',
  language: '',
  phrase: '',
  slug: '',
};

describe('translation reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_TRANSLATION_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: translationActions.EDIT_TRANSLATION_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_TRANSLATION_FORM', () => {
    const changedState = {
      ...initialState,
      attributes: {
        ...initialState.attributes,
        additionalAttribute: '10',
      },
    };

    expect(reducer(initialState, {
      type: translationActions.EDIT_TRANSLATION_FORM,
      field: 'attributes.additionalAttribute',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle SET_TRANSLATION_DATA', () => {
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
      type: translationActions.SET_TRANSLATION_DATA,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_TRANSLATION_FORM', () => {
    expect(reducer(initialState, {
      type: translationActions.CLEAR_TRANSLATION_FORM,
    })).toEqual(initialState);
  });
});
