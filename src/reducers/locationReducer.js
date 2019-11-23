import * as locationActions from '../actions/locationActions';

const initialState = {
  name: '',
  description: '',
  gallery: [],
  mainPicture: '',
  isPromoted: false,
  apartmentsList: [],
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case locationActions.EDIT_LOCATION_FORM:
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
    case locationActions.DELETE_LOCATION_IMAGE:
      if (action.field === 'mainPicture') {
        return {
          ...state,
          mainPicture: '',
        };
      }
      return state;
    case locationActions.SET_LOCATION_DATA:
      return {
        ...state,
        ...action.payload.data,
      };
    case locationActions.CLEAR_LOCATION_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getLocation = state => state.location;

export default location;
