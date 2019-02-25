import "regenerator-runtime/runtime";
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchData() {
    const apiResponse = yield fetch('http://localhost:3000/notes/')
        .then(response => response.json()); 
  yield put({ type: "DATA_RECEIVED", data: apiResponse});
}
function* actionWatcher() {
     yield takeLatest('FETCH_DATA', fetchData)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}