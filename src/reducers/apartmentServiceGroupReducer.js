import * as apartmentServiceGroupActions from '../actions/apartmentServiceGroupActions';

const initialState = {
  name: '',
  _id: '',
};

const apartmentServiceGroup = (state = initialState, action) => {
  switch (action.type) {
    case apartmentServiceGroupActions.EDIT_APARTMENT_SERVICE_GROUP_FORM:
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
    case apartmentServiceGroupActions.GET_APARTMENT_SERVICE_GROUP_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case apartmentServiceGroupActions.CLEAR_APARTMENT_SERVICE_GROUP_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getApartmentServiceGroup = state => state.apartmentServiceGroup;

export default apartmentServiceGroup;
