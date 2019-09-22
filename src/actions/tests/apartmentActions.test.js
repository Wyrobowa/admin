import {
  editApartmentForm,
  EDIT_APARTMENT_FORM,
  sendApartmentSuccessful,
  SEND_APARTMENT_SUCCESSFUL,
  sendApartmentUnsuccessful,
  SEND_APARTMENT_UNSUCCESSFUL,
  requestSendApartment,
  REQUEST_SEND_APARTMENT,
  getApartmentSuccessful,
  GET_APARTMENT_SUCCESSFUL,
  getApartmentUnsuccessful,
  GET_APARTMENT_UNSUCCESSFUL,
  requestGetApartment,
  REQUEST_GET_APARTMENT,
  getApartmentsListSuccessful,
  GET_APARTMENTS_LIST_SUCCESSFUL,
  getApartmentsListUnsuccessful,
  GET_APARTMENTS_LIST_UNSUCCESSFUL,
  requestGetApartmentsList,
  REQUEST_GET_APARTMENTS_LIST,
  setApartmentData,
  SET_APARTMENT_DATA,
  clearApartmentForm,
  CLEAR_APARTMENT_FORM,
} from '../apartmentActions';

describe('apartmentActions', () => {
  it('should create an action to editApartment form ', () => {
    const expectedAction = {
      type: EDIT_APARTMENT_FORM,
    };
    expect(editApartmentForm()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentSuccessful', () => {
    const expectedAction = {
      type: SEND_APARTMENT_SUCCESSFUL,
    };
    expect(sendApartmentSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendApartmentUnsuccessful', () => {
    const expectedAction = {
      type: SEND_APARTMENT_UNSUCCESSFUL,
    };
    expect(sendApartmentUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendApartment', () => {
    const expectedAction = {
      type: REQUEST_SEND_APARTMENT,
    };
    expect(requestSendApartment()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentSuccessful', () => {
    const expectedAction = {
      type: GET_APARTMENT_SUCCESSFUL,
    };
    expect(getApartmentSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentUnsuccessful', () => {
    const expectedAction = {
      type: GET_APARTMENT_UNSUCCESSFUL,
    };
    expect(getApartmentUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartment', () => {
    const expectedAction = {
      type: REQUEST_GET_APARTMENT,
      slug: 'exampleSlug',
    };
    expect(requestGetApartment('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getApartmentsListSuccessful', () => {
    const expectedAction = {
      type: GET_APARTMENTS_LIST_SUCCESSFUL,
    };
    expect(getApartmentsListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getApartmentsListUnsuccessful', () => {
    const expectedAction = {
      type: GET_APARTMENTS_LIST_UNSUCCESSFUL,
    };
    expect(getApartmentsListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentsList', () => {
    const expectedAction = {
      type: REQUEST_GET_APARTMENTS_LIST,
    };
    expect(requestGetApartmentsList()).toEqual(expectedAction);
  });

  it('should create an action to setApartmentData', () => {
    const expectedAction = {
      type: SET_APARTMENT_DATA,
    };
    expect(setApartmentData()).toEqual(expectedAction);
  });

  it('should create an action to clearApartmentForm', () => {
    const expectedAction = {
      type: CLEAR_APARTMENT_FORM,
    };
    expect(clearApartmentForm()).toEqual(expectedAction);
  });
});
