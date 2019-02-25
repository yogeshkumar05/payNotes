import "regenerator-runtime/runtime";
import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* createNote(action) {
  const {title, details} = action.payload;
  const apiResponse = axios.post('http://localhost:3000/notes', {title, details});
}

function* actionWatcher() {
     yield takeLatest('CREATE_NOTE', createNote)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}