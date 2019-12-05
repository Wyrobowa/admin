import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as apartmentTranslationsActions from '../actions/apartmentTranslationsActions';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Reducers
import { getApartmentTranslations } from '../reducers/apartmentTranslationsReducer';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartmentTranslations() {
  const apartmentFormData = yield select(getApartmentTranslations);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'apartmentTranslations', apartmentFormData);

    yield put(apartmentTranslationsActions.sendApartmentTranslationsSuccessful());
    History.push('/apartment-translations-list');
  } catch (error) {
    yield put(apartmentTranslationsActions.sendApartmentTranslationsUnsuccessful());
  }
}

export function* deleteApartmentTranslations(action) {
  try {
    yield call(deleteData, 'apartmentTranslations', action.slug);

    yield put(apartmentTranslationsActions.deleteApartmentTranslationsSuccessful(action.slug));
    History.push('/apartment-translations-list');
  } catch (error) {
    yield put(apartmentTranslationsActions.deleteApartmentTranslationsUnsuccessful());
  }
}

export function* watchSendApartmentTranslations() {
  yield takeEvery(
    apartmentTranslationsActions.REQUEST_SEND_APARTMENT_TRANSLATIONS,
    sendApartmentTranslations,
  );
}

export function* watchDeleteApartmentTranslations() {
  yield takeEvery(
    apartmentTranslationsActions.REQUEST_DELETE_APARTMENT_TRANSLATIONS,
    deleteApartmentTranslations,
  );
}

export function* watchGetApartmentTranslations() {
  yield takeEvery(apartmentTranslationsActions.REQUEST_GET_APARTMENT_TRANSLATIONS, getDataSaga(
    apartmentTranslationsActions.getApartmentTranslationsSuccessful,
    apartmentTranslationsActions.getApartmentTranslationsUnsuccessful,
    'apartmentTranslations',
  ));
}

export function* watchGetApartmentTranslationsList() {
  yield takeEvery(apartmentTranslationsActions.REQUEST_GET_APARTMENT_TRANSLATIONS_LIST, getDataSaga(
    apartmentTranslationsActions.getApartmentTranslationsListSuccessful,
    apartmentTranslationsActions.getApartmentTranslationsListUnsuccessful,
    'apartmentTranslationsList',
  ));
}
