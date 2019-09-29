import reducer from '../apartmentReducer';
import { EDIT_APARTMENT_FORM, GET_APARTMENT_SUCCESSFUL, CLEAR_APARTMENT_FORM } from '../../actions/apartmentActions';

const initialState = {
  name: '',
  yieldApartmentId: '',
  apartmentNumber: '',
  description: '',
  mainPicture: '',
  gallery: [],
  attributes: {
    measurement: '',
    guestsNumber: '',
    guestsLimit: '',
    extraGuestPrice: '',
    isWlanAvailable: false,
  },
  location: {
    city: '',
    address: '',
    coordinates: {
      lat: 0,
      lng: 0,
    },
  },
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
      type: EDIT_APARTMENT_FORM,
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
      type: EDIT_APARTMENT_FORM,
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
      type: GET_APARTMENT_SUCCESSFUL,
      payload,
    })).toEqual(payload);
  });

  it('should handle CLEAR_APARTMENT_FORM', () => {
    expect(reducer(initialState, {
      type: CLEAR_APARTMENT_FORM,
    })).toEqual(initialState);
  });
});
