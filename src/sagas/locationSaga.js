import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import * as locationActions from '../actions/locationActions';

import {
  showLoader,
  hideLoader,
} from '../actions/appStatusActions';

// Reducers
import { getLocation } from '../reducers/locationReducer';

// Services
import {
  sendData,
  getData,
  updateData,
  deleteData,
} from '../services/requestService/requestService';

import History from '../history';

export function* sendLocation() {
  const locationFormData = yield select(getLocation);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'location', locationFormData);

    yield put(locationActions.sendLocationSuccessful());
    History.push('/locations-list');
  } catch (error) {
    yield put(locationActions.sendLocationUnsuccessful());
  }
}

export function* deleteLocation(action) {
  try {
    yield call(deleteData, 'location', action.slug);

    yield put(locationActions.deleteLocationSuccessful(action.slug));
    History.push('/locations-list');
  } catch (error) {
    yield put(locationActions.deleteLocationUnsuccessful());
  }
}

export function* getLocationData(action) {
  try {
    yield put(showLoader());

    const locationData = yield call(getData, 'location', `?slug=${action.slug}`);
    yield put(locationActions.setLocationData(locationData));
    yield put(locationActions.getLocationSuccessful());

    yield put(hideLoader());
  } catch (error) {
    yield put(locationActions.getLocationUnsuccessful(error));
    yield put(hideLoader());
  }
}

export function* getLocationsList() {
  try {
    yield put(showLoader());

    const locationsList = yield call(getData, 'locationsList');
    yield put(locationActions.getLocationsListSuccessful(locationsList.data));

    yield put(hideLoader());
  } catch {
    yield put(locationActions.getLocationsListUnsuccessful());
    yield put(hideLoader());
  }
}

export function* watchSendLocation() {
  yield takeEvery(locationActions.REQUEST_SEND_LOCATION, sendLocation);
}

export function* watchDeleteLocation() {
  yield takeEvery(locationActions.REQUEST_DELETE_LOCATION, deleteLocation);
}

export function* watchGetLocation() {
  yield takeEvery(locationActions.REQUEST_GET_LOCATION, getLocationData);
}

export function* watchGetLocationsList() {
  yield takeEvery(locationActions.REQUEST_GET_LOCATIONS_LIST, getLocationsList);
}
