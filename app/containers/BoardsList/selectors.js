/**
 * The global state selectors
 */

 /**
  * Main selectors
  */

 import { createSelector } from 'reselect';

 const selectBoard = (state) => state.get('boards');

 const makeSelectBoards = () => createSelector(
  selectBoard,
   (boardState) => boardState.get('boards')
 );

 const makeSelectName = () => createSelector(
  selectBoard,
  (boardState) => boardState.get('name')
);
const makeSelectDescription = () => createSelector(
  selectBoard,
  (boardState) => boardState.get('description')
);

 export {
   selectMain,
   makeSelectBoards,
   makeSelectName,
   makeSelectDescription,
 };
