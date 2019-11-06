import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as apartmentServiceGroupsActions from '../actions/apartmentServiceGroupActions';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Reducers
import { getApartmentServiceGroup } from '../reducers/apartmentServiceGroupReducer';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartmentServiceGroup() {
  const apartmentFormData = yield select(getApartmentServiceGroup);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'apartmentServiceGroup', apartmentFormData);

    yield put(apartmentServiceGroupsActions.sendApartmentServiceGroupSuccessful());
    History.push('/apartment-service-group-list');
  } catch (error) {
    yield put(apartmentServiceGroupsActions.sendApartmentServiceGroupUnsuccessful());
  }
}

export function* deleteApartmentServiceGroup(action) {
  try {
    yield call(deleteData, 'apartmentServiceGroup', action.slug);

    yield put(apartmentServiceGroupsActions.deleteApartmentServiceGroupSuccessful(action.slug));
    History.push('/apartment-service-group-list');
  } catch (error) {
    yield put(apartmentServiceGroupsActions.deleteApartmentServiceGroupUnsuccessful());
  }
}

export function* watchSendApartmentServiceGroup() {
  yield takeEvery(
    apartmentServiceGroupsActions.REQUEST_SEND_APARTMENT_SERVICE_GROUP,
    sendApartmentServiceGroup,
  );
}

export function* watchDeleteApartmentServiceGroup() {
  yield takeEvery(
    apartmentServiceGroupsActions.REQUEST_DELETE_APARTMENT_SERVICE_GROUP,
    deleteApartmentServiceGroup,
  );
}

export function* watchGetApartmentServiceGroup() {
  yield takeEvery(apartmentServiceGroupsActions.REQUEST_GET_APARTMENT_SERVICE_GROUP, getDataSaga(
    apartmentServiceGroupsActions.getApartmentServiceGroupSuccessful,
    apartmentServiceGroupsActions.getApartmentServiceGroupUnsuccessful,
    'apartmentServiceGroup',
  ));
}

export function* watchGetApartmentServiceGroupList() {
  yield takeEvery(
    apartmentServiceGroupsActions.REQUEST_GET_APARTMENT_SERVICE_GROUP_LIST,
    getDataSaga(
      apartmentServiceGroupsActions.getApartmentServiceGroupListSuccessful,
      apartmentServiceGroupsActions.getApartmentServiceGroupListUnsuccessful,
      'apartmentServiceGroupList',
    ),
  );
}
