import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as apartmentFacilityGroupsActions from '../actions/apartmentFacilityGroupActions';

// SagasHelpers
import { getDataSaga } from './sagasHelpers';

// Reducers
import { getApartmentFacilityGroup } from '../reducers/apartmentFacilityGroupReducer';

// Services
import { deleteData, sendData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendApartmentFacilityGroup() {
  const apartmentFormData = yield select(getApartmentFacilityGroup);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'apartmentFacilityGroup', apartmentFormData);

    yield put(apartmentFacilityGroupsActions.sendApartmentFacilityGroupSuccessful());
    History.push('/apartment-facility-group-list');
  } catch (error) {
    yield put(apartmentFacilityGroupsActions.sendApartmentFacilityGroupUnsuccessful());
  }
}

export function* deleteApartmentFacilityGroup(action) {
  try {
    yield call(deleteData, 'apartmentFacilityGroup', action.slug);

    yield put(apartmentFacilityGroupsActions.deleteApartmentFacilityGroupSuccessful(action.slug));
    History.push('/apartment-facility-group-list');
  } catch (error) {
    yield put(apartmentFacilityGroupsActions.deleteApartmentFacilityGroupUnsuccessful());
  }
}

export function* watchSendApartmentFacilityGroup() {
  yield takeEvery(
    apartmentFacilityGroupsActions.REQUEST_SEND_APARTMENT_FACILITY_GROUP,
    sendApartmentFacilityGroup,
  );
}

export function* watchDeleteApartmentFacilityGroup() {
  yield takeEvery(
    apartmentFacilityGroupsActions.REQUEST_DELETE_APARTMENT_FACILITY_GROUP,
    deleteApartmentFacilityGroup,
  );
}

export function* watchGetApartmentFacilityGroup() {
  yield takeEvery(apartmentFacilityGroupsActions.REQUEST_GET_APARTMENT_FACILITY_GROUP, getDataSaga(
    apartmentFacilityGroupsActions.getApartmentFacilityGroupSuccessful,
    apartmentFacilityGroupsActions.getApartmentFacilityGroupUnsuccessful,
    'apartmentFacilityGroup',
  ));
}

export function* watchGetApartmentFacilityGroupList() {
  yield takeEvery(
    apartmentFacilityGroupsActions.REQUEST_GET_APARTMENT_FACILITY_GROUP_LIST,
    getDataSaga(
      apartmentFacilityGroupsActions.getApartmentFacilityGroupListSuccessful,
      apartmentFacilityGroupsActions.getApartmentFacilityGroupListUnsuccessful,
      'apartmentFacilityGroupList',
    ),
  );
}
