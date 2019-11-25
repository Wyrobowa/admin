import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as phraseActions from '../actions/phraseActions';

// Reducers
import { getPhrase } from '../reducers/phraseReducer';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendPhrase() {
  const phraseFormData = yield select(getPhrase);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'phrase', phraseFormData);

    yield put(phraseActions.sendPhraseSuccessful());
    History.push('/phrases-list');
  } catch (error) {
    yield put(phraseActions.sendPhraseUnsuccessful());
  }
}

export function* deletePhrase(action) {
  try {
    yield call(deleteData, 'phrase', action.slug);

    yield put(phraseActions.deletePhraseSuccessful(action.slug));
    History.push('/phrases-list');
  } catch (error) {
    yield put(phraseActions.deletePhraseUnsuccessful());
  }
}

export function* watchSendPhrase() {
  yield takeEvery(phraseActions.REQUEST_SEND_PHRASE, sendPhrase);
}

export function* watchDeletePhrase() {
  yield takeEvery(phraseActions.REQUEST_DELETE_PHRASE, deletePhrase);
}

export function* watchGetPhrase() {
  yield takeEvery(phraseActions.REQUEST_GET_PHRASE, getDataSaga(
    phraseActions.getPhraseSuccessful,
    phraseActions.getPhraseUnsuccessful,
    'phrase',
  ));
}

export function* watchGetPhrasesList() {
  yield takeEvery(phraseActions.REQUEST_GET_PHRASES_LIST, getDataSaga(
    phraseActions.getPhrasesListSuccessful,
    phraseActions.getPhrasesListUnsuccessful,
    'phrasesList',
  ));
}
