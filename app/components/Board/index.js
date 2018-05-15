/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';
import DeleteButton from './DeleteButton';


export default class Board extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    return (
      <Wrapper>
          {item.name}
        <DeleteButton
          project-id={item.id}
          children="Delete"
          onClick={this.props.onDeleteClick}
        />
      </Wrapper>
    );
  }
}
Board.propTypes = {
  item: PropTypes.object,
  onDeleteClick: PropTypes.func,
};
