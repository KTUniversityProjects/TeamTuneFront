import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {compose} from 'redux';

import {createStructuredSelector} from 'reselect';
import {deleteTaskRequest, addTaskRequest} from "./actions";

import Button from 'components/Button';
import Task from '../../components/Task';
import './Styles.css';

export class TasksList extends React.PureComponent {

  render() {
    const { tasks, onDelete } = this.props;
    var content = (<div></div>);
    if (tasks) {
        content = (
        <div>
          {tasks.map(item => (
            <Task key={item.id} item={item} onDeleteClick={onDelete.bind(null, item.id, this.props.projectID)}/>
          ))}
        </div>
      );
    }
      return (
      <div>
        { content }
        <Button
                    id="add"
                    type="submit"
                    className="newForm"
                    class="submitButton"
                    children="New task"
                    onClick={this.props.onSubmitForm.bind(null, this.props.boardID, this.props.projectID)}
                  />
      </div>
      );
  }
}

TasksList.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func,
  boardID: PropTypes.string,
  projectID: PropTypes.string,
  onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onDelete: (itemID, projectID) => {
      dispatch(deleteTaskRequest(itemID, projectID));
    },
    onSubmitForm: (boardID, projectID) => {
      dispatch(addTaskRequest(boardID, projectID));
    },
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(TasksList);
