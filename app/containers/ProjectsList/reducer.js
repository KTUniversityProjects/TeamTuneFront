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
  LOAD_PROJECTS,
  LOAD_PROJECTS2,
  DELETE_PROJECT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  projects: false,
});

function projectListReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_PROJECTS2:
      return state
        .set('projects', action.projects);

    case LOAD_PROJECTS:
      return state
        .set('projects', []);
    case DELETE_PROJECT:
      return state.set('projects', state.get('projects').filter(({ id }) => id !== action.projectID));
    default:
      return state;
  }
}

export default projectListReducer;
