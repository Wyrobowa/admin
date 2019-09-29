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
  getApartmentSuccessful,
  getApartmentUnsuccessful,
  getApartmentsListSuccessful,
  getApartmentsListUnsuccessful,
} from '../actions/apartmentActions';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Reducers
import { getApartment } from '../reducers/apartmentReducer';

// Services
import { sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartment() {
  const apartmentFormData = yield select(getApartment);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'adminApartment', apartmentFormData);

    yield put(sendApartmentSuccessful());
    History.push('/apartments-list');
  } catch (error) {
    yield put(sendApartmentUnsuccessful());
  }
}

export function* watchSendApartment() {
  yield takeEvery(REQUEST_SEND_APARTMENT, sendApartment);
}

export function* watchGetApartment() {
  yield takeEvery(REQUEST_GET_APARTMENT, getDataSaga(
    getApartmentSuccessful,
    getApartmentUnsuccessful,
    'apartment',
  ));
}

export function* watchGetApartmentsList() {
  yield takeEvery(REQUEST_GET_APARTMENTS_LIST, getDataSaga(
    getApartmentsListSuccessful,
    getApartmentsListUnsuccessful,
    'apartmentsList',
  ));
}
