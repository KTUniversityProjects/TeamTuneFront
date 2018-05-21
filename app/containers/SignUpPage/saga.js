/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import {makeSelectPassword, makeSelectUsername, makeSelectPasswordConfirm, makeSelectEmail} from 'containers/SignUpPage/selectors';
import {SIGNUP, LOGIN_REDIRECT} from "./constants";
import {signupSuccess, requestError} from "./actions";
import {REQUEST_RESPONSES} from "../App/constants";
import { push } from 'react-router-redux';
import {HOST} from "../App/constants";

/**
 * Login request handler
 */

const URL = HOST + `1339`;

export function* signupRequest() {

  const requestURL = URL;
  const requestData = {
    username: yield select(makeSelectUsername()),
    password: yield select(makeSelectPassword()),
    password2: yield select(makeSelectPasswordConfirm()),
    email: yield select(makeSelectEmail())
  };

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request,  requestURL, "PUT", requestData);
    if (response.code == 0)
      yield put(signupSuccess(response));
    else
    {
       var error = REQUEST_RESPONSES[response.code];
       console.log(error);
       yield put(requestError(error));
    }
  }
 catch (err) {
    //yield put(requestError(err));
  }
}

export function* loginRedirectSaga(){
  yield put(push('/'));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* checkSignupState() {
  yield takeLatest(SIGNUP, signupRequest);
  yield takeLatest(LOGIN_REDIRECT, loginRedirectSaga);
}
