import {
  put,
  takeEvery,
  call,
  select,
} from 'redux-saga/effects';

// Actions
import { REQUEST_SEND_APARTMENT, sendApartmentSuccessful, sendApartmentUnsuccessful } from '../../actions/admin/apartmentActions';

// Reducers
import { getApartment } from '../../reducers/admin/apartmentReducer';

// Services
import { sendData } from '../../services/requestService/requestService';

export function* sendApartment() {
  const apartmentFormData = yield select(getApartment);

  try {
    yield call(sendData, 'apartment', apartmentFormData);

    yield put(sendApartmentSuccessful());
  } catch (error) {
    yield put(sendApartmentUnsuccessful());
  }
}

export function* watchSendApartment() {
  yield takeEvery(REQUEST_SEND_APARTMENT, sendApartment);
}
