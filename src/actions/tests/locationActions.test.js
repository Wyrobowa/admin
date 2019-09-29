import {
  editLocationForm,
  EDIT_LOCATION_FORM,
  sendLocationSuccessful,
  SEND_LOCATION_SUCCESSFUL,
  sendLocationUnsuccessful,
  SEND_LOCATION_UNSUCCESSFUL,
  requestSendLocation,
  REQUEST_SEND_LOCATION,
  getLocationSuccessful,
  GET_LOCATION_SUCCESSFUL,
  getLocationUnsuccessful,
  GET_LOCATION_UNSUCCESSFUL,
  requestGetLocation,
  REQUEST_GET_LOCATION,
  getLocationsListSuccessful,
  GET_LOCATIONS_LIST_SUCCESSFUL,
  getLocationsListUnsuccessful,
  GET_LOCATIONS_LIST_UNSUCCESSFUL,
  requestGetLocationsList,
  REQUEST_GET_LOCATIONS_LIST,
  setLocationData,
  SET_LOCATION_DATA,
  clearLocationForm,
  CLEAR_LOCATION_FORM,
} from '../locationActions';

describe('locationActions', () => {
  it('should create an action to editLocation form ', () => {
    const expectedAction = {
      type: EDIT_LOCATION_FORM,
    };
    expect(editLocationForm()).toEqual(expectedAction);
  });

  it('should create an action to sendLocationSuccessful', () => {
    const expectedAction = {
      type: SEND_LOCATION_SUCCESSFUL,
    };
    expect(sendLocationSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendLocationUnsuccessful', () => {
    const expectedAction = {
      type: SEND_LOCATION_UNSUCCESSFUL,
    };
    expect(sendLocationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendLocation', () => {
    const expectedAction = {
      type: REQUEST_SEND_LOCATION,
    };
    expect(requestSendLocation()).toEqual(expectedAction);
  });

  it('should create an action to getLocationSuccessful', () => {
    const expectedAction = {
      type: GET_LOCATION_SUCCESSFUL,
    };
    expect(getLocationSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getLocationUnsuccessful', () => {
    const expectedAction = {
      type: GET_LOCATION_UNSUCCESSFUL,
    };
    expect(getLocationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetLocation', () => {
    const expectedAction = {
      type: REQUEST_GET_LOCATION,
      slug: 'exampleSlug',
    };
    expect(requestGetLocation('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getLocationsListSuccessful', () => {
    const expectedAction = {
      type: GET_LOCATIONS_LIST_SUCCESSFUL,
    };
    expect(getLocationsListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getLocationsListUnsuccessful', () => {
    const expectedAction = {
      type: GET_LOCATIONS_LIST_UNSUCCESSFUL,
    };
    expect(getLocationsListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetLocationsList', () => {
    const expectedAction = {
      type: REQUEST_GET_LOCATIONS_LIST,
    };
    expect(requestGetLocationsList()).toEqual(expectedAction);
  });

  it('should create an action to setLocationData', () => {
    const expectedAction = {
      type: SET_LOCATION_DATA,
    };
    expect(setLocationData()).toEqual(expectedAction);
  });

  it('should create an action to clearLocationForm', () => {
    const expectedAction = {
      type: CLEAR_LOCATION_FORM,
    };
    expect(clearLocationForm()).toEqual(expectedAction);
  });
});
