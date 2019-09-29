import reducer from '../locationsListReducer';
import { GET_LOCATIONS_LIST_SUCCESSFUL } from '../../actions/locationActions';

describe('locationsList reducer', () => {
  it('should handle GET_LOCATIONS_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: GET_LOCATIONS_LIST_SUCCESSFUL,
      payload: [{
        name: 'testLocation',
        description: 'test description',
        gallery: [],
        apartments: [],
      }],
    })).toEqual({
      locations: [{
        name: 'testLocation',
        description: 'test description',
        gallery: [],
        apartments: [],
      }],
    });
  });
});
