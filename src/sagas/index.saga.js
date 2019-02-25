import {fork} from 'redux-saga/effects';
import rootSaga from './fetchSaga';
import loginSaga from './loginSaga';
import updateSaga from './updateSaga';
import createSaga from './createSaga';

export default function* () {
    yield fork(rootSaga);
    yield fork(loginSaga);
    yield fork(updateSaga);
    yield fork(createSaga);
  }