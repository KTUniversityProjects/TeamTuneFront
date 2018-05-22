import { css } from 'styled-components';

const buttonStyles = css`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  color: #bd1111;
  float:right;
  &:before {
    content: "✖";
  }
  &:hover {
    color: #ff0000;
  }
`;

export default buttonStyles;
