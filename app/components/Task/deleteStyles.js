import { css } from 'styled-components';

const buttonStyles = css`
  cursor: pointer;
  font-weight: bold;
  font-size: 10px;
  color: blue;
  float:right;
  &:before {
    content: "✖";
  }
  &:hover {
    color: #b40000;
  }
`;

export default buttonStyles;
