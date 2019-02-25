import "regenerator-runtime/runtime";
import { put, takeLatest, all } from 'redux-saga/effects';
function* loginUser(action) {
  const {username, password} = action.payload;
  const apiResponse = yield fetch(`http://localhost:3000/login/?username=${username}&password=${password}`)
        .then(response => response.json());
  yield put({ type: "LOGIN_RESPONSE", data: apiResponse});
}
function* actionWatcher() {
     yield takeLatest('LOGIN_USER', loginUser)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}