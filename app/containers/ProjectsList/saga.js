/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest, select} from 'redux-saga/effects';

import request from 'utils/request';
import {SESSIONID, USERID, HOST, TRANSLATIONS,REQUEST_RESPONSES} from "../App/constants";
import {LOGOUT_REQUEST, DELETE_PROJECT_REQUEST, ADD_PROJECT_REQUEST, LOAD_PROJECTS_REQUEST} from "./constants";
import {loadProjects, createSuccess, requestError} from "./actions";
import {makeSelectName, makeSelectDescription} from "./selectors";
import { push } from 'react-router-redux';

const URL = HOST + `1338`;

export function* getProjects() {
  const requestURL = URL;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    }
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "POST", requestData);
    if (response.code == 0) {

      yield put(loadProjects(response.data));
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

export function* deleteProjectSaga(action) {
  if(!confirm(TRANSLATIONS.delete_are_u_sure))
  {
    return;
  }
  const requestURL = URL;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const pID = action.projectID;
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    project:{
    id: pID
  }
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "DELETE", requestData);
    if (response.code == 0) {
      yield getProjects();
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

export function* addProjectSaga(action) {
  const requestURL = URL;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    project:{
      name: yield select(makeSelectName()),
      description: yield select(makeSelectDescription())
  }
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "PUT", requestData);
    if (response.code == 0) {
      yield put(createSuccess());
      yield getProjects();
    }
    else
    {
       var error = REQUEST_RESPONSES[response.code];
       yield put(requestError(error));
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

export function* logoutSaga() {
   sessionStorage.removeItem(SESSIONID);
   sessionStorage.removeItem(USERID);
   yield put(push('/'));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* projectListInit() {
  yield takeLatest(DELETE_PROJECT_REQUEST, deleteProjectSaga);
  yield takeLatest(LOAD_PROJECTS_REQUEST, getProjects);
  yield takeLatest(ADD_PROJECT_REQUEST, addProjectSaga);
  yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}
