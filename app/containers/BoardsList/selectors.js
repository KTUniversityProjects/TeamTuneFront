/**
 * The global state selectors
 */

 /**
  * Main selectors
  */

 import { createSelector } from 'reselect';

 const selectMain = (state) => state.get('boards');

 const makeSelectBoards = () => createSelector(
  selectMain,
   (mainState) => mainState.get('boards')
 );

 const makeSelectName = () => createSelector(
  selectMain,
  (mainState) => mainState.get('name')
);
const makeSelectDescription = () => createSelector(
  selectMain,
  (mainState) => mainState.get('description')
);

 export {
   selectMain,
   makeSelectBoards,
   makeSelectName,
   makeSelectDescription,
 };
