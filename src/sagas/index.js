import { all } from 'redux-saga/effects';

import { watchAppInitialization } from './appInitializationSaga';
import { watchLogin } from './authSaga';
import { watchSendApartment, watchGetApartment } from './apartmentSaga';

export default function* rootSaga() {
  yield all([
    watchAppInitialization(),
    watchGetApartment(),
    watchLogin(),
    watchSendApartment(),
  ]);
}
