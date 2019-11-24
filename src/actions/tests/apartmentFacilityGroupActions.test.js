import * as apartmentFacilityGroupActions from '../apartmentFacilityGroupActions';

describe('apartmentFacilityGroupActions', () => {
  it('should create an action to editApartmentFacilityGroupForm ', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.EDIT_APARTMENT_FACILITY_GROUP_FORM,
    };
    expect(apartmentFacilityGroupActions.editApartmentFacilityGroupForm()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentFacilityGroupSuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.SEND_APARTMENT_FACILITY_GROUP_SUCCESSFUL,
    };
    expect(
      apartmentFacilityGroupActions.sendApartmentFacilityGroupSuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentFacilityGroupUnsuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.SEND_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL,
    };
    expect(
      apartmentFacilityGroupActions.sendApartmentFacilityGroupUnsuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to requestSendApartmentFacilityGroup', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.REQUEST_SEND_APARTMENT_FACILITY_GROUP,
    };
    expect(
      apartmentFacilityGroupActions.requestSendApartmentFacilityGroup(),
    ).toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentFacilityGroupSuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.DELETE_APARTMENT_FACILITY_GROUP_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(
      apartmentFacilityGroupActions.deleteApartmentFacilityGroupSuccessful('exampleSlug'),
    ).toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentFacilityGroupUnsuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.DELETE_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL,
    };
    expect(
      apartmentFacilityGroupActions.deleteApartmentFacilityGroupUnsuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to requestDeleteApartmentFacilityGroup', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.REQUEST_DELETE_APARTMENT_FACILITY_GROUP,
      slug: 'exampleSlug',
    };
    expect(
      apartmentFacilityGroupActions.requestDeleteApartmentFacilityGroup('exampleSlug'),
    ).toEqual(expectedAction);
  });

  it('should create an action to getApartmentFacilityGroupSuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.GET_APARTMENT_FACILITY_GROUP_SUCCESSFUL,
    };
    expect(
      apartmentFacilityGroupActions.getApartmentFacilityGroupSuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to getApartmentFacilityGroupUnsuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.GET_APARTMENT_FACILITY_GROUP_UNSUCCESSFUL,
    };
    expect(
      apartmentFacilityGroupActions.getApartmentFacilityGroupUnsuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentFacilityGroup', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.REQUEST_GET_APARTMENT_FACILITY_GROUP,
      slug: 'exampleSlug',
    };
    expect(
      apartmentFacilityGroupActions.requestGetApartmentFacilityGroup('exampleSlug'),
    ).toEqual(expectedAction);
  });

  it('should create an action to getApartmentFacilityGroupListSuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.GET_APARTMENT_FACILITY_GROUP_LIST_SUCCESSFUL,
    };
    expect(
      apartmentFacilityGroupActions.getApartmentFacilityGroupListSuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to getApartmentFacilityGroupListUnsuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.GET_APARTMENT_FACILITY_GROUP_LIST_UNSUCCESSFUL,
    };
    expect(
      apartmentFacilityGroupActions.getApartmentFacilityGroupListUnsuccessful(),
    ).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentFacilityGroupList', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.REQUEST_GET_APARTMENT_FACILITY_GROUP_LIST,
    };
    expect(
      apartmentFacilityGroupActions.requestGetApartmentFacilityGroupList(),
    ).toEqual(expectedAction);
  });

  it('should create an action to clearApartmentFacilityGroupForm', () => {
    const expectedAction = {
      type: apartmentFacilityGroupActions.CLEAR_APARTMENT_FACILITY_GROUP_FORM,
    };
    expect(
      apartmentFacilityGroupActions.clearApartmentFacilityGroupForm(),
    ).toEqual(expectedAction);
  });
});
