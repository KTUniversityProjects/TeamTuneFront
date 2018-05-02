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
import { slide as Menu } from 'react-burger-menu';

import ProjectsList from 'containers/ProjectsList';
import injectSaga from 'utils/injectSaga';
import './Styles.css';

import saga from './saga';

export class ProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function



  render() {
   return (
      <div>
      <Menu width={ '200px' }>
      <ProjectsList/>
      </Menu>
      HUJNIAAA
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'projectpage', saga });

export default compose(
  withSaga,
)(ProjectPage);
