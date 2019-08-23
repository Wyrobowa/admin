import {
  put,
  takeEvery,
  call,
} from 'redux-saga/effects';

// Services
import fetchRequiredPolyfills from '../services/polyfillService';

// Actions
import { initSuccess, initFail, APP_INITIALIZATION_REQUESTED } from '../actions/appInitializationActions';

export function* appInitialization() {
  try {
    yield call(fetchRequiredPolyfills);

    yield put(initSuccess());
  } catch (error) {
    yield put(initFail());
  }
}

export function* watchAppInitialization() {
  yield takeEvery(APP_INITIALIZATION_REQUESTED, appInitialization);
}
