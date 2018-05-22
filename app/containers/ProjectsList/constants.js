/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_PROJECTS_REQUEST = 'boilerplate/ProjectList/LOAD_PROJECTS_REQUEST';
export const LOAD_PROJECTS = 'boilerplate/ProjectList/LOAD_PROJECTS';
export const DELETE_PROJECT_REQUEST = 'boilerplate/ProjectList/DELETE_PROJECT_REQUEST';
export const CHANGE_NAME = 'boilerplate/ProjectList/CHANGE_NAME';
export const CHANGE_DESCRIPTION = 'boilerplate/ProjectList/CHANGE_DESCRIPTION';
export const ADD_PROJECT_REQUEST = 'boilerplate/ProjectList/ADD_PROJECT_REQUEST';
export const LOGOUT_REQUEST = 'boilerplate/ProjectList/LOGOUT';
export const CREATE_SUCCESS = 'boilerplate/ProjectList/SIGNUP_SUCCESS';
export const REQUEST_ERROR = 'boilerplate/ProjectList/REQUEST_ERROR';
export const CLEAR_PROJECT_FORM = 'boilerplate/ProjectList/CLEAR_PROJECT_FORM';
