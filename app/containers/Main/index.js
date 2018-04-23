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
    var styles = {
    bmBurgerButton: {
    position: 'fixed',
    width: '20px',
    height: '17px',
    top: '8px',
    left: '7px',
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
    return (
      <div>
      <Menu width={ '200px' } styles={styles} >
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
