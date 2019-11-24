import reducer from '../apartmentFacilityReducer';
import * as apartmentFacilityActions from '../../actions/apartmentFacilityActions';

const initialState = {
  name: '',
};

describe('apartment facility reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_APARTMENT_FACILITY_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: apartmentFacilityActions.EDIT_APARTMENT_FACILITY_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_APARTMENT_FACILITY_FORM', () => {
    const changedState = {
      ...initialState,
      nested: {
        ...initialState.nested,
        nestedProperty: '10',
      },
    };

    expect(reducer(initialState, {
      type: apartmentFacilityActions.EDIT_APARTMENT_FACILITY_FORM,
      field: 'nested.nestedProperty',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle GET_APARTMENT_FACILITY_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      name: 'nameFromPayload',
    };

    const payload = {
      ...initialState,
      name: 'nameFromPayload',
    };

    expect(reducer(initialState, {
      type: apartmentFacilityActions.GET_APARTMENT_FACILITY_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });

  it('should handle CLEAR_APARTMENT_FACILITY_FORM', () => {
    expect(reducer(initialState, {
      type: apartmentFacilityActions.CLEAR_APARTMENT_FACILITY_FORM,
    })).toEqual(initialState);
  });
});
