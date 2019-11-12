import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import {
  REQUEST_SEND_PHRASE,
  REQUEST_GET_PHRASE,
  REQUEST_GET_PHRASES_LIST,
  sendPhraseSuccessful,
  sendPhraseUnsuccessful,
  getPhraseSuccessful,
  getPhraseUnsuccessful,
  getPhrasesListSuccessful,
  getPhrasesListUnsuccessful,
} from '../actions/phraseActions';

// Reducers
import { getPhrase } from '../reducers/phraseReducer';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Services
import { sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendPhrase() {
  const phraseFormData = yield select(getPhrase);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'phrase', phraseFormData);

    yield put(sendPhraseSuccessful());
    History.push('/phrases-list');
  } catch (error) {
    yield put(sendPhraseUnsuccessful());
  }
}

export function* watchSendPhrase() {
  yield takeEvery(REQUEST_SEND_PHRASE, sendPhrase);
}

export function* watchGetPhrase() {
  yield takeEvery(REQUEST_GET_PHRASE, getDataSaga(
    getPhraseSuccessful,
    getPhraseUnsuccessful,
    'phrase',
    'id',
  ));
}

export function* watchGetPhrasesList() {
  yield takeEvery(REQUEST_GET_PHRASES_LIST, getDataSaga(
    getPhrasesListSuccessful,
    getPhrasesListUnsuccessful,
    'phrasesList',
  ));
}
