import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import {compose} from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {createStructuredSelector} from 'reselect';
import {makeSelectProjects} from "./selectors";
import { makeSelectName } from './selectors';
import { makeSelectDescription } from './selectors';

import {loadProjectsRequest} from "./actions";
import {deleteProjectRequest} from "./actions";
import { changeName} from './actions';
import { changeDescription } from './actions';
import { addProjectRequest } from './actions';

import ProjectListItem from '../../components/ProjectListItem';
import Form from '../../components/Form';
import Button from '../../components/Button';
import './Styles.css';

export class ProjectsList extends React.PureComponent {

  componentDidMount() {
    this.props.onPageLoad();
  }



  render() {
    const { projects, onDelete } = this.props;
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
              id="add"
              className="submitButton"
              type="submit"
              children="+"
              onClick={this.props.onSubmitForm}
            />
          </Form>
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
  name: PropTypes.string,
  description: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeDescription: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (evt) => {
      dispatch(loadProjectsRequest());
    },
    onDelete: (projectID) => {
      dispatch(deleteProjectRequest(projectID));
      return false;
    },
    onChangeName: (evt) => dispatch(changeName(evt.target.value)),
    onChangeDescription: (evt) => dispatch(changeDescription(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addProjectRequest());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects(),
  name: makeSelectName(),
  description: makeSelectDescription(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'projects', saga});
const withReducer = injectReducer({key: 'projects', reducer});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectsList);
