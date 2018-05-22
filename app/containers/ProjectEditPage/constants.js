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

export const CHANGE_NAME = 'boilerplate/ProjectEditPage/CHANGE_NAME';
export const CHANGE_DESCRIPTION = 'boilerplate/ProjectEditPage/CHANGE_DESCRIPTION';
export const GET_PROJECT = 'boilerplate/ProjectEditPage/GET_PROJECT';
export const LOAD_PROJECT = 'boilerplate/ProjectEditPage/LOAD_PROJECT';
