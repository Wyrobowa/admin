import { createSelector } from 'reselect';
import { GET_LOCATIONS_LIST_SUCCESSFUL } from '../actions/locationActions';

const locationsList = (state = {
  locations: [],
}, action) => {
  switch (action.type) {
    case GET_LOCATIONS_LIST_SUCCESSFUL:
      return {
        ...state,
        locations: action.payload,
      };
    default:
      return state;
  }
};

export const getLocationsList = state => state.locationsList.locations;

export const getLocationsListFiltered = createSelector(
  [getLocationsList],
  list => list.map(location => ({
    name: location.name,
    slug: location.slug,
  })),
);

export default locationsList;
