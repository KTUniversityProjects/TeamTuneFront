import { css } from 'styled-components';

const buttonStyles = css`
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #41addd;

  &:active {
    color: #fff;
  }
  &:onhover {
    color: #0000;
  }
`;

export default buttonStyles;
