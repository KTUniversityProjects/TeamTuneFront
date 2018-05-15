import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  min-width:200px;
  min-height:200px;
  float:left;
  border-bottom:1px solid #fff;
  padding: 2px 16px;
  margin-bottom:10px;
  margin-left:10px;
  margin-right:10px;
  margin-top:10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px 5px 0 0;
  background-color: lightblue;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export default Wrapper;
