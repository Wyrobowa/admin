import * as apartmentFacilityActions from '../apartmentFacilityActions';

describe('apartmentFacilityActions', () => {
  it('should create an action to editApartmentFacilityForm ', () => {
    const expectedAction = {
      type: apartmentFacilityActions.EDIT_APARTMENT_FACILITY_FORM,
    };
    expect(apartmentFacilityActions.editApartmentFacilityForm()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentFacilitySuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityActions.SEND_APARTMENT_FACILITY_SUCCESSFUL,
    };
    expect(apartmentFacilityActions.sendApartmentFacilitySuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentFacilityUnsuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityActions.SEND_APARTMENT_FACILITY_UNSUCCESSFUL,
    };
    expect(apartmentFacilityActions.sendApartmentFacilityUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendApartmentFacility', () => {
    const expectedAction = {
      type: apartmentFacilityActions.REQUEST_SEND_APARTMENT_FACILITY,
    };
    expect(apartmentFacilityActions.requestSendApartmentFacility()).toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentFacilitySuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityActions.DELETE_APARTMENT_FACILITY_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(apartmentFacilityActions.deleteApartmentFacilitySuccessful('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentFacilityUnsuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityActions.DELETE_APARTMENT_FACILITY_UNSUCCESSFUL,
    };
    expect(apartmentFacilityActions.deleteApartmentFacilityUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestDeleteApartmentFacility', () => {
    const expectedAction = {
      type: apartmentFacilityActions.REQUEST_DELETE_APARTMENT_FACILITY,
      slug: 'exampleSlug',
    };
    expect(apartmentFacilityActions.requestDeleteApartmentFacility('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getApartmentFacilitySuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityActions.GET_APARTMENT_FACILITY_SUCCESSFUL,
    };
    expect(apartmentFacilityActions.getApartmentFacilitySuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentFacilityUnsuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityActions.GET_APARTMENT_FACILITY_UNSUCCESSFUL,
    };
    expect(apartmentFacilityActions.getApartmentFacilityUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentFacility', () => {
    const expectedAction = {
      type: apartmentFacilityActions.REQUEST_GET_APARTMENT_FACILITY,
      slug: 'exampleSlug',
    };
    expect(apartmentFacilityActions.requestGetApartmentFacility('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getApartmentFacilityListSuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityActions.GET_APARTMENT_FACILITY_LIST_SUCCESSFUL,
    };
    expect(apartmentFacilityActions.getApartmentFacilityListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentFacilityListUnsuccessful', () => {
    const expectedAction = {
      type: apartmentFacilityActions.GET_APARTMENT_FACILITY_LIST_UNSUCCESSFUL,
    };
    expect(apartmentFacilityActions.getApartmentFacilityListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentFacilityList', () => {
    const expectedAction = {
      type: apartmentFacilityActions.REQUEST_GET_APARTMENT_FACILITY_LIST,
    };
    expect(apartmentFacilityActions.requestGetApartmentFacilityList()).toEqual(expectedAction);
  });

  it('should create an action to clearApartmentFacilityForm', () => {
    const expectedAction = {
      type: apartmentFacilityActions.CLEAR_APARTMENT_FACILITY_FORM,
    };
    expect(apartmentFacilityActions.clearApartmentFacilityForm()).toEqual(expectedAction);
  });
});
