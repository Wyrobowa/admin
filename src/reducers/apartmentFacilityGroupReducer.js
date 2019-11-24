import * as apartmentFacilityGroupActions from '../actions/apartmentFacilityGroupActions';

const initialState = {
  name: '',
  _id: '',
};

const apartmentFacilityGroup = (state = initialState, action) => {
  switch (action.type) {
    case apartmentFacilityGroupActions.EDIT_APARTMENT_FACILITY_GROUP_FORM:
      const field = action.field || '';
      const [property, nestedProperty] = field.split('.');

      if (nestedProperty) {
        return {
          ...state,
          [property]: {
            ...state[property],
            [nestedProperty]: action.value,
          },
        };
      }
      return {
        ...state,
        [action.field]: action.value,
      };
    case apartmentFacilityGroupActions.GET_APARTMENT_FACILITY_GROUP_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case apartmentFacilityGroupActions.CLEAR_APARTMENT_FACILITY_GROUP_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getApartmentFacilityGroup = state => state.apartmentFacilityGroup;

export default apartmentFacilityGroup;
