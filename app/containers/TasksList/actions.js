import {
    DELETE_TASK_REQUEST,
    LOAD_TASKS,
    LOAD_TASKS_REQUEST,
    ADD_TASK_REQUEST
} from './constants';


export function deleteTaskRequest(id, pID) {
  return {
    type: DELETE_TASK_REQUEST,
    taskID: id,
    projectID: pID
  };
}

export function loadTasks(tasks, boardID) {
  return {
    type: LOAD_TASKS,
    tasks,
    boardID
  };
}

export function loadTasksRequest(id) {
  return {
    type: LOAD_TASKS_REQUEST,
    boardID: id
  };
}

export function addTaskRequest(id, pID) {
  return {
    type: ADD_TASK_REQUEST,
    boardID: id,
    projectID: pID
  };
}
