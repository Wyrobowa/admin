import reducer from '../pagesListReducer';
import { GET_PAGES_LIST_SUCCESSFUL } from '../../actions/pageActions';

describe('pagesList reducer', () => {
  it('should handle GET_PAGES_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: GET_PAGES_LIST_SUCCESSFUL,
      payload: [{
        name: 'testPage',
        text: 'test page text',
        visibility: true,
      }],
    })).toEqual({
      pages: [{
        name: 'testPage',
        text: 'test page text',
        visibility: true,
      }],
    });
  });
});
