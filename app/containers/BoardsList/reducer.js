/*
 * AppReducer
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
  LOAD_BOARDS,
  LOAD_BOARDS_REQUEST,
  CHANGE_NAME,
  CHANGE_DESCRIPTION,
} from './constants';
import {
  LOADS_TASKS
} from '../TasksList/constants';

// The initial state of the App
const initialState = fromJS({
  boards: false,
  name: '',
  description: '',
});

function boardsListReducer(state = initialState, action) {
  switch (action.type) {

  	case LOAD_BOARDS:
      return state
        .set('boards', action.boards);

    case LOAD_BOARDS_REQUEST:
      return state.set('boards', []);

    case CHANGE_NAME:
      return state.set('name', action.name);

    case CHANGE_DESCRIPTION:
      return state.set('description', action.name);

    default:
      return state;
  }
}

export default boardsListReducer;
