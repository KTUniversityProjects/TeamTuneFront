import {
  PROJECT_EDIT_REDIRECT
} from './constants';

export function projectEditRedirect(itemID) {
  return {
    type: PROJECT_EDIT_REDIRECT,
    id: itemID
  };
}