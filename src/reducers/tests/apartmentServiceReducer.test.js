import reducer from '../apartmentServiceReducer';
import {
  EDIT_APARTMENT_SERVICE_FORM, GET_APARTMENT_SERVICE_SUCCESSFUL, CLEAR_APARTMENT_SERVICE_FORM,
} from '../../actions/apartmentServiceActions';

const initialState = {
  name: '',
  price: '',
  description: '',
  mainPicture: '',
  picture: '',
  published: false,
  promoted: false,
  clientId: 'fragola',
};

describe('apartment service reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_APARTMENT_SERVICE_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: EDIT_APARTMENT_SERVICE_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_APARTMENT_SERVICE_FORM', () => {
    const changedState = {
      ...initialState,
      nested: {
        ...initialState.nested,
        nestedProperty: '10',
      },
    };

    expect(reducer(initialState, {
      type: EDIT_APARTMENT_SERVICE_FORM,
      field: 'nested.nestedProperty',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle GET_APARTMENT_SERVICE_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      name: 'nameFromPayload',
    };

    const payload = {
      ...initialState,
      name: 'nameFromPayload',
    };

    expect(reducer(initialState, {
      type: GET_APARTMENT_SERVICE_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_APARTMENT_SERVICE_FORM', () => {
    expect(reducer(initialState, {
      type: CLEAR_APARTMENT_SERVICE_FORM,
    })).toEqual(initialState);
  });
});
