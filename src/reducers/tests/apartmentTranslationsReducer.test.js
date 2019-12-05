import reducer from '../apartmentTranslationsReducer';
import * as apartmentTranslationsActions from '../../actions/apartmentTranslationsActions';

const initialState = {
  name: '',
};

describe('apartment translations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_APARTMENT_TRANSLATIONS_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: apartmentTranslationsActions.EDIT_APARTMENT_TRANSLATIONS_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_APARTMENT_TRANSLATIONS_FORM', () => {
    const changedState = {
      ...initialState,
      nested: {
        ...initialState.nested,
        nestedProperty: '10',
      },
    };

    expect(reducer(initialState, {
      type: apartmentTranslationsActions.EDIT_APARTMENT_TRANSLATIONS_FORM,
      field: 'nested.nestedProperty',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle GET_APARTMENT_TRANSLATIONS_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      name: 'nameFromPayload',
    };

    const payload = {
      ...initialState,
      name: 'nameFromPayload',
    };

    expect(reducer(initialState, {
      type: apartmentTranslationsActions.GET_APARTMENT_TRANSLATIONS_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_APARTMENT_TRANSLATIONS_FORM', () => {
    expect(reducer(initialState, {
      type: apartmentTranslationsActions.CLEAR_APARTMENT_TRANSLATIONS_FORM,
    })).toEqual(initialState);
  });
});
