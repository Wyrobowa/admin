import reducer from '../languagesListReducer';
import * as languageActions from '../../actions/languageActions';

describe('languagesList reducer', () => {
  it('should handle GET_LANGUAGES_LIST_SUCCESSFUL', () => {
    expect(reducer({}, {
      type: languageActions.GET_LANGUAGES_LIST_SUCCESSFUL,
      payload: [{
        name: 'testLanguage',
        text: 'test language text',
        published: true,
      }],
    })).toEqual({
      languages: [{
        name: 'testLanguage',
        text: 'test language text',
        published: true,
      }],
    });
  });
});
