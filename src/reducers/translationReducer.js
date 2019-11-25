import {
  EDIT_TRANSLATION_FORM,
  SET_TRANSLATION_DATA,
  CLEAR_TRANSLATION_FORM,
  GET_TRANSLATION_SUCCESSFUL,
} from '../actions/translationActions';

const initialState = {
  text: '',
  language: '',
  phrase: '',
  slug: '',
};

const translation = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TRANSLATION_FORM:
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
    case SET_TRANSLATION_DATA:
      return {
        ...state,
        ...action.payload.data,
      };

    case GET_TRANSLATION_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };

    case CLEAR_TRANSLATION_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getTranslation = state => state.translation;

export default translation;
