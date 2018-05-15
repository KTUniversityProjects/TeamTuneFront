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
import BoardsList from 'containers/BoardsList';
import injectSaga from 'utils/injectSaga';
import './Styles.css';

import saga from './saga';

export class ProjectPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    const params = new URLSearchParams(this.props.location.search);
    const ID = params.get('id');
   return (
      <div>
      <Menu width={ 'auto' }>
      <ProjectsList/>
      </Menu>
      <BoardsList projectID={ID}/>
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'projectpage', saga });

export default compose(
  withSaga,
)(ProjectPage);
