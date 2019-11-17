import reducer from '../locationsListReducer';
import * as locationActions from '../../actions/locationActions';

describe('locationsList reducer', () => {
  it('should handle GET_LOCATIONS_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: locationActions.GET_LOCATIONS_LIST_SUCCESSFUL,
      payload: [{
        name: 'testLocation',
        description: 'test description',
        gallery: [],
        isPromoted: false,
        apartments: [],
      }],
    })).toEqual({
      locations: [{
        name: 'testLocation',
        description: 'test description',
        gallery: [],
        isPromoted: false,
        apartments: [],
      }],
    });
  });
});
