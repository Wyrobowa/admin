import {
  put,
  takeEvery,
  call,
} from 'redux-saga/effects';

// Services
import { sendData } from '../services/requestService/requestService';

// Actions
import { loginSuccessful, REQUEST_LOGIN, loginUnsuccessful } from '../actions/appStatusActions';

export function* login(action) {
  try {
    const { token } = yield call(sendData, 'login', action.credentials);
    localStorage.setItem('bearerToken', token);

    yield put(loginSuccessful());
  } catch (error) {
    yield put(loginUnsuccessful());
  }
}

export function* watchLogin() {
  yield takeEvery(REQUEST_LOGIN, login);
}
