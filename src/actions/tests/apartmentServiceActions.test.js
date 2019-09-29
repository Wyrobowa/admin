import * as apartmentServiceActions from '../apartmentServiceActions';

describe('apartmentServiceActions', () => {
  it('should create an action to editApartmentServiceForm ', () => {
    const expectedAction = {
      type: apartmentServiceActions.EDIT_APARTMENT_SERVICE_FORM,
    };
    expect(apartmentServiceActions.editApartmentServiceForm()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentServiceSuccessful', () => {
    const expectedAction = {
      type: apartmentServiceActions.SEND_APARTMENT_SERVICE_SUCCESSFUL,
    };
    expect(apartmentServiceActions.sendApartmentServiceSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentServiceUnsuccessful', () => {
    const expectedAction = {
      type: apartmentServiceActions.SEND_APARTMENT_SERVICE_UNSUCCESSFUL,
    };
    expect(apartmentServiceActions.sendApartmentServiceUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendApartmentService', () => {
    const expectedAction = {
      type: apartmentServiceActions.REQUEST_SEND_APARTMENT_SERVICE,
    };
    expect(apartmentServiceActions.requestSendApartmentService()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentServiceSuccessful', () => {
    const expectedAction = {
      type: apartmentServiceActions.GET_APARTMENT_SERVICE_SUCCESSFUL,
    };
    expect(apartmentServiceActions.getApartmentServiceSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentServiceUnsuccessful', () => {
    const expectedAction = {
      type: apartmentServiceActions.GET_APARTMENT_SERVICE_UNSUCCESSFUL,
    };
    expect(apartmentServiceActions.getApartmentServiceUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentService', () => {
    const expectedAction = {
      type: apartmentServiceActions.REQUEST_GET_APARTMENT_SERVICE,
      slug: 'exampleSlug',
    };
    expect(apartmentServiceActions.requestGetApartmentService('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getApartmentServiceListSuccessful', () => {
    const expectedAction = {
      type: apartmentServiceActions.GET_APARTMENT_SERVICE_LIST_SUCCESSFUL,
    };
    expect(apartmentServiceActions.getApartmentServiceListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentServiceListUnsuccessful', () => {
    const expectedAction = {
      type: apartmentServiceActions.GET_APARTMENT_SERVICE_LIST_UNSUCCESSFUL,
    };
    expect(apartmentServiceActions.getApartmentServiceListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentServiceList', () => {
    const expectedAction = {
      type: apartmentServiceActions.REQUEST_GET_APARTMENT_SERVICE_LIST,
    };
    expect(apartmentServiceActions.requestGetApartmentServiceList()).toEqual(expectedAction);
  });

  it('should create an action to clearApartmentServiceForm', () => {
    const expectedAction = {
      type: apartmentServiceActions.CLEAR_APARTMENT_SERVICE_FORM,
    };
    expect(apartmentServiceActions.clearApartmentServiceForm()).toEqual(expectedAction);
  });
});
