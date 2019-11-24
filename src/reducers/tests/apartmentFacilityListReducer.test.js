import reducer from '../apartmentFacilityListReducer';
import * as apartmentFacilityActions from '../../actions/apartmentFacilityActions';

const initialState = {
  apartmentFacilities: [],
};

describe('apartment facility list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_APARTMENT_FACILITY_LIST_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      apartmentFacilities: [
        {
          name: 'facilityName',
        },
      ],
    };

    const payload = [
      {
        name: 'facilityName',
      },
    ];

    expect(reducer(initialState, {
      type: apartmentFacilityActions.GET_APARTMENT_FACILITY_LIST_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });
});
