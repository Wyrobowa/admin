import { createSelector } from 'reselect';
import { GET_LOCATIONS_LIST_SUCCESSFUL, DELETE_LOCATION_SUCCESSFUL } from '../actions/locationActions';

const locationsList = (state = {
  locations: [],
}, action) => {
  switch (action.type) {
    case GET_LOCATIONS_LIST_SUCCESSFUL:
      return {
        ...state,
        locations: action.payload,
      };
    case DELETE_LOCATION_SUCCESSFUL:
      const newLocations = state.locations.filter(location => action.slug !== location.slug);

      return {
        ...state,
        locations: newLocations,
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
