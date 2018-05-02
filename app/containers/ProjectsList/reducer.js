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
  LOAD_PROJECTS_REQUEST,
  LOAD_PROJECTS,
  CHANGE_NAME,
  CHANGE_DESCRIPTION,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  projects: false,
  name: '',
  description: '',
});

function projectListReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_PROJECTS:
      return state
        .set('projects', action.projects);

    case LOAD_PROJECTS_REQUEST:
      return state
        .set('projects', []);

    case CHANGE_NAME:
      return state.set('name', action.name);

    case CHANGE_DESCRIPTION:
      return state.set('description', action.name);

    default:
      return state;
  }
}

export default projectListReducer;
