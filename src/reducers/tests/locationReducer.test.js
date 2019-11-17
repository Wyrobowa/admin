import reducer from '../locationReducer';
import * as locationActions from '../../actions/locationActions';

const initialState = {
  name: '',
  description: '',
  mainPhoto: '',
  gallery: [],
  isPromoted: false,
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
      type: locationActions.EDIT_LOCATION_FORM,
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
      type: locationActions.EDIT_LOCATION_FORM,
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
      type: locationActions.SET_LOCATION_DATA,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_LOCATION_FORM', () => {
    expect(reducer(initialState, {
      type: locationActions.CLEAR_LOCATION_FORM,
    })).toEqual(initialState);
  });
});
