import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import deleteStyles from "./deleteStyles";

const A = styled.a`${deleteStyles}`;

function Button(props) {
  return (
    <A onClick={props.onClick}/>
  );
}

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
