import reducer from '../apartmentsListReducer';
import { GET_APARTMENTS_LIST_SUCCESSFUL } from '../../actions/apartmentActions';

describe('apartmentsList reducer', () => {
  it('should handle GET_APARTMENTS_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: GET_APARTMENTS_LIST_SUCCESSFUL,
      payload: [{
        name: 'testApartment',
        yieldApartmentId: '1',
        apartmentNumber: '2',
        description: 'test description',
        mainPicture: '',
        gallery: [],
        attributes: {
          measurement: '',
          guestsNumber: '2',
          guestsLimit: '',
          extraGuestPrice: '',
          isWlanAvailable: false,
        },
        location: {
          city: 'City',
          address: 'Street 123',
          coordinates: {
            lat: 50,
            lng: -100,
          },
        },
        clientId: 'fragola',
      }],
    })).toEqual({
      apartments: [{
        name: 'testApartment',
        yieldApartmentId: '1',
        apartmentNumber: '2',
        description: 'test description',
        mainPicture: '',
        gallery: [],
        attributes: {
          measurement: '',
          guestsNumber: '2',
          guestsLimit: '',
          extraGuestPrice: '',
          isWlanAvailable: false,
        },
        location: {
          city: 'City',
          address: 'Street 123',
          coordinates: {
            lat: 50,
            lng: -100,
          },
        },
        clientId: 'fragola',
      }],
    });
  });
});
