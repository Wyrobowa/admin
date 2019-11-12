import reducer from '../languageReducer';
import { EDIT_LANGUAGE_FORM, SET_LANGUAGE_DATA, CLEAR_LANGUAGE_FORM } from '../../actions/languageActions';

const initialState = {
  name: '',
  code: '',
};

describe('language reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_LANGUAGE_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: EDIT_LANGUAGE_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_LANGUAGE_FORM', () => {
    const changedState = {
      ...initialState,
      attributes: {
        ...initialState.attributes,
        additionalAttribute: '10',
      },
    };

    expect(reducer(initialState, {
      type: EDIT_LANGUAGE_FORM,
      field: 'attributes.additionalAttribute',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle SET_LANGUAGE_DATA', () => {
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
      type: SET_LANGUAGE_DATA,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_LANGUAGE_FORM', () => {
    expect(reducer(initialState, {
      type: CLEAR_LANGUAGE_FORM,
    })).toEqual(initialState);
  });
});
