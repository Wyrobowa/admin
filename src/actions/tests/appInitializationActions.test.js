import {
  INITIALIZATION_SUCCESSFUL,
  INITIALIZATION_FAILED,
  initSuccess,
  initFail,
} from '../appInitializationActions';

describe('initializationActions', () => {
  it('should create an action to set init state to successfull', () => {
    const expectedAction = {
      type: INITIALIZATION_SUCCESSFUL,
    };
    expect(initSuccess()).toEqual(expectedAction);
  });

  it('should create an action to set init state to failed', () => {
    const expectedAction = {
      type: INITIALIZATION_FAILED,
    };
    expect(initFail()).toEqual(expectedAction);
  });
});
