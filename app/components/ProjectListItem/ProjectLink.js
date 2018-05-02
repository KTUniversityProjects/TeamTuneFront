import NormalA from 'components/A';

const ProjectLink = NormalA.extend`
  color: #41addd;
  display: block;
  float:left;
  width: 210px;
  text-decoration:none;
  
  &:active {
    color: #41addd;
  }
  &:hover {
    color: #fff;
  }
  &:focus {
    color: #41addd;
  }
  &:selected {
    color: #41addd;
  }
`;

export default ProjectLink;
