import { createSelector } from 'reselect';
import { GET_APARTMENTS_LIST_SUCCESSFUL } from '../actions/apartmentActions';

const apartmentsList = (state = {
  apartments: [],
}, action) => {
  switch (action.type) {
    case GET_APARTMENTS_LIST_SUCCESSFUL:
      return {
        ...state,
        apartments: action.payload,
      };
    default:
      return state;
  }
};

export const getApartmentsList = state => state.apartmentsList.apartments;

export const getApartmentsListFiltered = createSelector(
  [getApartmentsList],
  list => list.map(apartment => ({
    name: apartment.name,
    slug: apartment.slug,
  })),
);

export default apartmentsList;
