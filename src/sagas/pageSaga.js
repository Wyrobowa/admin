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
  setPageData,
  getPageSuccessful,
  getPageUnsuccessful,
  getPagesListSuccessful,
  getPagesListUnsuccessful,
} from '../actions/pageActions';

import {
  showLoader,
  hideLoader,
} from '../actions/appStatusActions';

// Reducers
import { getPage } from '../reducers/pageReducer';

// Services
import { sendData, getData, updateData } from '../services/requestService/requestService';

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

export function* getPageData(action) {
  try {
    yield put(showLoader());

    const pageData = yield call(getData, 'page', `?slug=${action.slug}`);
    yield put(setPageData(pageData));
    yield put(getPageSuccessful());

    yield put(hideLoader());
  } catch (error) {
    yield put(getPageUnsuccessful(error));
    yield put(hideLoader());
  }
}

export function* getPagesList() {
  try {
    yield put(showLoader());

    const pagesList = yield call(getData, 'pagesList');
    yield put(getPagesListSuccessful(pagesList.data));

    yield put(hideLoader());
  } catch {
    yield put(getPagesListUnsuccessful());
    yield put(hideLoader());
  }
}

export function* watchSendPage() {
  yield takeEvery(REQUEST_SEND_PAGE, sendPage);
}

export function* watchGetPage() {
  yield takeEvery(REQUEST_GET_PAGE, getPageData);
}

export function* watchGetPagesList() {
  yield takeEvery(REQUEST_GET_PAGES_LIST, getPagesList);
}
