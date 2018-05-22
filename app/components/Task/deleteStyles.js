import { css } from 'styled-components';

const buttonStyles = css`
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  color: #97b9db;
  float:right;
  &:before {
    content: "✖";
  }
  &:hover {
    color: #617181;
  }
`;

export default buttonStyles;
