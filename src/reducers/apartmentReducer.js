import * as apartmentActions from '../actions/apartmentActions';

const initialState = {
  name: '',
  yieldApartmentId: '',
  apartmentNumber: '',
  description: '',
  location: '',
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
  address: {
    city: '',
    address: '',
    mapCoordinates: {
      lat: 0,
      lng: 0,
    },
  },
  recommended: false,
  clientId: 'fragola',
};

const apartment = (state = initialState, action) => {
  switch (action.type) {
    case apartmentActions.EDIT_APARTMENT_FORM:
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
    case apartmentActions.EDIT_APARTMENT_ADDRESS_FORM:
      console.log(action.field);
      console.log(action.value);
      return {
        ...state,
        address: {
          ...state.address,
          mapCoordinates: {
            ...state.address.mapCoordinates,
            [action.field]: action.value,
          },
        },
      };
    case apartmentActions.GET_APARTMENT_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case apartmentActions.CLEAR_APARTMENT_FORM:
      return initialState;
    default:
      return state;
  }
};

export const getApartment = state => state.apartment;

export default apartment;
