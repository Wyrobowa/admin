import { createSelector } from 'reselect';
import { GET_PHRASES_LIST_SUCCESSFUL, DELETE_PHRASE_SUCCESSFUL } from '../actions/phraseActions';

const phrasesList = (state = {
  phrases: [],
}, action) => {
  switch (action.type) {
    case GET_PHRASES_LIST_SUCCESSFUL:
      return {
        ...state,
        phrases: action.payload,
      };
    case DELETE_PHRASE_SUCCESSFUL:
      const newPhrases = state.phrases.filter(phrase => action.slug !== phrase.slug);

      return {
        ...state,
        phrases: newPhrases,
      };
    default:
      return state;
  }
};

export const getPhrasesList = state => state.phrasesList.phrases;

export const getPhrasesListFiltered = createSelector(
  [getPhrasesList],
  list => list.map(phrase => ({
    text: phrase.text,
    slug: phrase.slug,
  })),
);

export default phrasesList;
