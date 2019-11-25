import {
  EDIT_LANGUAGE_FORM,
  SET_LANGUAGE_DATA,
  CLEAR_LANGUAGE_FORM,
  GET_LANGUAGE_SUCCESSFUL,
} from '../actions/languageActions';

const initialState = {
  slug: '',
  name: '',
  code: '',
};

const language = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_LANGUAGE_FORM:
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
    case SET_LANGUAGE_DATA:
      return {
        ...state,
        ...action.payload.data,
      };
    case GET_LANGUAGE_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_LANGUAGE_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getLanguage = state => state.language;

export default language;
