import reducer from '../apartmentTranslationsListReducer';
import * as apartmentTranslationsActions from '../../actions/apartmentTranslationsActions';

const initialState = {
  apartmentTranslations: [],
};

describe('apartment translations list reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_APARTMENT_TRANSLATIONS_LIST_SUCCESSFUL', () => {
    const changedState = {
      ...initialState,
      apartmentTranslations: [
        {
          name: 'translationsName',
        },
      ],
    };

    const payload = [
      {
        name: 'translationsName',
      },
    ];

    expect(reducer(initialState, {
      type: apartmentTranslationsActions.GET_APARTMENT_TRANSLATIONS_LIST_SUCCESSFUL,
      payload,
    })).toEqual(changedState);
  });
});
