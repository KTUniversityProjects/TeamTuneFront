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
export const ADD_BOARD_REQUEST = 'boilerplate/App/ADD_BOARDS_REQUEST';
export const LOAD_BOARDS = 'boilerplate/App/LOAD_BOARDS';
export const LOAD_BOARDS_REQUEST = 'boilerplate/App/LOAD_BOARDS_REQUEST';
export const CHANGE_NAME = 'boilerplate/App/CHANGE_NAME';
export const DELETE_BOARD_REQUEST = 'boilerplate/App/DELETE_BOARD_REQUEST';
export const CHANGE_DESCRIPTION = 'boilerplate/App/CHANGE_DESCRIPTION';
export const ADD_PROJECT_REQUEST = 'boilerplate/App/ADD_PROJECT_REQUEST';