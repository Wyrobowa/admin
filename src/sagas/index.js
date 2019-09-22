import { all } from 'redux-saga/effects';

import { watchAppInitialization } from './appInitializationSaga';
import { watchLogin } from './authSaga';
import { watchSendApartment, watchGetApartment, watchGetApartmentsList } from './apartmentSaga';
import { watchGetPage, watchGetPagesList, watchSendPage } from './pageSaga';

export default function* rootSaga() {
  yield all([
    watchGetApartmentsList(),
    watchAppInitialization(),
    watchGetApartment(),
    watchLogin(),
    watchSendApartment(),
    watchGetPage(),
    watchGetPagesList(),
    watchSendPage(),
  ]);
}
