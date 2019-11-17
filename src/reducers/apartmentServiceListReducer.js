import { createSelector } from 'reselect';
import { GET_APARTMENT_SERVICE_LIST_SUCCESSFUL, DELETE_APARTMENT_SERVICE_SUCCESSFUL } from '../actions/apartmentServiceActions';

const apartmentServiceList = (state = {
  apartmentServices: [],
}, action) => {
  switch (action.type) {
    case GET_APARTMENT_SERVICE_LIST_SUCCESSFUL:
      return {
        ...state,
        apartmentServices: action.payload,
      };
    case DELETE_APARTMENT_SERVICE_SUCCESSFUL:
      const newApartmentServices = state.apartmentServices.filter(
        apartmentService => action.slug !== apartmentService.slug,
      );

      return {
        ...state,
        apartmentServices: newApartmentServices,
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
