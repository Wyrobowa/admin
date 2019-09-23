import { EDIT_PAGE_FORM, SET_PAGE_DATA, CLEAR_PAGE_FORM } from '../actions/pageActions';

const initialState = {
  name: '',
  text: '',
  visibility: true,
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PAGE_FORM:
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
    case SET_PAGE_DATA:
      return {
        ...state,
        ...action.payload.data,
      };
    case CLEAR_PAGE_FORM:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export const getPage = state => state.page;

export default page;
