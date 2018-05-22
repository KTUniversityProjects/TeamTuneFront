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

export const DEFAULT_LOCALE = 'en';
export const SESSIONID = 'sessionID';
export const USERID = 'userID';
export const HOST = 'http://192.168.99.100:';
export const REQUEST_RESPONSES = {
	200 : "We're having some issues with the database right now. Please try again later.",
	201 : "There was an error with data read. Please inform moerators about this bug.",
	202 : "We're having some issues rigth now. Please try again later.",
	203 : "We're having some issues rigth now. Please try again later.",
	204 : "We're having some issues with the database right now. Please try again later.",
	220 : "Please fill all of the above fields",
	221 : "This name is already used",
	222 : "You don't have the rigth permissions to perform this action",
	240 : "There was an error. Pleasy try again.",
	250 : "This project doesn't exit",
	260 : "This username is already taken. Please choose another one.",
	261 : "Account with such e-mail adress already exists. Please choose another one.",
	262 : "Passwords must match",
	263 : "Wrong username or password. Try again.",
	264 : "The are some unallowed characters in your password. Please try a different one.",
	280 : "Wrong project ID, board doesn't exit"
};

export const TRANSLATIONS = {
  delete_are_u_sure: "Are u sure?"
};
