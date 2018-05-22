import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import editStyles from "./editStyles";

const A = styled.a`${editStyles}`;

function Button(props) {
  return (
    <A onClick={props.onClick}/>
  );
}

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
