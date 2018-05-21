/**
 * The global state selectors
 */

 /**
  * Main selectors
  */

 import { createSelector } from 'reselect';

 const selectMain = (state) => state.get('tasks');

 const makeSelectTasks = () => createSelector(
  selectMain,
   (mainState) => mainState.get('tasks')
 );

 export {
   selectMain,
   makeSelectTasks,
 };
