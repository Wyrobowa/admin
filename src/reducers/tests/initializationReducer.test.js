import reducer, { getInitStatus } from '../appInitializationReducer';
import * as appInitializationActions from '../../actions/appInitializationActions';

describe('initialization reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      initStatus: 'loading',
    });
  });

  it('should handle INITIALIZATION_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: appInitializationActions.INITIALIZATION_SUCCESSFUL,
    })).toEqual({
      initStatus: 'successful',
    });
  });

  it('should handle INITIALIZATION_FAILED', () => {
    expect(reducer({}, {
      type: appInitializationActions.INITIALIZATION_FAILED,
    })).toEqual({
      initStatus: 'failed',
    });
  });

  it('should return initialization state', () => {
    const fakeState = {
      appInitialization: {
        initStatus: 'loading',
      },
    };

    expect(getInitStatus(fakeState)).toEqual('loading');
  });
});
