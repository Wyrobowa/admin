import * as pageActions from '../pageActions';

describe('pageActions', () => {
  it('should create an action to editPage form ', () => {
    const expectedAction = {
      type: pageActions.EDIT_PAGE_FORM,
    };
    expect(pageActions.editPageForm()).toEqual(expectedAction);
  });

  it('should create an action to sendPageSuccessful', () => {
    const expectedAction = {
      type: pageActions.SEND_PAGE_SUCCESSFUL,
    };
    expect(pageActions.sendPageSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendPageUnsuccessful', () => {
    const expectedAction = {
      type: pageActions.SEND_PAGE_UNSUCCESSFUL,
    };
    expect(pageActions.sendPageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendPage', () => {
    const expectedAction = {
      type: pageActions.REQUEST_SEND_PAGE,
    };
    expect(pageActions.requestSendPage()).toEqual(expectedAction);
  });

  it('should create an action to deletePageSuccessful', () => {
    const expectedAction = {
      type: pageActions.DELETE_PAGE_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(pageActions.deletePageSuccessful('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to deletePageUnsuccessful', () => {
    const expectedAction = {
      type: pageActions.DELETE_PAGE_UNSUCCESSFUL,
    };
    expect(pageActions.deletePageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestDeletePage', () => {
    const expectedAction = {
      type: pageActions.REQUEST_DELETE_PAGE,
      slug: 'exampleSlug',
    };
    expect(pageActions.requestDeletePage('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getPageSuccessful', () => {
    const expectedAction = {
      type: pageActions.GET_PAGE_SUCCESSFUL,
    };
    expect(pageActions.getPageSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getPageUnsuccessful', () => {
    const expectedAction = {
      type: pageActions.GET_PAGE_UNSUCCESSFUL,
    };
    expect(pageActions.getPageUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetPage', () => {
    const expectedAction = {
      type: pageActions.REQUEST_GET_PAGE,
      slug: 'exampleSlug',
    };
    expect(pageActions.requestGetPage('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getPagesListSuccessful', () => {
    const expectedAction = {
      type: pageActions.GET_PAGES_LIST_SUCCESSFUL,
    };
    expect(pageActions.getPagesListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getPagesListUnsuccessful', () => {
    const expectedAction = {
      type: pageActions.GET_PAGES_LIST_UNSUCCESSFUL,
    };
    expect(pageActions.getPagesListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetPagesList', () => {
    const expectedAction = {
      type: pageActions.REQUEST_GET_PAGES_LIST,
    };
    expect(pageActions.requestGetPagesList()).toEqual(expectedAction);
  });

  it('should create an action to setPageData', () => {
    const expectedAction = {
      type: pageActions.SET_PAGE_DATA,
    };
    expect(pageActions.setPageData()).toEqual(expectedAction);
  });

  it('should create an action to clearPageForm', () => {
    const expectedAction = {
      type: pageActions.CLEAR_PAGE_FORM,
    };
    expect(pageActions.clearPageForm()).toEqual(expectedAction);
  });
});
