/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest, select} from 'redux-saga/effects';

import request from 'utils/request';
import {SESSIONID, USERID} from "../App/constants";
import {DELETE_PROJECT_REQUEST, ADD_PROJECT_REQUEST, LOAD_PROJECTS_REQUEST} from "./constants";
import {loadProjects, deleteProject, addProject} from "./actions";
import {makeSelectName, makeSelectDescription} from "./selectors";

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
      yield put(loadProjects(response.data));
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

export function* addProjectSaga(action) {
  const requestURL = `http://localhost:1338`;
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
      yield put(getProjects());
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
  yield takeLatest(LOAD_PROJECTS_REQUEST, getProjects);
  yield takeLatest(ADD_PROJECT_REQUEST, addProjectSaga);
  
}
