import {
    DELETE_TASK_REQUEST,
    LOAD_TASKS,
    LOAD_TASKS_REQUEST,
    ADD_TASK_REQUEST
} from './constants';


export function deleteTaskRequest(id) {
  return {
    type: DELETE_TASK_REQUEST,
    taskID: id
  };
}

export function loadTasks(tasks) {
  return {
    type: LOAD_TASKS,
    tasks
  };
}

export function loadTasksRequest(id) {
  return {
    type: LOAD_TASKS_REQUEST,
    boardID: id
  };
}

export function addTaskRequest(id) {
  return {
    type: ADD_TASK_REQUEST,
    boardID: id
  };
}