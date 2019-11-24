import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as apartmentFacilitiesActions from '../actions/apartmentFacilityActions';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Reducers
import { getApartmentFacility } from '../reducers/apartmentFacilityReducer';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartmentFacility() {
  const apartmentFormData = yield select(getApartmentFacility);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'apartmentFacility', apartmentFormData);

    yield put(apartmentFacilitiesActions.sendApartmentFacilitySuccessful());
    History.push('/apartment-facility-list');
  } catch (error) {
    yield put(apartmentFacilitiesActions.sendApartmentFacilityUnsuccessful());
  }
}

export function* deleteApartmentFacility(action) {
  try {
    yield call(deleteData, 'apartmentFacility', action.slug);

    yield put(apartmentFacilitiesActions.deleteApartmentFacilitySuccessful(action.slug));
    History.push('/apartment-facility-list');
  } catch (error) {
    yield put(apartmentFacilitiesActions.deleteApartmentFacilityUnsuccessful());
  }
}

export function* watchSendApartmentFacility() {
  yield takeEvery(
    apartmentFacilitiesActions.REQUEST_SEND_APARTMENT_FACILITY,
    sendApartmentFacility,
  );
}

export function* watchDeleteApartmentFacility() {
  yield takeEvery(
    apartmentFacilitiesActions.REQUEST_DELETE_APARTMENT_FACILITY,
    deleteApartmentFacility,
  );
}

export function* watchGetApartmentFacility() {
  yield takeEvery(apartmentFacilitiesActions.REQUEST_GET_APARTMENT_FACILITY, getDataSaga(
    apartmentFacilitiesActions.getApartmentFacilitySuccessful,
    apartmentFacilitiesActions.getApartmentFacilityUnsuccessful,
    'apartmentFacility',
  ));
}

export function* watchGetApartmentFacilityList() {
  yield takeEvery(apartmentFacilitiesActions.REQUEST_GET_APARTMENT_FACILITY_LIST, getDataSaga(
    apartmentFacilitiesActions.getApartmentFacilityListSuccessful,
    apartmentFacilitiesActions.getApartmentFacilityListUnsuccessful,
    'apartmentFacilityList',
  ));
}
