import { all } from 'redux-saga/effects';

import * as appInitializationWatchers from './appInitializationSaga';
import * as authWatchers from './authSaga';
import * as apartmentWatchers from './apartmentSaga';
import * as apartmentServiceWatchers from './apartmentServiceSaga';
import * as languageWatchers from './languageSaga';
import * as locationWatchers from './locationSaga';
import * as pageWatchers from './pageSaga';
import * as phraseWatchers from './phraseSaga';
import * as translationWatchers from './translationSaga';

export default function* rootSaga() {
  yield all([
    appInitializationWatchers.watchAppInitialization(),
    authWatchers.watchLogin(),
    apartmentWatchers.watchGetApartmentsList(),
    apartmentWatchers.watchGetApartment(),
    apartmentWatchers.watchSendApartment(),
    apartmentWatchers.watchDeleteApartment(),
    apartmentServiceWatchers.watchSendApartmentService(),
    apartmentServiceWatchers.watchGetApartmentService(),
    apartmentServiceWatchers.watchGetApartmentServiceList(),
    apartmentServiceWatchers.watchDeleteApartmentService(),
    languageWatchers.watchSendLanguage(),
    languageWatchers.watchGetLanguage(),
    languageWatchers.watchGetLanguagesList(),
    languageWatchers.watchDeleteLanguage(),
    locationWatchers.watchSendLocation(),
    locationWatchers.watchGetLocation(),
    locationWatchers.watchGetLocationsList(),
    locationWatchers.watchDeleteLocation(),
    pageWatchers.watchGetPage(),
    pageWatchers.watchGetPagesList(),
    pageWatchers.watchSendPage(),
    pageWatchers.watchDeletePage(),
    phraseWatchers.watchSendPhrase(),
    phraseWatchers.watchGetPhrase(),
    phraseWatchers.watchGetPhrasesList(),
    phraseWatchers.watchDeletePhrase(),
    translationWatchers.watchSendTranslation(),
    translationWatchers.watchGetTranslation(),
    translationWatchers.watchGetTranslationsList(),
    translationWatchers.watchDeleteTranslation(),
  ]);
}
