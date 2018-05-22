/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest, select} from 'redux-saga/effects';

import request from 'utils/request';
import {SESSIONID, USERID, HOST} from "../App/constants";
import {EDIT_TASK_REQUEST, EDIT_BOARD_REQUEST, LOAD_BOARDS_REQUEST, DELETE_BOARD_REQUEST, ADD_BOARD_REQUEST} from "./constants";
import {makeSelectName, makeSelectDescription} from "./selectors";
import {loadBoards} from "./actions";
import {loadTasks} from "../TasksList/actions";
import {ADD_TASK_REQUEST, DELETE_TASK_REQUEST, LOAD_TASKS_REQUEST} from "../TasksList/constants";

/**
 * Github repos request/response handler
 */

 const URL = HOST + `1337`;
 const URL2 = HOST + `1341`;

export function* getBoards(action) {
  console.log("GetboARDS");
  console.log(action);
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
    const response = yield call(request, requestURL, "POST", requestData);
    if (response.code == 0) {
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

export function* addTaskSaga(action) {
  const requestURL = URL2;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const boardID = action.boardID;
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
    const response = yield call(request, requestURL, "PUT", requestData);
    if (response.code == 0) {
      yield getBoards(action);
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

export function* deleteTaskSaga(action) {
  const requestURL = URL2;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const taskID= action.taskID;
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    task:{
      id: taskID
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

export function* editBoardSaga(action){
  const requestURL = URL;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const boardID = action.id;
  const boardName = action.data.message;
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    board:{
      id: boardID,
      name: boardName
  }
  };
  try {
    const response = yield call(request, requestURL, "PATCH", requestData);
    if (response.code == 0) {
      yield getBoards(action);
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

export function* editTaskSaga(action){
  const requestURL = URL2;
  const sessionID = sessionStorage.getItem(SESSIONID);
  const userID = sessionStorage.getItem(USERID);
  const taskID = action.id;
  const taskName = action.data.message;
  const requestData = {
    session: {
      id: sessionID,
      user: userID
    },
    task:{
      id: taskID,
      name: taskName
  }
  };
  try {
    const response = yield call(request, requestURL, "PATCH", requestData);
    if (response.code == 0) {
      console.log(response);
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
  yield takeLatest(DELETE_TASK_REQUEST, deleteTaskSaga);
  yield takeLatest(ADD_TASK_REQUEST, addTaskSaga);
  yield takeLatest(EDIT_BOARD_REQUEST, editBoardSaga);
  yield takeLatest(EDIT_TASK_REQUEST, editTaskSaga);
}
