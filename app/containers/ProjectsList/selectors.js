/**
 * The global state selectors
 */

 /**
  * Main selectors
  */

 import { createSelector } from 'reselect';

 const selectProjectList = (state) => state.get('projects');

 const makeSelectProjects = () => createSelector(
  selectProjectList,
   (projectState) => projectState.get('projects')
 );

const makeSelectName = () => createSelector(
  selectProjectList,
  (projectState) => projectState.get('name')
);
const makeSelectDescription = () => createSelector(
  selectProjectList,
  (projectState) => projectState.get('description')
);
const makeSelectError = () => createSelector(
  selectProjectList,
  (projectState) => projectState.get('error')
);
const makeSelectSuccessText = () => createSelector(
  selectProjectList,
  (projectState) => projectState.get('successText')
);


 export {
   selectMain,
   makeSelectProjects,
   makeSelectName,
   makeSelectDescription,
   makeSelectError,
   makeSelectSuccessText
 };
