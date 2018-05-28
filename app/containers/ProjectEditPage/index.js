/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import {compose} from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {createStructuredSelector} from 'reselect';
import { makeSelectName, makeSelectDescription, makeSelectProject, makeSelectUser } from './selectors';

import {getProject, saveProject, changeName, changeDescription, onChangeUser, addUser} from "./actions";

import {slide as Menu} from 'react-burger-menu';
import ProjectsList from 'containers/ProjectsList';
import './Styles.css';

import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import CenteredSection from '../SignUpPage/CenteredSection';

class ProjectEditPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  componentDidMount() {
    console.log(this.state.projectID);
    this.props.onPageLoad(this.state.projectID);
  }

  componentWillMount() {
    const params = new URLSearchParams(this.props.location.search);
    const ID = params.get('id');
    this.setState({projectID: ID});
  }

  componentWillReceiveProps(nextProps) {
    const params = new URLSearchParams(nextProps.location.search);
    const ID = params.get('id');
    const prevID = this.state.projectID;
    if (ID != prevID){
      this.setState({projectID: ID});
      this.props.onPageLoad(ID);
    }
  }

  render() {
    const { project } = this.props;
    return (
      <div>
        <Menu isOpen={false} width={'auto'}>
          <ProjectsList/>
        </Menu>
        <div>
          <CenteredSection>
          <p className="title no-margin-top">Edit your project</p>
          <Form onSubmit={this.props.onSubmitForm}>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Project name"
                    value={this.props.name}
                    onChange={this.props.onChangeName}
                  /><br />
                  <Input
                    id="description"
                    type="text"
                    placeholder="Project description"
                    value={this.props.description}
                    onChange={this.props.onChangeDescription}
                  /><br />
                  <Button
                    id="submit"
                    type="submit"
                    children="Save"
                    onClick={this.props.onSaveForm.bind(null, project.id)}
                  />
                  <p className="title">Add new users to your project</p>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter user e-mail adress"
                    value={this.props.user}
                    onChange={this.props.onChangeUser}
                  />
                   <Button
                    id="submit"
                    type="submit"
                    children="Add user"
                    onClick={this.props.onAddUser.bind(null, project.id)}
                  /><br />
              </Form>
              </CenteredSection>
        </div>
      </div>
    );
  }
}

ProjectEditPage.propTypes = {
  project: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  projectID: PropTypes.string,
  onPageLoad: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  onSaveForm: PropTypes.func,
  onAddUser: PropTypes.func,
  user: PropTypes.string
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeName: (evt) => dispatch(changeName(evt.target.value)),
    onChangeDescription: (evt) => dispatch(changeDescription(evt.target.value)),
    onPageLoad: (id) => {
      dispatch(getProject(id));
    },
    onSaveForm: (id) =>{
      dispatch(saveProject(id));
    },
    onAddUser: (pid) =>{
      dispatch(addUser(pid));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  description: makeSelectDescription(),
  project: makeSelectProject(),
  user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'projectEditPage', reducer});
const withSaga = injectSaga({key: 'projectEditPage', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ProjectEditPage);
