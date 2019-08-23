import { all } from 'redux-saga/effects';

import { watchAppInitialization } from './appInitializationSaga';
import { watchLogin } from './authSaga';
import { watchSendApartment } from './admin/apartmentSaga';

export default function* rootSaga() {
  yield all([
    watchAppInitialization(),
    watchLogin(),
    watchSendApartment(),
  ]);
}
