import { createSelector } from 'reselect';
import { GET_APARTMENT_SERVICE_LIST_SUCCESSFUL } from '../actions/apartmentServiceActions';

const apartmentServiceList = (state = {
  apartmentServices: [],
}, action) => {
  switch (action.type) {
    case GET_APARTMENT_SERVICE_LIST_SUCCESSFUL:
      return {
        ...state,
        apartmentServices: action.payload,
      };
    default:
      return state;
  }
};

export const getApartmentServiceList = state => state.apartmentServiceList.apartmentServices;

export const getApartmentServiceListFiltered = createSelector(
  [getApartmentServiceList],
  list => list.map(apartmentService => ({
    name: apartmentService.name,
    slug: apartmentService.slug,
  })),
);

export default apartmentServiceList;
