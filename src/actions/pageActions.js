export const SEND_PAGE_SUCCESSFUL = 'SEND_PAGE_SUCCESSFUL';
export const SEND_PAGE_UNSUCCESSFUL = 'SEND_PAGE_UNSUCCESSFUL';
export const REQUEST_SEND_PAGE = 'REQUEST_SEND_PAGE';
export const EDIT_PAGE_FORM = 'EDIT_PAGE_FORM';
export const GET_PAGE_SUCCESSFUL = 'GET_PAGE_SUCCESSFUL';
export const GET_PAGES_LIST_SUCCESSFUL = 'GET_PAGES_LIST_SUCCESSFUL';
export const GET_PAGE_UNSUCCESSFUL = 'GET_PAGE_UNSUCCESSFUL';
export const REQUEST_GET_PAGE = 'REQUEST_GET_PAGE';
export const SET_PAGE_DATA = 'SET_PAGE_DATA';
export const REQUEST_GET_PAGES_LIST = 'REQUEST_GET_PAGES_LIST';
export const GET_PAGES_LIST_UNSUCCESSFUL = 'GET_PAGES_LIST_UNSUCCESSFUL';
export const CLEAR_PAGE_FORM = 'CLEAR_PAGE_FORM';

export const editPageForm = (field, value) => ({
  type: EDIT_PAGE_FORM,
  field,
  value,
});

export const sendPageSuccessful = () => ({
  type: SEND_PAGE_SUCCESSFUL,
});

export const sendPageUnsuccessful = () => ({
  type: SEND_PAGE_UNSUCCESSFUL,
});

export const requestSendPage = () => ({
  type: REQUEST_SEND_PAGE,
});

export const getPageSuccessful = () => ({
  type: GET_PAGE_SUCCESSFUL,
});

export const getPageUnsuccessful = () => ({
  type: GET_PAGE_UNSUCCESSFUL,
});

export const requestGetPage = slug => ({
  type: REQUEST_GET_PAGE,
  slug,
});

export const getPagesListSuccessful = payload => ({
  type: GET_PAGES_LIST_SUCCESSFUL,
  payload,
});

export const getPagesListUnsuccessful = () => ({
  type: GET_PAGES_LIST_UNSUCCESSFUL,
});

export const requestGetPagesList = () => ({
  type: REQUEST_GET_PAGES_LIST,
});

export const setPageData = payload => ({
  type: SET_PAGE_DATA,
  payload,
});

export const clearPageForm = () => ({
  type: CLEAR_PAGE_FORM,
});
