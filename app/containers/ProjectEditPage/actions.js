import {
  CHANGE_NAME,
  CHANGE_DESCRIPTION,
  GET_PROJECT,
  LOAD_PROJECT,
  SAVE_PROJECT,
  REQUEST_ERROR,
  SAVE_SUCCESS,
  CHANGE_USER,
  ADD_USER,
  SIGNUP_SUCCESS,
} from './constants';

 export function changeName(name) {
   return {
     type: CHANGE_NAME,
     name,
   };
 }

export function changeDescription(name) {
  return {
    type: CHANGE_DESCRIPTION,
    name,
  };
}

export function changeUser(name) {
  return {
    type: CHANGE_USER,
    name,
  };
}

export function signupSuccess(response) {
  return {
    type: SIGNUP_SUCCESS,
    response,
  };
}

export function getProject(id) {
  return {
    type: GET_PROJECT,
    id: id
  };
}

export function addUser(id) {
  return {
    type: ADD_USER,
    id: id
  };
}

export function loadProject(project) {
  return {
    type: LOAD_PROJECT,
    project: project
  };
}

export function saveProject(id) {
   return {
     type: SAVE_PROJECT,
     id: id,
   };
 }

 export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    error,
  };
}

export function saveSuccess(response) {
  return {
    type: SAVE_SUCCESS,
    response,
  };
}


