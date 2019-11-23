import * as apartmentActions from '../actions/apartmentActions';

const initialState = {
  name: '',
  yieldApartmentId: '',
  apartmentNumber: '',
  description: '',
  location: '',
  mainPicture: '',
  gallery: [],
  apartmentServices: [],
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
            action.value,
          ],
        };
      }

      return {
        ...state,
        [action.field]: action.value,
      };
    case apartmentActions.EDIT_APARTMENT_ADDRESS_FORM:
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
    case apartmentActions.EDIT_APARTMENT_SERVICES_FORM:
      const fieldApartmentService = action.field || '';
      const [, nestedPropertyApartmentService] = fieldApartmentService.split('.');
      const isInState = state.apartmentServices.includes(nestedPropertyApartmentService);

      if (isInState && action.value === false) {
        const stateWithoutDeletedImage = state.apartmentServices.filter(
          item => item !== nestedPropertyApartmentService,
        );

        return {
          ...state,
          apartmentServices: [
            ...stateWithoutDeletedImage,
          ],
        };
      }
      if (!isInState && action.value === true) {
        return {
          ...state,
          apartmentServices: [
            ...state.apartmentServices,
            nestedPropertyApartmentService,
          ],
        };
      }

      return {
        ...state,
        apartmentServices: [
          ...state.apartmentServices,
        ],
      };
    case apartmentActions.DELETE_APARTMENT_GALLERY_IMAGE:
      const stateWithoutDeletedImage = state.gallery.filter(
        item => item !== action.value,
      );

      if (action.field === 'gallery') {
        return {
          ...state,
          gallery: [
            ...stateWithoutDeletedImage,
          ],
        };
      }
      return state;
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
