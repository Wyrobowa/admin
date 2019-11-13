import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import {
  REQUEST_SEND_TRANSLATION,
  REQUEST_GET_TRANSLATION,
  REQUEST_GET_TRANSLATIONS_LIST,
  sendTranslationSuccessful,
  sendTranslationUnsuccessful,
  getTranslationSuccessful,
  getTranslationUnsuccessful,
  getTranslationsListSuccessful,
  getTranslationsListUnsuccessful,
} from '../actions/translationActions';

// Reducers
import { getTranslation } from '../reducers/translationReducer';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Services
import { sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendTranslation() {
  const translationFormData = yield select(getTranslation);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'translation', translationFormData);

    yield put(sendTranslationSuccessful());
    History.push('/translations-list');
  } catch (error) {
    yield put(sendTranslationUnsuccessful());
  }
}

export function* watchSendTranslation() {
  yield takeEvery(REQUEST_SEND_TRANSLATION, sendTranslation);
}

export function* watchGetTranslation() {
  yield takeEvery(REQUEST_GET_TRANSLATION, getDataSaga(
    getTranslationSuccessful,
    getTranslationUnsuccessful,
    'translation',
    'id',
  ));
}

export function* watchGetTranslationsList() {
  yield takeEvery(REQUEST_GET_TRANSLATIONS_LIST, getDataSaga(
    getTranslationsListSuccessful,
    getTranslationsListUnsuccessful,
    'translationsList',
  ));
}
