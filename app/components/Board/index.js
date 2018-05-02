/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import ProjectLink from './ProjectLink';
import Wrapper from './Wrapper';
import DeleteButton from 'components/DeleteButton';


export default class Board extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    // Put together the content of the repository
    const content = (
      <Wrapper>
          {item.name}
        <DeleteButton
          project-id={item.id}
          children="Delete"
          onClick={this.props.onDeleteClick}
        />
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`project-item-${item.id}`} item={content} />
    );
  }
}
ProjectListItem.propTypes = {
  item: PropTypes.object,
  onDeleteClick: PropTypes.func,
};
