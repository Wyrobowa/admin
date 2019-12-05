import * as apartmentTranslationsActions from '../apartmentTranslationsActions';

describe('apartmentTranslationsActions', () => {
  it('should create an action to editApartmentTranslationsForm ', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.EDIT_APARTMENT_TRANSLATIONS_FORM,
    };
    expect(apartmentTranslationsActions.editApartmentTranslationsForm())
      .toEqual(expectedAction);
  });

  it('should create an action to sendApartmentTranslationsSuccessful', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.SEND_APARTMENT_TRANSLATIONS_SUCCESSFUL,
    };
    expect(apartmentTranslationsActions.sendApartmentTranslationsSuccessful())
      .toEqual(expectedAction);
  });

  it('should create an action to sendApartmentTranslationsUnsuccessful', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.SEND_APARTMENT_TRANSLATIONS_UNSUCCESSFUL,
    };
    expect(apartmentTranslationsActions.sendApartmentTranslationsUnsuccessful())
      .toEqual(expectedAction);
  });

  it('should create an action to requestSendApartmentTranslations', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.REQUEST_SEND_APARTMENT_TRANSLATIONS,
    };
    expect(apartmentTranslationsActions.requestSendApartmentTranslations())
      .toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentTranslationsSuccessful', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.DELETE_APARTMENT_TRANSLATIONS_SUCCESSFUL,
      slug: 'exampleSlug',
    };
    expect(apartmentTranslationsActions.deleteApartmentTranslationsSuccessful('exampleSlug'))
      .toEqual(expectedAction);
  });

  it('should create an action to deleteApartmentTranslationsUnsuccessful', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.DELETE_APARTMENT_TRANSLATIONS_UNSUCCESSFUL,
    };
    expect(apartmentTranslationsActions.deleteApartmentTranslationsUnsuccessful())
      .toEqual(expectedAction);
  });

  it('should create an action to requestDeleteApartmentTranslations', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.REQUEST_DELETE_APARTMENT_TRANSLATIONS,
      slug: 'exampleSlug',
    };
    expect(apartmentTranslationsActions.requestDeleteApartmentTranslations('exampleSlug'))
      .toEqual(expectedAction);
  });

  it('should create an action to getApartmentTranslationsSuccessful', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.GET_APARTMENT_TRANSLATIONS_SUCCESSFUL,
    };
    expect(apartmentTranslationsActions.getApartmentTranslationsSuccessful())
      .toEqual(expectedAction);
  });

  it('should create an action to getApartmentTranslationsUnsuccessful', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.GET_APARTMENT_TRANSLATIONS_UNSUCCESSFUL,
    };
    expect(apartmentTranslationsActions.getApartmentTranslationsUnsuccessful())
      .toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentTranslations', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.REQUEST_GET_APARTMENT_TRANSLATIONS,
      slug: 'exampleSlug',
    };
    expect(apartmentTranslationsActions.requestGetApartmentTranslations('exampleSlug'))
      .toEqual(expectedAction);
  });

  it('should create an action to getApartmentTranslationsListSuccessful', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.GET_APARTMENT_TRANSLATIONS_LIST_SUCCESSFUL,
    };
    expect(apartmentTranslationsActions.getApartmentTranslationsListSuccessful())
      .toEqual(expectedAction);
  });

  it('should create an action to getApartmentTranslationsListUnsuccessful', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.GET_APARTMENT_TRANSLATIONS_LIST_UNSUCCESSFUL,
    };
    expect(apartmentTranslationsActions.getApartmentTranslationsListUnsuccessful())
      .toEqual(expectedAction);
  });

  it('should create an action to requestGetApartmentTranslationsList', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.REQUEST_GET_APARTMENT_TRANSLATIONS_LIST,
    };
    expect(apartmentTranslationsActions.requestGetApartmentTranslationsList())
      .toEqual(expectedAction);
  });

  it('should create an action to clearApartmentTranslationsForm', () => {
    const expectedAction = {
      type: apartmentTranslationsActions.CLEAR_APARTMENT_TRANSLATIONS_FORM,
    };
    expect(apartmentTranslationsActions.clearApartmentTranslationsForm())
      .toEqual(expectedAction);
  });
});
