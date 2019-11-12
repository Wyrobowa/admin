import reducer from '../languagesListReducer';
import { GET_LANGUAGES_LIST_SUCCESSFUL } from '../../actions/languageActions';

describe('languagesList reducer', () => {
  it('should handle GET_LANGUAGES_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: GET_LANGUAGES_LIST_SUCCESSFUL,
      payload: [{
        name: 'testLanguage',
        text: 'test language text',
        visibility: true,
      }],
    })).toEqual({
      languages: [{
        name: 'testLanguage',
        text: 'test language text',
        visibility: true,
      }],
    });
  });
});
