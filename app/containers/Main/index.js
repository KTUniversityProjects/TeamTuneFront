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
import Background from './logo.png';

import saga from './saga';

export class Main extends React.PureComponent {

  render() {
   return (
      <div className="projectMainBg" style={{"backgroundImage" : "url(" + Background + ")"}}>
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
