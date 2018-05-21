/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest, select} from 'redux-saga/effects';

import request from 'utils/request';
import {SESSIONID, USERID, HOST} from "../App/constants";
import {LOAD_BOARDS_REQUEST, DELETE_BOARD_REQUEST, ADD_BOARD_REQUEST} from "./constants";
import {makeSelectName, makeSelectDescription} from "./selectors";
import {loadBoards} from "./actions";

/**
 * Github repos request/response handler
 */

 const URL = HOST + `1337`;

export function* getBoards(action) {
  const requestURL = URL;
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
      console.log(request);
    const response = yield call(request, requestURL, "POST", requestData);
    if (response.code == 0) {
      console.log("BOARDS");
      console.log(response);
      yield put(loadBoards(response.data));
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

export function* addBoardSaga(action) {
  const requestURL = URL;
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
    console.log(err)
  }

  return null;
}

export function* deleteBoardSaga(action) {
  const requestURL = URL;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const boardID= action.boardID;
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    board:{
      id: boardID
  }
  };
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "DELETE", requestData);
    if (response.code == 0) {
      yield getBoards(action);
    }
  } catch (err) {
    console.log(err)
  }
  return null;
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* projectListInit() {
  yield takeLatest(LOAD_BOARDS_REQUEST, getBoards);
  yield takeLatest(ADD_BOARD_REQUEST, addBoardSaga);
  yield takeLatest(DELETE_BOARD_REQUEST, deleteBoardSaga);
}
