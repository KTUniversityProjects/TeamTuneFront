import React from 'react';
import PropTypes from 'prop-types';

import ProjectListItem from '../../components/ProjectListItem';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import reducer from './reducer';
import saga from './saga';
import {compose} from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {makeSelectProjects} from "./selectors";
import {loadProjects} from "./actions";
import {deleteProject} from "./actions";

export class ProjectsList extends React.PureComponent {

  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    const { projects, onDelete } = this.props;
    let content = (<div></div>);

    if (projects) {
      content = (
        <div>
          {projects.map(item => (
            <ProjectListItem key={item.id} item={item} onDeleteClick={onDelete.bind(null, item.id)}/>
          ))}
        </div>
      );
    }
    console.log(content);
    return content;
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]),
  onDelete: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (evt) => {
      dispatch(loadProjects());
    },
    onDelete: (projectID) => {
      dispatch(deleteProject(projectID));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  projects: makeSelectProjects()
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'projects', saga});
const withReducer = injectReducer({key: 'projects', reducer});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectsList);
