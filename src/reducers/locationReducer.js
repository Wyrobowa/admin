import { EDIT_LOCATION_FORM, SET_LOCATION_DATA, CLEAR_LOCATION_FORM } from '../actions/locationActions';

const initialState = {
  name: '',
  description: '',
  gallery: [],
  apartmentsList: [],
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_LOCATION_FORM:
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
    case SET_LOCATION_DATA:
      return {
        ...state,
        ...action.payload.data,
      };
    case CLEAR_LOCATION_FORM:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export const getLocation = state => state.location;

export default location;
