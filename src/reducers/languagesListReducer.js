import { createSelector } from 'reselect';
import { GET_LANGUAGES_LIST_SUCCESSFUL } from '../actions/languageActions';

const languagesList = (state = {
  languages: [],
}, action) => {
  switch (action.type) {
    case GET_LANGUAGES_LIST_SUCCESSFUL:
      return {
        ...state,
        languages: action.payload,
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
  })),
);

export default languagesList;
