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
  sendApartmentSuccessful,
  sendApartmentUnsuccessful,
  setApartmentData,
  getApartmentSuccessful,
  getApartmentUnsuccessful,
} from '../actions/apartmentActions';

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
    const apartmentData = yield call(getData, 'apartment', `?slug=${action.slug}`);

    yield put(setApartmentData(apartmentData));
    yield put(getApartmentSuccessful());
  } catch (error) {
    yield put(getApartmentUnsuccessful(error));
  }
}

export function* watchSendApartment() {
  yield takeEvery(REQUEST_SEND_APARTMENT, sendApartment);
}

export function* watchGetApartment() {
  yield takeEvery(REQUEST_GET_APARTMENT, getApartmentData);
}
