import { EDIT_APARTMENT_FORM, GET_APARTMENT_SUCCESSFUL, CLEAR_APARTMENT_FORM } from '../actions/apartmentActions';

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
  },
  facilities: {
    wlan: false,
    elevator: false,
    balcony: false,
    garden: false,
    parking: false,
    cosmetics: false,
    towels: false,
  },
  equipment: {
    hairDryer: false,
  },
  location: {
    city: '',
    address: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
  },
  recommended: false,
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

      if (field === 'gallery') {
        return {
          ...state,
          [action.field]: [
            ...state[property],
            ...action.value,
          ],
        };
      }

      return {
        ...state,
        [action.field]: action.value,
      };
    case GET_APARTMENT_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_APARTMENT_FORM:
      return initialState;
    default:
      return state;
  }
};

export const getApartment = state => state.apartment;

export default apartment;
