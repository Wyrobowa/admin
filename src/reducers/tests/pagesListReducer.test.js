import reducer from '../pagesListReducer';
import * as pageActions from '../../actions/pageActions';

describe('pagesList reducer', () => {
  it('should handle GET_PAGES_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: pageActions.GET_PAGES_LIST_SUCCESSFUL,
      payload: [{
        name: 'testPage',
        text: 'test page text',
        published: true,
      }],
    })).toEqual({
      pages: [{
        name: 'testPage',
        text: 'test page text',
        published: true,
      }],
    });
  });
});
