import reducer from '../apartmentServiceGroupListReducer';
import * as apartmentServiceGroupActions from '../../actions/apartmentServiceGroupActions';

const initialState = {
  apartmentServiceGroup: [],
};

describe('apartment service group list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_APARTMENT_SERVICE_GROUP_LIST_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      apartmentServiceGroup: [
        {
          name: 'serviceName',
        },
      ],
    };

    const payload = [
      {
        name: 'serviceName',
      },
    ];

    expect(reducer(initialState, {
      type: apartmentServiceGroupActions.GET_APARTMENT_SERVICE_GROUP_LIST_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });
});
