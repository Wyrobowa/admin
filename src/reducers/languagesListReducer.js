import { createSelector } from 'reselect';
import { GET_LANGUAGES_LIST_SUCCESSFUL, DELETE_LANGUAGE_SUCCESSFUL } from '../actions/languageActions';

const languagesList = (state = {
  languages: [],
}, action) => {
  switch (action.type) {
    case GET_LANGUAGES_LIST_SUCCESSFUL:
      return {
        ...state,
        languages: action.payload,
      };
    case DELETE_LANGUAGE_SUCCESSFUL:
      const newLanguages = state.languages.filter(language => action.slug !== language.code);

      return {
        ...state,
        languages: newLanguages,
      };
    default:
      return state;
  }
};

export const getLanguagesList = state => state.languagesList.languages;

export const getLanguagesListFiltered = createSelector(
  [getLanguagesList],
  list => list.map(language => ({
    name: language.name,
    code: language.code,
    slug: language.slug,
  })),
);

export default languagesList;
