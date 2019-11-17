import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as apartmentActions from '../actions/apartmentActions';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Reducers
import { getApartment } from '../reducers/apartmentReducer';

// Services
import { sendData, updateData, deleteData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartment() {
  const apartmentFormData = yield select(getApartment);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'apartment', apartmentFormData);

    yield put(apartmentActions.sendApartmentSuccessful());
    History.push('/apartments-list');
  } catch (error) {
    yield put(apartmentActions.sendApartmentUnsuccessful());
  }
}

export function* deleteApartment(action) {
  try {
    yield call(deleteData, 'apartment', action.slug);

    yield put(apartmentActions.deleteApartmentSuccessful(action.slug));
    History.push('/apartments-list');
  } catch (error) {
    yield put(apartmentActions.deleteApartmentUnsuccessful());
  }
}

export function* watchSendApartment() {
  yield takeEvery(apartmentActions.REQUEST_SEND_APARTMENT, sendApartment);
}

export function* watchDeleteApartment() {
  yield takeEvery(apartmentActions.REQUEST_DELETE_APARTMENT, deleteApartment);
}

export function* watchGetApartment() {
  yield takeEvery(apartmentActions.REQUEST_GET_APARTMENT, getDataSaga(
    apartmentActions.getApartmentSuccessful,
    apartmentActions.getApartmentUnsuccessful,
    'apartment',
  ));
}

export function* watchGetApartmentsList() {
  yield takeEvery(apartmentActions.REQUEST_GET_APARTMENTS_LIST, getDataSaga(
    apartmentActions.getApartmentsListSuccessful,
    apartmentActions.getApartmentsListUnsuccessful,
    'apartmentsList',
  ));
}
