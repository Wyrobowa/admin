import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import {
  REQUEST_SEND_LOCATION,
  REQUEST_GET_LOCATION,
  REQUEST_GET_LOCATIONS_LIST,
  sendLocationSuccessful,
  sendLocationUnsuccessful,
  setLocationData,
  getLocationSuccessful,
  getLocationUnsuccessful,
  getLocationsListSuccessful,
  getLocationsListUnsuccessful,
} from '../actions/locationActions';

import {
  showLoader,
  hideLoader,
} from '../actions/appStatusActions';

// Reducers
import { getLocation } from '../reducers/locationReducer';

// Services
import { sendData, getData, updateData } from '../services/requestService/requestService';

import History from '../history';

export function* sendLocation() {
  const locationFormData = yield select(getLocation);

  const isEdited = History.location.pathname.split('/')[2];
  const sendMethod = isEdited ? updateData : sendData;

  try {
    yield call(sendMethod, 'adminLocation', locationFormData);

    yield put(sendLocationSuccessful());
    History.push('/locations-list');
  } catch (error) {
    yield put(sendLocationUnsuccessful());
  }
}

export function* getLocationData(action) {
  try {
    yield put(showLoader());

    const locationData = yield call(getData, 'location', `?slug=${action.slug}`);
    yield put(setLocationData(locationData));
    yield put(getLocationSuccessful());

    yield put(hideLoader());
  } catch (error) {
    yield put(getLocationUnsuccessful(error));
    yield put(hideLoader());
  }
}

export function* getLocationsList() {
  try {
    yield put(showLoader());

    const locationsList = yield call(getData, 'locationsList');
    yield put(getLocationsListSuccessful(locationsList.data));

    yield put(hideLoader());
  } catch {
    yield put(getLocationsListUnsuccessful());
    yield put(hideLoader());
  }
}

export function* watchSendLocation() {
  yield takeEvery(REQUEST_SEND_LOCATION, sendLocation);
}

export function* watchGetLocation() {
  yield takeEvery(REQUEST_GET_LOCATION, getLocationData);
}

export function* watchGetLocationsList() {
  yield takeEvery(REQUEST_GET_LOCATIONS_LIST, getLocationsList);
}
