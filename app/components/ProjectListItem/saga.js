import { takeLatest, put } from 'redux-saga/effects';
import {PROJECT_EDIT_REDIRECT} from "./constants";
import { push } from 'react-router-redux';

export function* projectRedirectSaga(action){
  let link = `/projectedit?id=${action.id}`;
  yield put(push(link));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* projectListItemInit() {
  yield takeLatest(PROJECT_EDIT_REDIRECT, projectRedirectSaga);
}
