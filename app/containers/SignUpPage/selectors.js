/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectSignup = (state) => state.get('signup');

const makeSelectUsername = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('username')
);
const makeSelectPassword = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('password')
);
const makeSelectPasswordConfirm = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('passwordConfirm')
);
const makeSelectEmail = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('email')
);
const makeSelectError = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('error')
);
const makeSelectSuccessText = () => createSelector(
  selectSignup,
  (signupState) => signupState.get('successText')
);

export {
  selectSignup,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectPasswordConfirm,
  makeSelectEmail,
  makeSelectError,
  makeSelectSuccessText
};
