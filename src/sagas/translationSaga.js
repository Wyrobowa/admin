import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as translationActions from '../actions/translationActions';

// Reducers
import { getTranslation } from '../reducers/translationReducer';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendTranslation() {
  const translationFormData = yield select(getTranslation);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'translation', translationFormData);

    yield put(translationActions.sendTranslationSuccessful());
    History.push('/translations-list');
  } catch (error) {
    yield put(translationActions.sendTranslationUnsuccessful());
  }
}

export function* deleteTranslation(action) {
  try {
    yield call(deleteData, 'translation', action.slug);

    yield put(translationActions.deleteTranslationSuccessful(action.slug));
    History.push('/translations-list');
  } catch (error) {
    yield put(translationActions.deleteTranslationUnsuccessful());
  }
}

export function* watchSendTranslation() {
  yield takeEvery(translationActions.REQUEST_SEND_TRANSLATION, sendTranslation);
}

export function* watchDeleteTranslation() {
  yield takeEvery(translationActions.REQUEST_DELETE_TRANSLATION, deleteTranslation);
}

export function* watchGetTranslation() {
  yield takeEvery(translationActions.REQUEST_GET_TRANSLATION, getDataSaga(
    translationActions.getTranslationSuccessful,
    translationActions.getTranslationUnsuccessful,
    'translation',
    'id',
  ));
}

export function* watchGetTranslationsList() {
  yield takeEvery(translationActions.REQUEST_GET_TRANSLATIONS_LIST, getDataSaga(
    translationActions.getTranslationsListSuccessful,
    translationActions.getTranslationsListUnsuccessful,
    'translationsList',
  ));
}
