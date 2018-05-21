import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  REQUEST_ERROR,
  LOGIN_SUCCESS,
  SIGN_UP_REDIRECT
} from './constants';
import {LOGIN} from "./constants";


/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOGIN
 */
export function login() {
  return {
    type: LOGIN,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
 export function changePassword(name) {
   return {
     type: CHANGE_PASSWORD,
     name,
   };
 }

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function signUpRedirect() {
  return {
    type: SIGN_UP_REDIRECT,
  };
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  };
}

export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    error,
  };
}
