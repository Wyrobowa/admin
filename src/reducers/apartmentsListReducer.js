import { createSelector } from 'reselect';
import { GET_APARTMENTS_LIST_SUCCESSFUL, DELETE_APARTMENT_SUCCESSFUL } from '../actions/apartmentActions';

const apartmentsList = (state = {
  apartments: [],
}, action) => {
  switch (action.type) {
    case GET_APARTMENTS_LIST_SUCCESSFUL:
      return {
        ...state,
        apartments: action.payload,
      };
    case DELETE_APARTMENT_SUCCESSFUL:
      const newApartments = state.apartments.filter(apartment => action.slug !== apartment.slug);

      return {
        ...state,
        apartments: newApartments,
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
