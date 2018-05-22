import { css } from 'styled-components';

const buttonStyles = css`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  color: #556a17;
  float:right;
  margin-right:5px;
  &:before {
    content: "✐";
  }
  &:hover {
    color: #6f8237;
  }
`;

export default buttonStyles;
