import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import {compose} from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {createStructuredSelector} from 'reselect';
import { makeSelectProjects, makeSelectName, makeSelectDescription,  makeSelectSuccessText, makeSelectError } from './selectors';

import {loadProjectsRequest, deleteProjectRequest} from "./actions";
import { changeName, changeDescription, addProjectRequest, logoutRequest } from './actions';

import ProjectListItem from '../../components/ProjectListItem';
import Form from '../../components/Form';
import Button from '../../components/Button';
import './Styles.css';

export class ProjectsList extends React.PureComponent {

  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    const { projects, onDelete, error, successText } = this.props;
    var contentMsg = null;
    if (error || error != "")
      contentMsg = error;
    if (successText || successText != "")
      contentMsg = successText;
    var content = (<div></div>);
    if (projects) {
        content = (
        <div>
          {projects.map(item => (
            <ProjectListItem key={item.id} item={item} onDeleteClick={onDelete.bind(null, item.id)}/>
          ))}
        </div>
      );
    }
      return (
      <div>
        { content }
        <div>
          <Form>
            <input
              id="name"
              type="text"
              placeholder="Project name"
              value={this.props.name}
              onChange={this.props.onChangeName}
            /><br />

            <textarea
              id="description"
              placeholder="Project description"
              value={this.props.description}
              onChange={this.props.onChangeDescription}
            /><br />

            <Button
              className="submitButton"
              type="submit"
              children="+"
              onClick={this.props.onSubmitForm}
            />
          </Form>

          <Button
            className="submitButton"
            type="submit"
            children="Logout"
            onClick={this.props.logout}
          />
        </div>
        <div>
        {contentMsg}
        </div>
      </div>
      );
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onDelete: PropTypes.func,
  onSubmitForm: PropTypes.func,
  logout: PropTypes.func,
  name: PropTypes.string,
  description: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeDescription: PropTypes.func,
  error: PropTypes.string,
  successText: PropTypes.string,
  contentMsg: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (evt) => {
      dispatch(loadProjectsRequest());
    },
    onDelete: (projectID) => {
      dispatch(deleteProjectRequest(projectID));
    },
    onChangeName: (evt) => dispatch(changeName(evt.target.value)),
    onChangeDescription: (evt) => dispatch(changeDescription(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addProjectRequest());
    },
    logout: () => {
      dispatch(logoutRequest());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects(),
  name: makeSelectName(),
  description: makeSelectDescription(),
  successText: makeSelectSuccessText(),
  error: makeSelectError(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'projects', saga});
const withReducer = injectReducer({key: 'projects', reducer});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectsList);
