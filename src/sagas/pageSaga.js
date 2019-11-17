import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as pageActions from '../actions/pageActions';

// Reducers
import { getPage } from '../reducers/pageReducer';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendPage() {
  const pageFormData = yield select(getPage);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'page', pageFormData);

    yield put(pageActions.sendPageSuccessful());
    History.push('/pages-list');
  } catch (error) {
    yield put(pageActions.sendPageUnsuccessful());
  }
}

export function* deletePage(action) {
  try {
    yield call(deleteData, 'page', action.slug);

    yield put(pageActions.deletePageSuccessful(action.slug));
    History.push('/pages-list');
  } catch (error) {
    yield put(pageActions.deletePageUnsuccessful());
  }
}

export function* watchSendPage() {
  yield takeEvery(pageActions.REQUEST_SEND_PAGE, sendPage);
}

export function* watchDeletePage() {
  yield takeEvery(pageActions.REQUEST_DELETE_PAGE, deletePage);
}

export function* watchGetPage() {
  yield takeEvery(pageActions.REQUEST_GET_PAGE, getDataSaga(
    pageActions.getPageSuccessful,
    pageActions.getPageUnsuccessful,
    'page',
  ));
}

export function* watchGetPagesList() {
  yield takeEvery(pageActions.REQUEST_GET_PAGES_LIST, getDataSaga(
    pageActions.getPagesListSuccessful,
    pageActions.getPagesListUnsuccessful,
    'pagesList',
  ));
}
