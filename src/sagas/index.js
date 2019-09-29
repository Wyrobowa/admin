import { all } from 'redux-saga/effects';

import { watchAppInitialization } from './appInitializationSaga';
import { watchLogin } from './authSaga';
import { watchSendApartment, watchGetApartment, watchGetApartmentsList } from './apartmentSaga';
import { watchSendLocation, watchGetLocation, watchGetLocationsList } from './locationSaga';
import { watchGetPage, watchGetPagesList, watchSendPage } from './pageSaga';

export default function* rootSaga() {
  yield all([
    watchGetApartmentsList(),
    watchAppInitialization(),
    watchGetApartment(),
    watchLogin(),
    watchSendApartment(),
    watchSendLocation(),
    watchGetLocation(),
    watchGetLocationsList(),
    watchGetPage(),
    watchGetPagesList(),
    watchSendPage(),
  ]);
}
