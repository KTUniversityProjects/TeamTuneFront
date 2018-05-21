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
    LOAD_TASKS,
    LOAD_TASKS_REQUEST
} from './constants';

// The initial state of the App
const initialState = fromJS({
  tasks: false,
});

function tasksListReducer(state = initialState, action) {
  switch (action.type) {

  	case LOAD_TASKS:
      return state
        .set('tasks', action.tasks);

    case LOAD_TASKS_REQUEST:
      return state
        .set('tasks', []);

    default:
      return state;
  }
}

export default tasksListReducer;
