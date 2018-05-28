import {
  CHANGE_NAME,
  CHANGE_DESCRIPTION,
  GET_PROJECT,
  LOAD_PROJECT,
  SAVE_PROJECT
} from './constants';

 export function changeName(name) {
   return {
     type: CHANGE_NAME,
     name,
   };
 }

export function changeDescription(name) {
  return {
    type: CHANGE_DESCRIPTION,
    name,
  };
}

export function getProject(id) {
  return {
    type: GET_PROJECT,
    id: id
  };
}

export function loadProject(project) {
  return {
    type: LOAD_PROJECT,
    project: project
  };
}

export function saveProject(id) {
   return {
     type: SAVE_PROJECT,
     id: id,
   };
 }

