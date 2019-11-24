import reducer from '../apartmentFacilityGroupListReducer';
import * as apartmentFacilityGroupActions from '../../actions/apartmentFacilityGroupActions';

const initialState = {
  apartmentFacilityGroup: [],
};

describe('apartment facility group list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_APARTMENT_FACILITY_GROUP_LIST_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      apartmentFacilityGroup: [
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
      type: apartmentFacilityGroupActions.GET_APARTMENT_FACILITY_GROUP_LIST_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });
});
