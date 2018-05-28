/**
 * Gets the repositories of the user from Github
 */

import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from 'utils/request';
import {SESSIONID} from "../App/constants";

/**
          yield put(push('/'));
 * Root saga manages watcher lifecycle
 */
export default function* checkLoginState() {
  const sessionID = localStorage.getItem(SESSIONID);
  if(sessionID == null)
  {
       yield put(push('/'));
  }
}
