import { LOGIN_SUCCESSFUL, loginSuccessful } from '../appStatusActions';

describe('appStatusActions', () => {
  it('should create an action to loginSuccessful', () => {
    expect(loginSuccessful()).toHaveProperty('type', LOGIN_SUCCESSFUL);
  });
});
