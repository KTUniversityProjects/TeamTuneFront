/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest} from 'redux-saga/effects';

import request from 'utils/request';
import {SESSIONID, USERID} from "../App/constants";
import {LOAD_PROJECTS} from "./constants";
import {DELETE_PROJECT_REQUEST} from "./constants";
import {loadProjects2} from "./actions";
import {deleteProject} from "./actions";

/**
 * Github repos request/response handler
 */
export function* getProjects() {
  const requestURL = `http://localhost:1338`;
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
      yield put(loadProjects2(response.data));
    }
  } catch (err) {
      yield put()
  }

  return null;
}

export function* deleteProjectSaga(action) {
  const requestURL = `http://localhost:1338`;
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
    console.log(response);
    if (response.code == 0) {
      yield put(deleteProject(pID));
    }
  } catch (err) {
  }

  return null;
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* projectListInit() {
  yield takeLatest(DELETE_PROJECT_REQUEST, deleteProjectSaga);
  yield takeLatest(LOAD_PROJECTS, getProjects);
  
}
