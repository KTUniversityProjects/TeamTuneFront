/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import Wrapper from './Wrapper';
import { slide as Menu } from 'react-burger-menu';

import ProjectsList from 'containers/ProjectsList';
import injectSaga from 'utils/injectSaga';

import saga from './saga';

export class Main extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Menu width={ '20%' }>
      <ProjectsList/>
      </Menu>
    );
  }
}

const withSaga = injectSaga({ key: 'main', saga });

export default compose(
  withSaga,
)(Main);
