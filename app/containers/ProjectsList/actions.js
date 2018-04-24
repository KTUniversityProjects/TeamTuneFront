import {
    LOAD_PROJECTS_REQUEST,
    LOAD_PROJECTS,
    DELETE_PROJECT,
    DELETE_PROJECT_REQUEST,
    CHANGE_NAME,
    CHANGE_DESCRIPTION,
    ADD_PROJECT_REQUEST,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
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

export function deleteProject(id) {
  return {
    type: DELETE_PROJECT,
    projectID: id
  };
}

export function addProjectRequest() {
  return {
    type: ADD_PROJECT_REQUEST,
  };
}

export function addProject(projectObj) {
  return {
    type: ADD_PROJECT,
    project: projectObj
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
