import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import Banner from './banner.png'
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{background:'#000', width:'100%'}}>
      <Img src={Banner} alt="react-boilerplate - Logo" />
      </div>
    );
  }
}

export default Header;
