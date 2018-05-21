/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import {makeSelectPassword, makeSelectUsername, makeSelectPasswordConfirm, makeSelectEmail} from 'containers/SignUpPage/selectors';
import {SIGNUP} from "./constants";
import {signupSuccess, requestError} from "./actions";

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
    yield put(signupSuccess(response));
  } catch (err) {
    yield put(requestError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* checkSignupState() {
  yield takeLatest(SIGNUP, signupRequest);
}
