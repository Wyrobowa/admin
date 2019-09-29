import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import {
  REQUEST_GET_APARTMENT_SERVICE,
  REQUEST_GET_APARTMENT_SERVICE_LIST,
  REQUEST_SEND_APARTMENT_SERVICE,
  sendApartmentServiceSuccessful,
  sendApartmentServiceUnsuccessful,
  getApartmentServiceSuccessful,
  getApartmentServiceUnsuccessful,
  getApartmentServiceListSuccessful,
  getApartmentServiceListUnsuccessful,
} from '../actions/apartmentServiceActions';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Reducers
import { getApartmentService } from '../reducers/apartmentServiceReducer';

// Services
import { sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartmentService() {
  const apartmentFormData = yield select(getApartmentService);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'adminApartmentService', apartmentFormData);

    yield put(sendApartmentServiceSuccessful());
    History.push('/apartment-service-list');
  } catch (error) {
    yield put(sendApartmentServiceUnsuccessful());
  }
}

export function* watchSendApartmentService() {
  yield takeEvery(REQUEST_SEND_APARTMENT_SERVICE, sendApartmentService);
}

export function* watchGetApartmentService() {
  yield takeEvery(REQUEST_GET_APARTMENT_SERVICE, getDataSaga(
    getApartmentServiceSuccessful,
    getApartmentServiceUnsuccessful,
    'adminApartmentService',
  ));
}

export function* watchGetApartmentServiceList() {
  yield takeEvery(REQUEST_GET_APARTMENT_SERVICE_LIST, getDataSaga(
    getApartmentServiceListSuccessful,
    getApartmentServiceListUnsuccessful,
    'adminApartmentServiceList',
  ));
}
