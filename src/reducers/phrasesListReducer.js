import { createSelector } from 'reselect';
import { GET_PHRASES_LIST_SUCCESSFUL } from '../actions/phraseActions';

const phrasesList = (state = {
  phrases: [],
}, action) => {
  switch (action.type) {
    case GET_PHRASES_LIST_SUCCESSFUL:
      return {
        ...state,
        phrases: action.payload,
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
    id: phrase._id,
  })),
);

export default phrasesList;
