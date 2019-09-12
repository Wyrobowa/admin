import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import {
  REQUEST_SEND_APARTMENT,
  REQUEST_GET_APARTMENT,
  REQUEST_GET_APARTMENTS_LIST,
  sendApartmentSuccessful,
  sendApartmentUnsuccessful,
  setApartmentData,
  getApartmentSuccessful,
  getApartmentUnsuccessful,
  getApartmentsListSuccessful,
  getApartmentsListUnsuccessful,
} from '../actions/apartmentActions';

import {
  showLoader,
  hideLoader,
} from '../actions/appStatusActions';

// Reducers
import { getApartment } from '../reducers/apartmentReducer';

// Services
import { sendData, getData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartment() {
  const apartmentFormData = yield select(getApartment);

  const isEdited = History.location.pathname.split('/')[2] !== '';
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'adminApartment', apartmentFormData);

    yield put(sendApartmentSuccessful());
    History.push('/apartments-list');
  } catch (error) {
    yield put(sendApartmentUnsuccessful());
  }
}

export function* getApartmentData(action) {
  try {
    yield put(showLoader());

    const apartmentData = yield call(getData, 'apartment', `?slug=${action.slug}`);
    yield put(setApartmentData(apartmentData));
    yield put(getApartmentSuccessful());

    yield put(hideLoader());
  } catch (error) {
    yield put(getApartmentUnsuccessful(error));
    yield put(hideLoader());
  }
}

export function* getApartmentsList() {
  try {
    yield put(showLoader());

    const apartmentList = yield call(getData, 'apartmentsList');
    yield put(getApartmentsListSuccessful(apartmentList.data));

    yield put(hideLoader());
  } catch {
    yield put(getApartmentsListUnsuccessful());
    yield put(hideLoader());
  }
}

export function* watchSendApartment() {
  yield takeEvery(REQUEST_SEND_APARTMENT, sendApartment);
}

export function* watchGetApartment() {
  yield takeEvery(REQUEST_GET_APARTMENT, getApartmentData);
}

export function* watchGetApartmentsList() {
  yield takeEvery(REQUEST_GET_APARTMENTS_LIST, getApartmentsList);
}
