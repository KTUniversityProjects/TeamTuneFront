/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { signup, redirectLogin } from './actions';
import { changeUsername } from './actions';
import { changePassword } from './actions';
import { changePasswordConfirm } from './actions';
import { changeEmail } from './actions';
import { makeSelectUsername, makeSelectSuccessText, makeSelectError } from './selectors';
import { makeSelectPassword } from './selectors';
import { makeSelectPasswordConfirm } from './selectors';
import { makeSelectEmail } from './selectors';
import reducer from './reducer';
import saga from './saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import H2 from 'components/H2';
import messages from './messages';
import CenteredSection from './CenteredSection';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';

export class SignUpPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {error, successText} = this.props;
    var content = null;
    if (error)
      content = error;
    if (successText)
      content = successText;
    return (
      <div>
        <Helmet>
          <title>Sign up page</title>
          <meta name="description" content="Sign up - TeamTune" />
        </Helmet>
        <CenteredSection>
        <H2>
          <FormattedMessage {...messages.header} />
        </H2>
          </CenteredSection>
          <CenteredSection>
          <Form onSubmit={this.props.onSubmitForm}>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={this.props.username}
                    onChange={this.props.onChangeUsername}
                  /><br />
                  <Input
                    id="email"
                    type="text"
                    placeholder="E-mail adress"
                    value={this.props.email}
                    onChange={this.props.onChangeEmail}
                  /><br />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={this.props.password}
                    onChange={this.props.onChangePassword}
                  /><br />
                  <Input
                    id="passwordConfirm"
                    type="password"
                    placeholder="Confirm password"
                    value={this.props.passwordConfirm}
                    onChange={this.props.onChangePasswordConfirm}
                  /><br />
                  <Button
                    id="submit"
                    type="submit"
                    children="Sign up"
                    onClick={this.props.onSubmitForm}
                  />
                  <Button
                    id="login"
                    type="submit"
                    children="Log in"
                    onClick={this.props.onLoginForm}
                  />
              </Form>
              <div>
              {content}
              </div>
              </CenteredSection>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
  email: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangePasswordConfirm: PropTypes.func,
  onChangeEmail: PropTypes.func,
  error: PropTypes.string,
  successText: PropTypes.string,
  content: PropTypes.string,
  onLoginForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onChangePasswordConfirm: (evt) => dispatch(changePasswordConfirm(evt.target.value)),
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(signup());
    },
    onLoginForm: (evt) => {
      dispatch(redirectLogin());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  passwordConfirm: makeSelectPasswordConfirm(),
  email: makeSelectEmail(),
  successText: makeSelectSuccessText(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignUpPage);
