import * as apartmentFacilityActions from '../actions/apartmentFacilityActions';

const initialState = {
  name: '',
};

const apartmentFacility = (state = initialState, action) => {
  switch (action.type) {
    case apartmentFacilityActions.EDIT_APARTMENT_FACILITY_FORM:
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
    case apartmentFacilityActions.GET_APARTMENT_FACILITY_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case apartmentFacilityActions.CLEAR_APARTMENT_FACILITY_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getApartmentFacility = state => state.apartmentFacility;

export default apartmentFacility;
