import reducer from '../translationsListReducer';
import { GET_TRANSLATIONS_LIST_SUCCESSFUL } from '../../actions/translationActions';

describe('translationsList reducer', () => {
  it('should handle GET_TRANSLATIONS_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: GET_TRANSLATIONS_LIST_SUCCESSFUL,
      payload: [{
        text: 'test translation text',
        id: '0123',
      }],
    })).toEqual({
      translations: [{
        text: 'test translation text',
        id: '0123',
      }],
    });
  });
});
