import { createSelector } from 'reselect';
import { GET_PAGES_LIST_SUCCESSFUL, DELETE_PAGE_SUCCESSFUL } from '../actions/pageActions';

const pagesList = (state = {
  pages: [],
}, action) => {
  switch (action.type) {
    case GET_PAGES_LIST_SUCCESSFUL:
      return {
        ...state,
        pages: action.payload,
      };
    case DELETE_PAGE_SUCCESSFUL:
      const newPages = state.pages.filter(page => action.slug !== page.slug);

      return {
        ...state,
        pages: newPages,
      };
    default:
      return state;
  }
};

export const getPagesList = state => state.pagesList.pages;

export const getPagesListFiltered = createSelector(
  [getPagesList],
  list => list.map(page => ({
    name: page.name,
    slug: page.slug,
  })),
);

export default pagesList;
