/**
 * Gets the repositories of the user from Github
 */

import {call, put, takeLatest, select, take} from 'redux-saga/effects';

import request from 'utils/request';
import {SESSIONID, USERID, HOST} from "../App/constants";
import {LOAD_TASKS_REQUEST, DELETE_TASK_REQUEST, ADD_TASK_REQUEST} from "./constants";
import {loadTasks} from "./actions";

/**
 * Github repos request/response handler
 */

const URL = HOST + `1341`;

export function* getTasks(action) {
  const requestURL = URL;
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
  console.log('tasks_get');
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL, "POST", requestData);
    console.log(response);
    if (response.code == 0) {
      yield put(loadTasks(response.data));
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

export function* addTaskSaga(action) {
  const requestURL = URL;
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
    console.log("ADD TASK SAGA");
    const response = yield call(request, requestURL, "PUT", requestData);
    console.log(response);
    if (response.code == 0) {
      yield getTasks(action);
    }
  } catch (err) {
    console.log(err)
  }

  return null;
}

export function* deleteTaskSaga(action) {
  const requestURL = URL;
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
      getTasks(action);
    }
  } catch (err) {
    console.log(err)
  }
  return null;
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* taskListInit() {
  yield takeLatest(DELETE_TASK_REQUEST, deleteTaskSaga);
  yield takeLatest(ADD_TASK_REQUEST, addTaskSaga);
  yield takeLatest(LOAD_TASKS_REQUEST, getTasks);
}

project:{
  "id":"lalala",
  "users":[
    "alalala@asdasd.lt",
    "xxxx@xx.lt"
  ]
}
