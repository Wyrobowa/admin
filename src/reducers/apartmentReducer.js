import { EDIT_APARTMENT_FORM } from '../actions/apartmentActions';

const adminApartment = (state = {
  title: '',
  apartmentNumber: '',
  description: '',
  gallery: [],
  measurement: '',
  guestsNumber: '',
  guestsLimit: '',
  extraGuestPrice: '',
  isWlanAvailable: '',
  location: {
    city: '',
    address: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
  },
  clientId: 'accomore',
}, action) => {
  switch (action.type) {
    case EDIT_APARTMENT_FORM:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export const getApartment = state => state.adminApartment;

export default adminApartment;
