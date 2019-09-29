import reducer from '../apartmentServiceListReducer';
import { GET_APARTMENT_SERVICE_LIST_SUCCESSFUL } from '../../actions/apartmentServiceActions';

const initialState = {
  apartmentServices: [],
};

describe('apartment service list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_APARTMENT_SERVICE_LIST_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      apartmentServices: [
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
      type: GET_APARTMENT_SERVICE_LIST_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });
});
