import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as languageActions from '../actions/languageActions';

// Reducers
import { getLanguage } from '../reducers/languageReducer';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendLanguage() {
  const languageFormData = yield select(getLanguage);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'language', languageFormData);

    yield put(languageActions.sendLanguageSuccessful());
    History.push('/languages-list');
  } catch (error) {
    yield put(languageActions.sendLanguageUnsuccessful());
  }
}

export function* deleteLanguage(action) {
  try {
    yield call(deleteData, 'language', action.slug);

    yield put(languageActions.deleteLanguageSuccessful(action.slug));
    History.push('/languages-list');
  } catch (error) {
    yield put(languageActions.deleteLanguageUnsuccessful());
  }
}

export function* watchSendLanguage() {
  yield takeEvery(languageActions.REQUEST_SEND_LANGUAGE, sendLanguage);
}

export function* watchDeleteLanguage() {
  yield takeEvery(languageActions.REQUEST_DELETE_LANGUAGE, deleteLanguage);
}

export function* watchGetLanguage() {
  yield takeEvery(languageActions.REQUEST_GET_LANGUAGE, getDataSaga(
    languageActions.getLanguageSuccessful,
    languageActions.getLanguageUnsuccessful,
    'language',
  ));
}

export function* watchGetLanguagesList() {
  yield takeEvery(languageActions.REQUEST_GET_LANGUAGES_LIST, getDataSaga(
    languageActions.getLanguagesListSuccessful,
    languageActions.getLanguagesListUnsuccessful,
    'languagesList',
  ));
}
