import React from 'react';

import Img from './Img';
import Banner from './banner.png'
import { Link } from 'react-router-dom';
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{background:'#000', width:'100%', position: 'fixed',}}>
        <Link to="/" ><Img src={Banner} alt="react-boilerplate - Logo" /></Link>
      </div>
    );
  }
}

export default Header;
