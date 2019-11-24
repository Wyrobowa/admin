import reducer from '../apartmentsListReducer';
import * as apartmentActions from '../../actions/apartmentActions';

describe('apartmentsList reducer', () => {
  it('should handle GET_APARTMENTS_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: apartmentActions.GET_APARTMENTS_LIST_SUCCESSFUL,
      payload: [{
        name: 'testApartment',
        yieldApartmentId: '1',
        apartmentNumber: '2',
        description: 'test description',
        location: '',
        mainPicture: '',
        isPromoted: false,
        gallery: [],
        attributes: {
          measurement: '',
          guestsNumber: '',
          guestsLimit: '',
          extraGuestPrice: '',
        },
        apartmentServices: [],
        apartmentFacility: [],
        address: {
          city: 'City',
          address: 'Street 123',
          mapCoordinates: {
            lat: 50,
            lng: -100,
          },
        },
        recommended: false,
        clientId: 'fragola',
      }],
    })).toEqual({
      apartments: [{
        name: 'testApartment',
        yieldApartmentId: '1',
        apartmentNumber: '2',
        description: 'test description',
        location: '',
        mainPicture: '',
        gallery: [],
        isPromoted: false,
        attributes: {
          measurement: '',
          guestsNumber: '',
          guestsLimit: '',
          extraGuestPrice: '',
        },
        apartmentServices: [],
        apartmentFacility: [],
        address: {
          city: 'City',
          address: 'Street 123',
          mapCoordinates: {
            lat: 50,
            lng: -100,
          },
        },
        recommended: false,
        clientId: 'fragola',
      }],
    });
  });
});
