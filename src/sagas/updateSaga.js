import "regenerator-runtime/runtime";
import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* updateData(action) {
  const {_id, title, details} = action.payload;
  const apiResponse = axios.put('http://localhost:3000/notes/'+_id, {title, details});
}
function* updateSelectedNote(action) {
    yield put({ type: "UPDATE_NOTE_LOCAL_DETAIL", data: action.payload});
}

function* updateSelectedNoteTitle(action) {
    yield put({ type: "UPDATE_NOTE_LOCAL_TITLE", data: action.payload});
}

function* actionWatcher() {
     yield takeLatest('UPDATE_DATA', updateData)
     yield takeLatest('UPDATE_SELECTED_NOTE_DETAIL', updateSelectedNote)
     yield takeLatest('UPDATE_SELECTED_NOTE_TITLE', updateSelectedNoteTitle)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}