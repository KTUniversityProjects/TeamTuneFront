import {
    LOAD_PROJECTS,
    LOAD_PROJECTS2,
    DELETE_PROJECT,
    DELETE_PROJECT_REQUEST,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadProjects() {
  return {
    type: LOAD_PROJECTS
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
/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadProjects2(projects) {
  return {
    type: LOAD_PROJECTS2,
    projects
  };
}
