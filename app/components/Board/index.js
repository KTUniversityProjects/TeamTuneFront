/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from './DeleteButton';
import './styles.css';
import TasksList from '../../containers/TasksList';


export default class Board extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    return (
      <div className="boardBlock">
        <div className="title">
          <font color="darkgray"><center><u><b>{item.name}<DeleteButton
          project-id={item.id}
          children="Delete"
          onClick={this.props.onDeleteClick}
        /></b></u></center></font>
        </div>
        <div>
        <TasksList boardID={item.id} />
        </div>
        </div>
    );
  }
}
Board.propTypes = {
  item: PropTypes.object,
  onDeleteClick: PropTypes.func,
};
