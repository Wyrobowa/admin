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
        location: '',
        mainPicture: '',
        isPromoted: false,
        gallery: [],
        attributes: {
          measurement: '',
          guestsNumber: '2',
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
          guestsNumber: '2',
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
