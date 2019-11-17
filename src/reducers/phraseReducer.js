import {
  EDIT_PHRASE_FORM,
  SET_PHRASE_DATA,
  CLEAR_PHRASE_FORM,
  GET_PHRASE_SUCCESSFUL,
} from '../actions/phraseActions';

const initialState = {
  text: '',
  _id: '',
};

const phrase = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PHRASE_FORM:
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
    case SET_PHRASE_DATA:
      return {
        ...state,
        ...action.payload.data,
      };

    case GET_PHRASE_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };

    case CLEAR_PHRASE_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getPhrase = state => state.phrase;

export default phrase;
