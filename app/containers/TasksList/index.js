import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import {compose} from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {createStructuredSelector} from 'reselect';
import {makeSelectTasks} from "./selectors";
import {deleteTaskRequest, loadTasksRequest, addTaskRequest} from "./actions";

import Button from 'components/Button';
import Task from '../../components/Task';
import './Styles.css';

export class TasksList extends React.PureComponent {

  componentDidMount() {
    this.props.onPageLoad(this.props.boardID);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.boardID != nextProps.boardID)
    {
       this.props.onPageLoad(nextProps.boardID);
    }
  }

  render() {
    const { tasks, onDelete } = this.props;
    var content = (<div></div>);
    if (tasks) {
        content = (
        <div>
          {tasks.map(item => (
            <Task key={item.id} item={item} onDeleteClick={onDelete.bind(null, item.id)}/>
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
                    onClick={this.props.onSubmitForm.bind(null, this.props.boardID)}
                  />
      </div>
      );
  }
}

TasksList.propTypes = {
  tasks: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onDelete: PropTypes.func,
  boardID: PropTypes.string,
  onSubmitForm: PropTypes.func,

};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (tasks) => {
      dispatch(loadTasksRequest(tasks));
  },
    onDelete: (itemID) => {
      dispatch(deleteTaskRequest(itemID));
    },
    onSubmitForm: (boardID) => {
      dispatch(addTaskRequest(boardID));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  tasks: makeSelectTasks(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'tasks', saga});
const withReducer = injectReducer({key: 'tasks', reducer});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TasksList);
