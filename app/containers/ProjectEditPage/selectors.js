/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectEditPage = (state) => state.get('projectEditPage');

const makeSelectName = () => createSelector(
  selectEditPage,
  (editPageState) => editPageState.get('name')
);
const makeSelectDescription = () => createSelector(
  selectEditPage,
  (editPageState) => editPageState.get('description')
);

const makeSelectProject = () => createSelector(
  selectEditPage,
  (editPageState) => editPageState.get('project')
);

const makeSelectUser = () => createSelector(
  selectEditPage,
  (editPageState) => editPageState.get('user')
);

export {
  selectEditPage,
  makeSelectName,
  makeSelectDescription,
  makeSelectProject,
  makeSelectUser
};
