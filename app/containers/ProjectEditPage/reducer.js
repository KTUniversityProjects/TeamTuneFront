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
  CHANGE_NAME,
  CHANGE_DESCRIPTION,
  LOAD_PROJECT,
  CHANGE_USER
} from './constants';

// The initial state of the App
const initialState = fromJS({
  name: '',
  description: '',
  project: false,
  email:'',
});

function editPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECT:
      return state
        .set('project', action.project)
        .set('name', action.project.name)
        .set('description', action.project.description);

    case CHANGE_NAME:
      return state.set('name', action.name);

    case CHANGE_USER:
      return state.set('user', action.name);

    case CHANGE_DESCRIPTION:
      return state.set('description', action.name);

    default:
      return state;
  }
}

export default editPageReducer;
