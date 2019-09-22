import { EDIT_APARTMENT_FORM, SET_APARTMENT_DATA, CLEAR_APARTMENT_FORM } from '../actions/apartmentActions';

const initialState = {
  name: '',
  yieldApartmentId: '',
  apartmentNumber: '',
  description: '',
  mainPicture: '',
  gallery: [],
  attributes: {
    measurement: '',
    guestsNumber: '',
    guestsLimit: '',
    extraGuestPrice: '',
    isWlanAvailable: false,
  },
  location: {
    city: '',
    address: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
  },
  clientId: 'fragola',
};

const apartment = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_APARTMENT_FORM:
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
    case SET_APARTMENT_DATA:
      return {
        ...state,
        ...action.payload.data,
      };
    case CLEAR_APARTMENT_FORM:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export const getApartment = state => state.apartment;

export default apartment;
