import { createSelector } from 'reselect';
import * as apartmentTranslationsActions from '../actions/apartmentTranslationsActions';

const apartmentTranslationsList = (state = {
  apartmentTranslations: [],
}, action) => {
  switch (action.type) {
    case apartmentTranslationsActions.GET_APARTMENT_TRANSLATIONS_LIST_SUCCESSFUL:
      return {
        ...state,
        apartmentTranslations: action.payload,
      };
    case apartmentTranslationsActions.DELETE_APARTMENT_TRANSLATIONS_SUCCESSFUL:
      const newApartmentFacilities = state.apartmentTranslations.filter(
        apartmentTranslations => action.slug !== apartmentTranslations.slug,
      );

      return {
        ...state,
        apartmentTranslations: newApartmentFacilities,
      };
    default:
      return state;
  }
};

export const getApartmentTranslationsList = state => (
  state.apartmentTranslationsList.apartmentTranslations
);

export const getApartmentTranslationsListFiltered = createSelector(
  [getApartmentTranslationsList],
  list => list.map(apartmentTranslations => ({
    name: apartmentTranslations.name,
    apartment: apartmentTranslations.apartment.name,
    language: apartmentTranslations.language.code,
    slug: apartmentTranslations.slug,
  })),
);

export default apartmentTranslationsList;
