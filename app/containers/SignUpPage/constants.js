/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/SignupPage/CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'boilerplate/SignupPage/CHANGE_PASSWORD';
export const CHANGE_PASSWORD_CONFIRM = 'boilerplate/SignupPage/CHANGE_PASSWORD_CONFIRM';
export const CHANGE_EMAIL = 'boilerplate/SignupPage/CHANGE_EMAIL';
export const SIGNUP = 'boilerplate/SignupPage/SIGNUP';
export const SIGNUP_SUCCESS = 'boilerplate/SignupPage/SIGNUP_SUCCESS';
export const REQUEST_ERROR = 'boilerplate/SignupPage/REQUEST_ERROR';
export const LOGIN_REDIRECT = 'boilerplate/SignupPage/LOGIN_REDIRECT';
