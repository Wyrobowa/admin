import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import {
  REQUEST_SEND_LANGUAGE,
  REQUEST_GET_LANGUAGE,
  REQUEST_GET_LANGUAGES_LIST,
  sendLanguageSuccessful,
  sendLanguageUnsuccessful,
  getLanguageSuccessful,
  getLanguageUnsuccessful,
  getLanguagesListSuccessful,
  getLanguagesListUnsuccessful,
} from '../actions/languageActions';

// Reducers
import { getLanguage } from '../reducers/languageReducer';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Services
import { sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendLanguage() {
  const languageFormData = yield select(getLanguage);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'language', languageFormData);

    yield put(sendLanguageSuccessful());
    History.push('/languages-list');
  } catch (error) {
    yield put(sendLanguageUnsuccessful());
  }
}

export function* watchSendLanguage() {
  yield takeEvery(REQUEST_SEND_LANGUAGE, sendLanguage);
}

export function* watchGetLanguage() {
  yield takeEvery(REQUEST_GET_LANGUAGE, getDataSaga(
    getLanguageSuccessful,
    getLanguageUnsuccessful,
    'language',
    'code',
  ));
}

export function* watchGetLanguagesList() {
  yield takeEvery(REQUEST_GET_LANGUAGES_LIST, getDataSaga(
    getLanguagesListSuccessful,
    getLanguagesListUnsuccessful,
    'languagesList',
  ));
}
