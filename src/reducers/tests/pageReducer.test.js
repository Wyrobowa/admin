import reducer from '../pageReducer';
import * as pageActions from '../../actions/pageActions';

const initialState = {
  name: '',
  text: '',
  published: false,
};

describe('page reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_PAGE_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: pageActions.EDIT_PAGE_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_PAGE_FORM', () => {
    const changedState = {
      ...initialState,
      attributes: {
        ...initialState.attributes,
        additionalAttribute: '10',
      },
    };

    expect(reducer(initialState, {
      type: pageActions.EDIT_PAGE_FORM,
      field: 'attributes.additionalAttribute',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle SET_PAGE_DATA', () => {
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
      type: pageActions.SET_PAGE_DATA,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_PAGE_FORM', () => {
    expect(reducer(initialState, {
      type: pageActions.CLEAR_PAGE_FORM,
    })).toEqual(initialState);
  });
});
