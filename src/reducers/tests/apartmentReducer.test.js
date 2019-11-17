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
  facilities: {
    wlan: false,
    elevator: false,
    balcony: false,
    garden: false,
    parking: false,
    cosmetics: false,
    towels: false,
  },
  equipment: {
    hairDryer: false,
  },
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
