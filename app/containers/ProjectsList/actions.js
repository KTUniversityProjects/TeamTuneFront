import {
    LOAD_PROJECTS_REQUEST,
    LOAD_PROJECTS,
    DELETE_PROJECT_REQUEST,
    CHANGE_NAME,
    CHANGE_DESCRIPTION,
    ADD_PROJECT_REQUEST,
    LOGOUT_REQUEST,
    CREATE_SUCCESS,
    REQUEST_ERROR,
    CLEAR_PROJECT_FORM
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    error,
  };
}

export function createSuccess(response) {
  return {
    type: CREATE_SUCCESS,
    response,
  };
}

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name
  };
}

export function changeDescription(name) {
  return {
    type: CHANGE_DESCRIPTION,
    name
  };
}

export function loadProjectsRequest() {
  return {
    type: LOAD_PROJECTS_REQUEST
  };
}
/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function deleteProjectRequest(id) {
  return {
    type: DELETE_PROJECT_REQUEST,
    projectID: id
  };
}

export function addProjectRequest() {
  return {
    type: ADD_PROJECT_REQUEST,
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
}
/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadProjects(projects) {
  return {
    type: LOAD_PROJECTS,
    projects
  };
}
