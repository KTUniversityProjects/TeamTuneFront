/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { compose } from 'redux';
import { slide as Menu } from 'react-burger-menu';

import ProjectsList from '../../containers/ProjectsList';
import injectSaga from '../../utils/injectSaga';
import './Styles.css';

import saga from './saga';

export class Main extends React.PureComponent {

  render() {
   return (
      <div>
      <Menu width={ 'auto' } menuClassName={ "teamtune-menu" }>
      <ProjectsList/>
      </Menu>
      </div>
    );
  }
}

const withSaga = injectSaga({ key: 'main', saga });

export default compose(
  withSaga,
)(Main);
