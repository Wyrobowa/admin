import { createSelector } from 'reselect';
import { GET_TRANSLATIONS_LIST_SUCCESSFUL, DELETE_TRANSLATION_SUCCESSFUL } from '../actions/translationActions';

const translationsList = (state = {
  translations: [],
}, action) => {
  switch (action.type) {
    case GET_TRANSLATIONS_LIST_SUCCESSFUL:
      return {
        ...state,
        translations: action.payload,
      };
    case DELETE_TRANSLATION_SUCCESSFUL:
      const newTranslations = state.translations.filter(
        translation => action.slug !== translation.slug,
      );

      return {
        ...state,
        translations: newTranslations,
      };
    default:
      return state;
  }
};

export const getTranslationsList = state => state.translationsList.translations;

export const getTranslationsListFiltered = createSelector(
  [getTranslationsList],
  list => list.map(translation => ({
    text: translation.text,
    slug: translation.slug,
    languageId: translation.language.slug,
    languageName: translation.language.name,
    languageCode: translation.language.code,
    phraseId: translation.phrase.slug,
    phraseText: translation.phrase.text,
  })),
);

export default translationsList;
