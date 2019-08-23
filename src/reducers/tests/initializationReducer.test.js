import reducer, { getInitStatus } from '../appInitializationReducer';
import { INITIALIZATION_SUCCESSFUL, INITIALIZATION_FAILED } from '../../actions/appInitializationActions';

describe('initialization reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      initStatus: 'loading',
    });
  });

  it('should handle INITIALIZATION_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: INITIALIZATION_SUCCESSFUL,
    })).toEqual({
      initStatus: 'successful',
    });
  });

  it('should handle INITIALIZATION_FAILED', () => {
    expect(reducer({}, {
      type: INITIALIZATION_FAILED,
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
