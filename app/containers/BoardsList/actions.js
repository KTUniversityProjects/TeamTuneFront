import {
    ADD_BOARD_REQUEST,
    LOAD_BOARDS,
    LOAD_BOARDS_REQUEST,
    DELETE_BOARD_REQUEST,
    CHANGE_NAME,
    CHANGE_DESCRIPTION,
    EDIT_BOARD_REQUEST
} from './constants';


export function addBoardRequest(id) {
  return {
    type: ADD_BOARD_REQUEST,
    projectID: id
  };
}

export function editBoardRequest(data, itemID) {
  return {
    type: EDIT_BOARD_REQUEST,
    data: data,
    id: itemID
  };
}

export function loadBoards(boards) {
  return {
    type: LOAD_BOARDS,
    boards
  };
}

export function loadBoardsRequest(id) {
  return {
    type: LOAD_BOARDS_REQUEST,
    projectID: id
  };
}

export function deleteBoardRequest(id, pID) {
  return {
    type: DELETE_BOARD_REQUEST,
    boardID: id,
    projectID: pID
  };
}

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name
  };
}

export function changeDescription(name) {
  return {
    type: CHANGE_DESCRIPTION,
    name
  };
}