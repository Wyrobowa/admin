import { all } from 'redux-saga/effects';

import * as appInitializationWatchers from './appInitializationSaga';
import * as authWatchers from './authSaga';
import * as apartmentWatchers from './apartmentSaga';
import * as apartmentFacilityWatchers from './apartmentFacilitySaga';
import * as apartmentFacilityGroupWatchers from './apartmentFacilityGroupSaga';
import * as apartmentServiceWatchers from './apartmentServiceSaga';
import * as apartmentServiceGroupWatchers from './apartmentServiceGroupSaga';
import * as apartmentTranslationsWatchers from './apartmentTranslationSaga';
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
    apartmentFacilityWatchers.watchGetApartmentFacility(),
    apartmentFacilityWatchers.watchGetApartmentFacilityList(),
    apartmentFacilityWatchers.watchSendApartmentFacility(),
    apartmentFacilityWatchers.watchDeleteApartmentFacility(),
    apartmentFacilityGroupWatchers.watchGetApartmentFacilityGroup(),
    apartmentFacilityGroupWatchers.watchGetApartmentFacilityGroupList(),
    apartmentFacilityGroupWatchers.watchSendApartmentFacilityGroup(),
    apartmentFacilityGroupWatchers.watchDeleteApartmentFacilityGroup(),
    apartmentServiceWatchers.watchSendApartmentService(),
    apartmentServiceWatchers.watchGetApartmentService(),
    apartmentServiceWatchers.watchGetApartmentServiceList(),
    apartmentServiceWatchers.watchDeleteApartmentService(),
    apartmentServiceGroupWatchers.watchSendApartmentServiceGroup(),
    apartmentServiceGroupWatchers.watchGetApartmentServiceGroup(),
    apartmentServiceGroupWatchers.watchGetApartmentServiceGroupList(),
    apartmentServiceGroupWatchers.watchDeleteApartmentServiceGroup(),
    apartmentTranslationsWatchers.watchSendApartmentTranslations(),
    apartmentTranslationsWatchers.watchGetApartmentTranslations(),
    apartmentTranslationsWatchers.watchGetApartmentTranslationsList(),
    apartmentTranslationsWatchers.watchDeleteApartmentTranslations(),
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
