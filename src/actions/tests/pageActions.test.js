import {
  editPageForm,
  EDIT_PAGE_FORM,
  sendPageSuccessful,
  SEND_PAGE_SUCCESSFUL,
  sendPageUnsuccessful,
  SEND_PAGE_UNSUCCESSFUL,
  requestSendPage,
  REQUEST_SEND_PAGE,
  getPageSuccessful,
  GET_PAGE_SUCCESSFUL,
  getPageUnsuccessful,
  GET_PAGE_UNSUCCESSFUL,
  requestGetPage,
  REQUEST_GET_PAGE,
  getPagesListSuccessful,
  GET_PAGES_LIST_SUCCESSFUL,
  getPagesListUnsuccessful,
  GET_PAGES_LIST_UNSUCCESSFUL,
  requestGetPagesList,
  REQUEST_GET_PAGES_LIST,
  setPageData,
  SET_PAGE_DATA,
  clearPageForm,
  CLEAR_PAGE_FORM,
} from '../pageActions';

describe('pageActions', () => {
  it('should create an action to editPage form ', () => {
    const expectedAction = {
      type: EDIT_PAGE_FORM,
    };
    expect(editPageForm()).toEqual(expectedAction);
  });

  it('should create an action to sendPageSuccessful', () => {
    const expectedAction = {
      type: SEND_PAGE_SUCCESSFUL,
    };
    expect(sendPageSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendPageUnsuccessful', () => {
    const expectedAction = {
      type: SEND_PAGE_UNSUCCESSFUL,
    };
    expect(sendPageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendPage', () => {
    const expectedAction = {
      type: REQUEST_SEND_PAGE,
    };
    expect(requestSendPage()).toEqual(expectedAction);
  });

  it('should create an action to getPageSuccessful', () => {
    const expectedAction = {
      type: GET_PAGE_SUCCESSFUL,
    };
    expect(getPageSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getPageUnsuccessful', () => {
    const expectedAction = {
      type: GET_PAGE_UNSUCCESSFUL,
    };
    expect(getPageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetPage', () => {
    const expectedAction = {
      type: REQUEST_GET_PAGE,
      slug: 'exampleSlug',
    };
    expect(requestGetPage('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getPagesListSuccessful', () => {
    const expectedAction = {
      type: GET_PAGES_LIST_SUCCESSFUL,
    };
    expect(getPagesListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getPagesListUnsuccessful', () => {
    const expectedAction = {
      type: GET_PAGES_LIST_UNSUCCESSFUL,
    };
    expect(getPagesListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetPagesList', () => {
    const expectedAction = {
      type: REQUEST_GET_PAGES_LIST,
    };
    expect(requestGetPagesList()).toEqual(expectedAction);
  });

  it('should create an action to setPageData', () => {
    const expectedAction = {
      type: SET_PAGE_DATA,
    };
    expect(setPageData()).toEqual(expectedAction);
  });

  it('should create an action to clearPageForm', () => {
    const expectedAction = {
      type: CLEAR_PAGE_FORM,
    };
    expect(clearPageForm()).toEqual(expectedAction);
  });
});
