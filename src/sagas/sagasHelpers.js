import {
  put,
  call,
} from 'redux-saga/effects';

// Actions
import { hideLoader, showLoader } from '../actions/appStatusActions';

// Services
import { getData } from '../services/requestService/requestService';

const getDataSaga = (
  successfulAction, unsuccessfulAction, requestTarget, queryParamName,
) => function* getDataSagaGenerator(action) {
  const requestParams = action.slug ? `?${queryParamName ? `${queryParamName}` : 'slug'}=${action.slug}` : '';

  try {
    yield put(showLoader());

    const requestData = yield call(getData, requestTarget, requestParams);
    yield put(successfulAction(requestData.data));

    yield put(hideLoader());
  } catch {
    yield put(unsuccessfulAction());
    yield put(hideLoader());
  }
};

export { getDataSaga };
