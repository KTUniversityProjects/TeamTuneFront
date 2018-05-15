import { css } from 'styled-components';

const buttonStyles = css`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  color: #ff0000;
  float:right;
  &:before {
    content: "✖";
  }
  &:hover {
    color: #b40000;
  }
`;

export default buttonStyles;
