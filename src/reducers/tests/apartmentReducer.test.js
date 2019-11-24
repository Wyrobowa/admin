import reducer from '../apartmentReducer';
import * as apartmentActions from '../../actions/apartmentActions';

const initialState = {
  name: '',
  yieldApartmentId: '',
  apartmentNumber: '',
  description: '',
  location: '',
  mainPicture: '',
  gallery: [],
  attributes: {
    measurement: '',
    guestsNumber: '',
    guestsLimit: '',
    extraGuestPrice: '',
  },
  apartmentServices: [],
  apartmentFacilities: [],
  address: {
    city: '',
    address: '',
    mapCoordinates: {
      lat: 0,
      lng: 0,
    },
  },
  recommended: false,
  clientId: 'fragola',
};

describe('apartment reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle shallow EDIT_APARTMENT_FORM', () => {
    const changedState = {
      ...initialState,
      name: 'testValue',
    };

    expect(reducer(initialState, {
      type: apartmentActions.EDIT_APARTMENT_FORM,
      field: 'name',
      value: 'testValue',
    })).toEqual(changedState);
  });

  it('should handle nested EDIT_APARTMENT_FORM', () => {
    const changedState = {
      ...initialState,
      attributes: {
        ...initialState.attributes,
        guestsNumber: '10',
      },
    };

    expect(reducer(initialState, {
      type: apartmentActions.EDIT_APARTMENT_FORM,
      field: 'attributes.guestsNumber',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle adding gallery image EDIT_APARTMENT_FORM', () => {
    const changedState = {
      ...initialState,
      gallery: [
        ...initialState.gallery,
        '12345abcde',
      ],
    };

    expect(reducer(initialState, {
      type: apartmentActions.EDIT_APARTMENT_FORM,
      field: 'gallery',
      value: '12345abcde',
    })).toEqual(changedState);
  });

  it('should handle EDIT_APARTMENT_ADDRESS_FORM', () => {
    const changedState = {
      ...initialState,
      address: {
        ...initialState.address,
        mapCoordinates: {
          ...initialState.address.mapCoordinates,
          lat: '10',
        },
      },
    };

    expect(reducer(initialState, {
      type: apartmentActions.EDIT_APARTMENT_ADDRESS_FORM,
      field: 'lat',
      value: '10',
    })).toEqual(changedState);
  });

  it('should handle EDIT_APARTMENT_SERVICES_FORM when service is assigned to apartment and has been changed', () => {
    const addedApartmentServices = {
      ...initialState,
      apartmentServices: [
        '12345abcde',
      ],
    };

    const changedState = {
      ...addedApartmentServices,
      apartmentServices: [],
    };

    expect(reducer(addedApartmentServices, {
      type: apartmentActions.EDIT_APARTMENT_SERVICES_FORM,
      field: 'apartmentServices.12345abcde',
      value: false,
    })).toEqual(changedState);
  });

  it('should handle EDIT_APARTMENT_SERVICES_FORM when service isn\'t assigned to apartment and has been changed', () => {
    const changedState = {
      ...initialState,
      apartmentServices: [
        '12345abcde',
      ],
    };

    expect(reducer(initialState, {
      type: apartmentActions.EDIT_APARTMENT_SERVICES_FORM,
      field: 'apartmentServices.12345abcde',
      value: true,
    })).toEqual(changedState);
  });

  it('should handle EDIT_APARTMENT_SERVICES_FORM when service value hasn\'t been changed', () => {
    const changedState = {
      ...initialState,
      apartmentServices: [],
    };

    expect(reducer(initialState, {
      type: apartmentActions.EDIT_APARTMENT_SERVICES_FORM,
      field: 'apartmentServices.12345abcde',
      value: false,
    })).toEqual(changedState);
  });

  it('should handle DELETE_APARTMENT_GALLERY_IMAGE', () => {
    const addedImageToGallery = {
      ...initialState,
      gallery: [
        '12345abcde',
      ],
    };

    const changedState = {
      ...addedImageToGallery,
      gallery: [],
    };

    expect(reducer(addedImageToGallery, {
      type: apartmentActions.DELETE_APARTMENT_GALLERY_IMAGE,
      field: 'gallery',
      value: '12345abcde',
    })).toEqual(changedState);
  });

  it('should handle GET_APARTMENT_SUCCESSFUL', () => {
    const payload = {
      ...initialState,
      name: 'nameFromPayload',
    };

    expect(reducer(initialState, {
      type: apartmentActions.GET_APARTMENT_SUCCESSFUL,
      payload,
    })).toEqual(payload);
  });

  it('should handle CLEAR_APARTMENT_FORM', () => {
    expect(reducer(initialState, {
      type: apartmentActions.CLEAR_APARTMENT_FORM,
    })).toEqual(initialState);
  });
});
