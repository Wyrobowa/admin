import getFeedType from '../getFeedType';

describe('getFeedType', () => {
  it('should return valid object with params for login request', () => {
    expect(getFeedType('login')).toMatchSnapshot();
  });

  it('should return valid object with params for main-menu request', () => {
    expect(getFeedType('mainMenu')).toMatchSnapshot();
  });

  it('should return valid object with params for checkAvailability request', () => {
    expect(getFeedType('checkAvailability')).toMatchSnapshot();
  });
});
