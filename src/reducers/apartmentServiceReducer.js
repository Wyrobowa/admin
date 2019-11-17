import { EDIT_APARTMENT_SERVICE_FORM, GET_APARTMENT_SERVICE_SUCCESSFUL, CLEAR_APARTMENT_SERVICE_FORM } from '../actions/apartmentServiceActions';

const initialState = {
  name: '',
  price: '',
  description: '',
  mainPicture: '',
  picture: '',
  published: false,
  promoted: false,
  clientId: 'fragola',
};

const apartmentService = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_APARTMENT_SERVICE_FORM:
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
    case GET_APARTMENT_SERVICE_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_APARTMENT_SERVICE_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getApartmentService = state => state.apartmentService;

export default apartmentService;
