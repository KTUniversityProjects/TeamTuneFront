/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_PASSWORD,
  CHANGE_USERNAME,
  REQUEST_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    //Any request error
    case REQUEST_ERROR:
    console.log("ERROR REQUESTED");
      return state
        .set('error', action.error)
        .set('loading', false);

    case CHANGE_USERNAME:
      return state.set('username', action.name);

    case CHANGE_PASSWORD:
      return state.set('password', action.name);

    default:
      return state;
  }
}

export default loginReducer;
