import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import {
  REQUEST_SEND_PAGE,
  REQUEST_GET_PAGE,
  REQUEST_GET_PAGES_LIST,
  sendPageSuccessful,
  sendPageUnsuccessful,
  getPageSuccessful,
  getPageUnsuccessful,
  getPagesListSuccessful,
  getPagesListUnsuccessful,
} from '../actions/pageActions';

// Reducers
import { getPage } from '../reducers/pageReducer';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Services
import { sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendPage() {
  const pageFormData = yield select(getPage);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'adminPage', pageFormData);

    yield put(sendPageSuccessful());
    History.push('/pages-list');
  } catch (error) {
    yield put(sendPageUnsuccessful());
  }
}

export function* watchSendPage() {
  yield takeEvery(REQUEST_SEND_PAGE, sendPage);
}

export function* watchGetPage() {
  yield takeEvery(REQUEST_GET_PAGE, getDataSaga(
    getPageSuccessful,
    getPageUnsuccessful,
    'page',
  ));
}

export function* watchGetPagesList() {
  yield takeEvery(REQUEST_GET_PAGES_LIST, getDataSaga(
    getPagesListSuccessful,
    getPagesListUnsuccessful,
    'pagesList',
  ));
}
