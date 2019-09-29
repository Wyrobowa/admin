import reducer from '../locationReducer';
import { EDIT_LOCATION_FORM, SET_LOCATION_DATA, CLEAR_LOCATION_FORM } from '../../actions/locationActions';

const initialState = {
  name: '',
  description: '',
  gallery: [],
  apartmentsList: [],
};

describe('location reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_LOCATION_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: EDIT_LOCATION_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_LOCATION_FORM', () => {
    const changedState = {
      ...initialState,
      attributes: {
        ...initialState.attributes,
        additionalAttribute: '10',
      },
    };

    expect(reducer(initialState, {
      type: EDIT_LOCATION_FORM,
      field: 'attributes.additionalAttribute',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle SET_LOCATION_DATA', () => {
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
      type: SET_LOCATION_DATA,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_LOCATION_FORM', () => {
    expect(reducer(initialState, {
      type: CLEAR_LOCATION_FORM,
    })).toEqual(initialState);
  });
});
