import { createSelector } from 'reselect';
import * as apartmentFacilityActions from '../actions/apartmentFacilityActions';

const apartmentFacilityList = (state = {
  apartmentFacilities: [],
}, action) => {
  switch (action.type) {
    case apartmentFacilityActions.GET_APARTMENT_FACILITY_LIST_SUCCESSFUL:
      return {
        ...state,
        apartmentFacilities: action.payload,
      };
    case apartmentFacilityActions.DELETE_APARTMENT_FACILITY_SUCCESSFUL:
      const newApartmentFacilities = state.apartmentFacilities.filter(
        apartmentFacility => action.slug !== apartmentFacility.slug,
      );

      return {
        ...state,
        apartmentFacilities: newApartmentFacilities,
      };
    default:
      return state;
  }
};

export const getApartmentFacilityList = state => state.apartmentFacilityList.apartmentFacilities;

export const getApartmentFacilityListFiltered = createSelector(
  [getApartmentFacilityList],
  list => list.map(apartmentFacility => ({
    name: apartmentFacility.name,
    id: apartmentFacility._id,
  })),
);

export default apartmentFacilityList;
