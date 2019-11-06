import * as apartmentServiceGroupActions from '../apartmentServiceGroupActions';

describe('apartmentServiceGroupActions', () => {
  it('should create an action to editApartmentServiceGroupForm ', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.EDIT_APARTMENT_SERVICE_GROUP_FORM,
    };
    expect(apartmentServiceGroupActions.editApartmentServiceGroupForm()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentServiceGroupSuccessful', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.SEND_APARTMENT_SERVICE_GROUP_SUCCESSFUL,
    };
    expect(
      apartmentServiceGroupActions.sendApartmentServiceGroupSuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentServiceGroupUnsuccessful', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.SEND_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL,
    };
    expect(
      apartmentServiceGroupActions.sendApartmentServiceGroupUnsuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to requestSendApartmentServiceGroup', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.REQUEST_SEND_APARTMENT_SERVICE_GROUP,
    };
    expect(
      apartmentServiceGroupActions.requestSendApartmentServiceGroup(),
    ).toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentServiceGroupSuccessful', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.DELETE_APARTMENT_SERVICE_GROUP_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(
      apartmentServiceGroupActions.deleteApartmentServiceGroupSuccessful('exampleSlug'),
    ).toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentServiceGroupUnsuccessful', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.DELETE_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL,
    };
    expect(
      apartmentServiceGroupActions.deleteApartmentServiceGroupUnsuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to requestDeleteApartmentServiceGroup', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.REQUEST_DELETE_APARTMENT_SERVICE_GROUP,
      slug: 'exampleSlug',
    };
    expect(
      apartmentServiceGroupActions.requestDeleteApartmentServiceGroup('exampleSlug'),
    ).toEqual(expectedAction);
  });

  it('should create an action to getApartmentServiceGroupSuccessful', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.GET_APARTMENT_SERVICE_GROUP_SUCCESSFUL,
    };
    expect(
      apartmentServiceGroupActions.getApartmentServiceGroupSuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to getApartmentServiceGroupUnsuccessful', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.GET_APARTMENT_SERVICE_GROUP_UNSUCCESSFUL,
    };
    expect(
      apartmentServiceGroupActions.getApartmentServiceGroupUnsuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentServiceGroup', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.REQUEST_GET_APARTMENT_SERVICE_GROUP,
      slug: 'exampleSlug',
    };
    expect(
      apartmentServiceGroupActions.requestGetApartmentServiceGroup('exampleSlug'),
    ).toEqual(expectedAction);
  });

  it('should create an action to getApartmentServiceGroupListSuccessful', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.GET_APARTMENT_SERVICE_GROUP_LIST_SUCCESSFUL,
    };
    expect(
      apartmentServiceGroupActions.getApartmentServiceGroupListSuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to getApartmentServiceGroupListUnsuccessful', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.GET_APARTMENT_SERVICE_GROUP_LIST_UNSUCCESSFUL,
    };
    expect(
      apartmentServiceGroupActions.getApartmentServiceGroupListUnsuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentServiceGroupList', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.REQUEST_GET_APARTMENT_SERVICE_GROUP_LIST,
    };
    expect(
      apartmentServiceGroupActions.requestGetApartmentServiceGroupList(),
    ).toEqual(expectedAction);
  });

  it('should create an action to clearApartmentServiceGroupForm', () => {
    const expectedAction = {
      type: apartmentServiceGroupActions.CLEAR_APARTMENT_SERVICE_GROUP_FORM,
    };
    expect(
      apartmentServiceGroupActions.clearApartmentServiceGroupForm(),
    ).toEqual(expectedAction);
  });
});
