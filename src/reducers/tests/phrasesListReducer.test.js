import reducer from '../phrasesListReducer';
import { GET_PHRASES_LIST_SUCCESSFUL } from '../../actions/phraseActions';

describe('phrasesList reducer', () => {
  it('should handle GET_PHRASES_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: GET_PHRASES_LIST_SUCCESSFUL,
      payload: [{
        text: 'test phrase text',
        id: '0123',
      }],
    })).toEqual({
      phrases: [{
        text: 'test phrase text',
        id: '0123',
      }],
    });
  });
});
