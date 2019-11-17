import * as locationActions from '../locationActions';

describe('locationActions', () => {
  it('should create an action to editLocation form ', () => {
    const expectedAction = {
      type: locationActions.EDIT_LOCATION_FORM,
    };
    expect(locationActions.editLocationForm()).toEqual(expectedAction);
  });

  it('should create an action to sendLocationSuccessful', () => {
    const expectedAction = {
      type: locationActions.SEND_LOCATION_SUCCESSFUL,
    };
    expect(locationActions.sendLocationSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to sendLocationUnsuccessful', () => {
    const expectedAction = {
      type: locationActions.SEND_LOCATION_UNSUCCESSFUL,
    };
    expect(locationActions.sendLocationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestSendLocation', () => {
    const expectedAction = {
      type: locationActions.REQUEST_SEND_LOCATION,
    };
    expect(locationActions.requestSendLocation()).toEqual(expectedAction);
  });

  it('should create an action to deleteLocationSuccessful', () => {
    const expectedAction = {
      type: locationActions.DELETE_LOCATION_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(locationActions.deleteLocationSuccessful('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to deleteLocationUnsuccessful', () => {
    const expectedAction = {
      type: locationActions.DELETE_LOCATION_UNSUCCESSFUL,
    };
    expect(locationActions.deleteLocationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestDeleteLocation', () => {
    const expectedAction = {
      type: locationActions.REQUEST_DELETE_LOCATION,
      slug: 'exampleSlug',
    };
    expect(locationActions.requestDeleteLocation('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getLocationSuccessful', () => {
    const expectedAction = {
      type: locationActions.GET_LOCATION_SUCCESSFUL,
    };
    expect(locationActions.getLocationSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getLocationUnsuccessful', () => {
    const expectedAction = {
      type: locationActions.GET_LOCATION_UNSUCCESSFUL,
    };
    expect(locationActions.getLocationUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetLocation', () => {
    const expectedAction = {
      type: locationActions.REQUEST_GET_LOCATION,
      slug: 'exampleSlug',
    };
    expect(locationActions.requestGetLocation('exampleSlug')).toEqual(expectedAction);
  });

  it('should create an action to getLocationsListSuccessful', () => {
    const expectedAction = {
      type: locationActions.GET_LOCATIONS_LIST_SUCCESSFUL,
    };
    expect(locationActions.getLocationsListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getLocationsListUnsuccessful', () => {
    const expectedAction = {
      type: locationActions.GET_LOCATIONS_LIST_UNSUCCESSFUL,
    };
    expect(locationActions.getLocationsListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to requestGetLocationsList', () => {
    const expectedAction = {
      type: locationActions.REQUEST_GET_LOCATIONS_LIST,
    };
    expect(locationActions.requestGetLocationsList()).toEqual(expectedAction);
  });

  it('should create an action to setLocationData', () => {
    const expectedAction = {
      type: locationActions.SET_LOCATION_DATA,
    };
    expect(locationActions.setLocationData()).toEqual(expectedAction);
  });

  it('should create an action to clearLocationForm', () => {
    const expectedAction = {
      type: locationActions.CLEAR_LOCATION_FORM,
    };
    expect(locationActions.clearLocationForm()).toEqual(expectedAction);
  });
});
