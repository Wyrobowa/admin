import { createSelector } from 'reselect';
import * as apartmentServiceGroupActions from '../actions/apartmentServiceGroupActions';

const apartmentServiceGroupList = (state = {
  apartmentServiceGroup: [],
}, action) => {
  switch (action.type) {
    case apartmentServiceGroupActions.GET_APARTMENT_SERVICE_GROUP_LIST_SUCCESSFUL:
      return {
        ...state,
        apartmentServiceGroup: action.payload,
      };
    case apartmentServiceGroupActions.DELETE_APARTMENT_SERVICE_GROUP_SUCCESSFUL:
      const newApartmentServiceGroup = state.apartmentServiceGroup.filter(
        apartmentServiceGroup => action.slug !== apartmentServiceGroup._id,
      );

      return {
        ...state,
        apartmentServiceGroup: newApartmentServiceGroup,
      };
    default:
      return state;
  }
};

export const getApartmentServiceGroupList = state => (
  state.apartmentServiceGroupList.apartmentServiceGroup
);

export const getApartmentServiceGroupListFiltered = createSelector(
  [getApartmentServiceGroupList],
  list => list.map(apartmentServiceGroup => ({
    name: apartmentServiceGroup.name,
    id: apartmentServiceGroup._id,
  })),
);

export default apartmentServiceGroupList;
