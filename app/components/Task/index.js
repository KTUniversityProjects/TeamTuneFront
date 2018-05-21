/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from './DeleteButton';
import './styles.css';


export default class Task extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    return (
        <div className="title">
          {item.name}
          <DeleteButton
          project-id={item.id}
          children="Delete"
          onClick={this.props.onDeleteClick}
        />
        </div>
    );
  }
}
Task.propTypes = {
  item: PropTypes.object,
  onDeleteClick: PropTypes.func,
};
