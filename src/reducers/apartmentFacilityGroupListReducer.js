import { createSelector } from 'reselect';
import * as apartmentFacilityGroupActions from '../actions/apartmentFacilityGroupActions';

const apartmentFacilityGroupList = (state = {
  apartmentFacilityGroup: [],
}, action) => {
  switch (action.type) {
    case apartmentFacilityGroupActions.GET_APARTMENT_FACILITY_GROUP_LIST_SUCCESSFUL:
      return {
        ...state,
        apartmentFacilityGroup: action.payload,
      };
    case apartmentFacilityGroupActions.DELETE_APARTMENT_FACILITY_GROUP_SUCCESSFUL:
      const newApartmentFacilityGroup = state.apartmentFacilityGroup.filter(
        apartmentFacilityGroup => action.slug !== apartmentFacilityGroup.slug,
      );

      return {
        ...state,
        apartmentFacilityGroup: newApartmentFacilityGroup,
      };
    default:
      return state;
  }
};

export const getApartmentFacilityGroupList = state => (
  state.apartmentFacilityGroupList.apartmentFacilityGroup
);

export const getApartmentFacilityGroupListFiltered = createSelector(
  [getApartmentFacilityGroupList],
  list => list.map(apartmentFacilityGroup => ({
    name: apartmentFacilityGroup.name,
    slug: apartmentFacilityGroup.slug,
  })),
);

export default apartmentFacilityGroupList;
