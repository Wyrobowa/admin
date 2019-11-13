import { all } from 'redux-saga/effects';

import { watchAppInitialization } from './appInitializationSaga';
import { watchLogin } from './authSaga';
import { watchSendApartment, watchGetApartment, watchGetApartmentsList } from './apartmentSaga';
import { watchSendApartmentService, watchGetApartmentService, watchGetApartmentServiceList } from './apartmentServiceSaga';
import { watchSendLanguage, watchGetLanguage, watchGetLanguagesList } from './languageSaga';
import { watchSendLocation, watchGetLocation, watchGetLocationsList } from './locationSaga';
import { watchGetPage, watchGetPagesList, watchSendPage } from './pageSaga';
import { watchSendPhrase, watchGetPhrase, watchGetPhrasesList } from './phraseSaga';
import { watchSendTranslation, watchGetTranslation, watchGetTranslationsList } from './translationSaga';

export default function* rootSaga() {
  yield all([
    watchGetApartmentsList(),
    watchAppInitialization(),
    watchGetApartment(),
    watchLogin(),
    watchSendApartment(),
    watchSendLocation(),
    watchGetLocation(),
    watchGetLocationsList(),
    watchGetPage(),
    watchGetPagesList(),
    watchSendPage(),
    watchSendApartmentService(),
    watchGetApartmentService(),
    watchGetApartmentServiceList(),
    watchSendLanguage(),
    watchGetLanguage(),
    watchGetLanguagesList(),
    watchSendPhrase(),
    watchGetPhrase(),
    watchGetPhrasesList(),
    watchSendTranslation(),
    watchGetTranslation(),
    watchGetTranslationsList(),
  ]);
}
