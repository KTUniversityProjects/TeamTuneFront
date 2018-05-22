/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {editBoardRequest} from "../../containers/BoardsList/actions";
import DeleteButton from './DeleteButton';
import './styles.css';
import TasksList from '../../containers/TasksList';
import InlineEdit from 'react-edit-inline';
import {compose} from 'redux';


export class Board extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const item = this.props.item;
    return (
      <div className="boardBlock">
        <div className="title">
          <InlineEdit
              activeClassName="editing"
              text={item.name}
              paramName="message"
              change={this.props.changeText.bind(this, item.id)}
            /><DeleteButton
          project-id={item.id}
          children="Delete"
          onClick={this.props.onDeleteClick}
        />
        </div>
        <div className="tasks">
        <TasksList boardID={item.id} tasks={item.tasks} projectID={this.props.projectID}/>
        </div>
        </div>
    );
  }
}

Board.propTypes = {
  item: PropTypes.object,
  projectID: PropTypes.string,
  onDeleteClick: PropTypes.func,
  changeText: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    changeText: (itemID, data) => {
       dispatch(editBoardRequest(data, itemID));
    },
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  )(Board);
