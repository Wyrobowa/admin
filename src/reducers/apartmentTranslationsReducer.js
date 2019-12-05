import * as apartmentTranslationsActions from '../actions/apartmentTranslationsActions';

const initialState = {
  name: '',
};

const apartmentTranslations = (state = initialState, action) => {
  switch (action.type) {
    case apartmentTranslationsActions.EDIT_APARTMENT_TRANSLATIONS_FORM:
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
    case apartmentTranslationsActions.GET_APARTMENT_TRANSLATIONS_SUCCESSFUL:
      return {
        ...state,
        ...action.payload,
      };
    case apartmentTranslationsActions.CLEAR_APARTMENT_TRANSLATIONS_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const getApartmentTranslations = state => state.apartmentTranslations;

export default apartmentTranslations;
