import * as apartmentActions from '../apartmentActions';

describe('apartmentActions', () => {
  it('should create an action to editApartment form ', () => {
    const expectedAction = {
      type: apartmentActions.EDIT_APARTMENT_FORM,
    };
    expect(apartmentActions.editApartmentForm()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentSuccessful', () => {
    const expectedAction = {
      type: apartmentActions.SEND_APARTMENT_SUCCESSFUL,
    };
    expect(apartmentActions.sendApartmentSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentUnsuccessful', () => {
    const expectedAction = {
      type: apartmentActions.SEND_APARTMENT_UNSUCCESSFUL,
    };
    expect(apartmentActions.sendApartmentUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendApartment', () => {
    const expectedAction = {
      type: apartmentActions.REQUEST_SEND_APARTMENT,
    };
    expect(apartmentActions.requestSendApartment()).toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentSuccessful', () => {
    const expectedAction = {
      type: apartmentActions.DELETE_APARTMENT_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(apartmentActions.deleteApartmentSuccessful('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentUnsuccessful', () => {
    const expectedAction = {
      type: apartmentActions.DELETE_APARTMENT_UNSUCCESSFUL,
    };
    expect(apartmentActions.deleteApartmentUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestDeleteApartment', () => {
    const expectedAction = {
      type: apartmentActions.REQUEST_DELETE_APARTMENT,
      slug: 'exampleSlug',
    };
    expect(apartmentActions.requestDeleteApartment('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getApartmentSuccessful', () => {
    const expectedAction = {
      type: apartmentActions.GET_APARTMENT_SUCCESSFUL,
    };
    expect(apartmentActions.getApartmentSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentUnsuccessful', () => {
    const expectedAction = {
      type: apartmentActions.GET_APARTMENT_UNSUCCESSFUL,
    };
    expect(apartmentActions.getApartmentUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartment', () => {
    const expectedAction = {
      type: apartmentActions.REQUEST_GET_APARTMENT,
      slug: 'exampleSlug',
    };
    expect(apartmentActions.requestGetApartment('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getApartmentsListSuccessful', () => {
    const expectedAction = {
      type: apartmentActions.GET_APARTMENTS_LIST_SUCCESSFUL,
    };
    expect(apartmentActions.getApartmentsListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentsListUnsuccessful', () => {
    const expectedAction = {
      type: apartmentActions.GET_APARTMENTS_LIST_UNSUCCESSFUL,
    };
    expect(apartmentActions.getApartmentsListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentsList', () => {
    const expectedAction = {
      type: apartmentActions.REQUEST_GET_APARTMENTS_LIST,
    };
    expect(apartmentActions.requestGetApartmentsList()).toEqual(expectedAction);
  });

  it('should create an action to clearApartmentForm', () => {
    const expectedAction = {
      type: apartmentActions.CLEAR_APARTMENT_FORM,
    };
    expect(apartmentActions.clearApartmentForm()).toEqual(expectedAction);
  });
});
