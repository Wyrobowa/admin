import fromGenerator from 'redux-saga-test';
import assert from 'assert'; // eslint-disable-line

import fetchRequiredPolyfills from '../../services/polyfillService';
import { appInitialization } from '../appInitializationSaga';
import { initSuccess, initFail } from '../../actions/appInitializationActions';

test('AppInitialization - App initialization requester saga - successful', () => {
  const generator = appInitialization();
  const expect = fromGenerator(assert, generator);

  expect.next({}).call(fetchRequiredPolyfills);

  expect.next().put(initSuccess());
});

test('AppInitialization - App initialization requester saga - failed', () => {
  const generator = appInitialization();
  const expect = fromGenerator(assert, generator);

  expect.next({}).call(
    fetchRequiredPolyfills,
  );
  expect.throwNext().put(initFail());
});
