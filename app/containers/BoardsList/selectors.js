/**
 * The global state selectors
 */

 /**
  * Main selectors
  */

 import { createSelector } from 'reselect';

 const selectMain = (state) => state.get('projects');

 const makeSelectProjects = () => createSelector(
  selectMain,
   (mainState) => mainState.get('projects')
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
   makeSelectProjects,
   makeSelectName,
   makeSelectDescription,
 };
