import reducer from '../apartmentServiceGroupReducer';
import * as apartmentServiceGroupActions from '../../actions/apartmentServiceGroupActions';

const initialState = {
  name: '',
  _id: '',
};

describe('apartment service group reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_APARTMENT_SERVICE_GROUP_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: apartmentServiceGroupActions.EDIT_APARTMENT_SERVICE_GROUP_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_APARTMENT_SERVICE_GROUP_FORM', () => {
    const changedState = {
      ...initialState,
      nested: {
        ...initialState.nested,
        nestedProperty: '10',
      },
    };

    expect(reducer(initialState, {
      type: apartmentServiceGroupActions.EDIT_APARTMENT_SERVICE_GROUP_FORM,
      field: 'nested.nestedProperty',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle GET_APARTMENT_SERVICE_GROUP_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      name: 'nameFromPayload',
    };

    const payload = {
      ...initialState,
      name: 'nameFromPayload',
    };

    expect(reducer(initialState, {
      type: apartmentServiceGroupActions.GET_APARTMENT_SERVICE_GROUP_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_APARTMENT_SERVICE_GROUP_FORM', () => {
    expect(reducer(initialState, {
      type: apartmentServiceGroupActions.CLEAR_APARTMENT_SERVICE_GROUP_FORM,
    })).toEqual(initialState);
  });
});
