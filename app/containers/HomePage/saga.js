/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import {makeSelectPassword, makeSelectUsername} from './selectors';
import {LOGIN, SIGN_UP_REDIRECT} from "./constants";
import {SESSIONID,USERID, HOST } from "../App/constants";
import { requestError, loginSuccess} from "./actions";
import { push } from 'react-router-redux';
import {REQUEST_RESPONSES} from "../App/constants";

/**
 * Login request handler
 */
export function* loginRequest() {

  // Select username and password from store
  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());
  const requestURL = HOST+`1339`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "POST", {username: username, password: password});

    if(response.code == 0)
    {
      sessionStorage.setItem(SESSIONID, response.data.id);
      sessionStorage.setItem(USERID, response.data.user);
      yield put(loginSuccess(response));
      yield put(push('/main'));
    }
    else
    {
       var error = REQUEST_RESPONSES[response.code];
       yield put(requestError(error));
    }
  } catch (err) {

  }
}

export function* signUpRedirectSaga(){
  yield put(push('/signup'));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* checkLoginState() {

  const sessionID = sessionStorage.getItem(SESSIONID);
  if(sessionID != null)
  {
      yield put(push('/main'));
  }
  yield takeLatest(LOGIN, loginRequest);
  yield takeLatest(SIGN_UP_REDIRECT, signUpRedirectSaga);
}
