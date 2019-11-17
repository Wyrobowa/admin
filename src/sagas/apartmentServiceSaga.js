import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as apartmentServicesActions from '../actions/apartmentServiceActions';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Reducers
import { getApartmentService } from '../reducers/apartmentServiceReducer';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartmentService() {
  const apartmentFormData = yield select(getApartmentService);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'adminApartmentService', apartmentFormData);

    yield put(apartmentServicesActions.sendApartmentServiceSuccessful());
    History.push('/apartment-service-list');
  } catch (error) {
    yield put(apartmentServicesActions.sendApartmentServiceUnsuccessful());
  }
}

export function* deleteApartmentService(action) {
  try {
    yield call(deleteData, 'adminApartmentService', action.slug);

    yield put(apartmentServicesActions.deleteApartmentServiceSuccessful(action.slug));
    History.push('/apartment-service-list');
  } catch (error) {
    yield put(apartmentServicesActions.deleteApartmentServiceUnsuccessful());
  }
}

export function* watchSendApartmentService() {
  yield takeEvery(apartmentServicesActions.REQUEST_SEND_APARTMENT_SERVICE, sendApartmentService);
}

export function* watchDeleteApartmentService() {
  yield takeEvery(
    apartmentServicesActions.REQUEST_DELETE_APARTMENT_SERVICE,
    deleteApartmentService,
  );
}

export function* watchGetApartmentService() {
  yield takeEvery(apartmentServicesActions.REQUEST_GET_APARTMENT_SERVICE, getDataSaga(
    apartmentServicesActions.getApartmentServiceSuccessful,
    apartmentServicesActions.getApartmentServiceUnsuccessful,
    'adminApartmentService',
  ));
}

export function* watchGetApartmentServiceList() {
  yield takeEvery(apartmentServicesActions.REQUEST_GET_APARTMENT_SERVICE_LIST, getDataSaga(
    apartmentServicesActions.getApartmentServiceListSuccessful,
    apartmentServicesActions.getApartmentServiceListUnsuccessful,
    'adminApartmentServiceList',
  ));
}
