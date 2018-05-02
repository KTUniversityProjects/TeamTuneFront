/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest, select} from 'redux-saga/effects';

import request from 'utils/request';
import {SESSIONID, USERID} from "../App/constants";
import {LOAD_BOARDS_REQUEST, DELETE_BOARD_REQUEST, ADD_BOARD_REQUEST} from "./constants";
import {makeSelectName, makeSelectDescription} from "./selectors";
import {loadBoards} from "./actions";

/**
 * Github repos request/response handler
 */
export function* getBoards(action) {
  const requestURL = `http://localhost:1337`;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const projectID = action.projectID;
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    project:{
      id: projectID
    }
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "POST", requestData);
    console.log(requestData);
    if (response.code == 0) {
      console.log("BOARDAI:" + response.data);

      yield put(loadBoards(response.data));
    }
  } catch (err) {
      yield put()
  }

  return null;
}

export function* deleteProjectSaga(action) {
  /*const requestURL = `http://localhost:1338`;
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
  }*/
  return null;
}

export function* addBoardSaga(action) {
  const requestURL = `http://localhost:1337`;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const projectID = action.projectID;
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    board:{
      name: yield select(makeSelectName()),
      description: yield select(makeSelectDescription()),
      project: projectID
  }
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "PUT", requestData);
    if (response.code == 0) {
      yield getBoards(action);
    }
  } catch (err) {

  }

  return null;
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* projectListInit() {
 //yield takeLatest(DELETE_PROJECT_REQUEST, deleteProjectSaga);
  yield takeLatest(LOAD_BOARDS_REQUEST, getBoards);
  yield takeLatest(ADD_BOARD_REQUEST, addBoardSaga);
}
